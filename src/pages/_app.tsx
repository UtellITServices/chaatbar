import "@/styles/globals.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Preloader from "@/components/loader";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Component {...pageProps} />
    </>
  );
}
