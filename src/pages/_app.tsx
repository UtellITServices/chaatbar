import Preloader from "@/components/loader";
import { auth, db } from "@/firebase.config";
import { useStore } from "@/store";
import "@/styles/globals.scss";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { clearToken, storeToken } from "../utils/functions";

export default function App({ Component, pageProps }: AppProps) {
  const {
    setIsLogin,
    isLogin,
    setMenuCategories,
    setCategoryLoader,
    menuCategories,
  } = useStore((state: any) => state);
  const router = useRouter();
  const [checkUserLoader, setCheckUserLoader] = useState(true);

  const getData = async () => {
    setCategoryLoader(true);
    const collectionRef = collection(db, "category");
    try {
      const querySnapshot = await getDocs(collectionRef);
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      data.sort((a, b) => {
        const orderA = a.order_id ?? Number.MAX_SAFE_INTEGER; // If undefined, move to end
        const orderB = b.order_id ?? Number.MAX_SAFE_INTEGER;
        return orderA - orderB;
      });
      setMenuCategories(data ?? []);
    } catch (err: any) {
      console.log("err==>", err);
    }
    setCategoryLoader(false);
  };

  useEffect(() => {
    const checkAuth = () => {
      if (
        router.pathname.startsWith("/admin") ||
        router.pathname.startsWith("/auth")
      ) {
        setCheckUserLoader(true);
        clearToken();

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            storeToken({ token: currentUser.uid });
            setIsLogin(true);
          } else {
            setIsLogin(false);
            clearToken();
          }
          setCheckUserLoader(false);
        });

        // Cleanup subscription
        return () => unsubscribe();
      } else {
        setCheckUserLoader(false);
      }
    };

    checkAuth();
  }, [router.pathname]);

  useEffect(() => {
    const isAdmin = router.pathname.startsWith("/admin");
    if (isLogin && isAdmin && !menuCategories) {
      getData();
    }
  }, [isLogin, router.pathname]);

  return (
    <>
      {checkUserLoader && <Preloader />}
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        duration={3000}
        visibleToasts={3}
        richColors
      />
    </>
  );
}
