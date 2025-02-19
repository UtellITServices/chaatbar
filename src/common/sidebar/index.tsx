import NextImage from "@/components/NextImage";
import { auth } from "@/firebase.config";
import { clearToken } from "@/utils/functions";
import clsx from "clsx";
import { signOut } from "firebase/auth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const sidebarList = [
    {
      name: "Categories",
      icon: <RxDashboard />,
      link: "/admin",
    },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    clearToken();
    router.replace("/auth/login");
  };
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarList}>
        <div className={styles.logo_wrap}>
          <a className={styles.logo} onClick={() => router.push("/admin")}>
            <span>
              <NextImage src="/images/logotwo.svg" alt="" />
            </span>
          </a>
        </div>
        <ul>
          {sidebarList.map((item, index) => (
            <li
              className={clsx(pathname === item.link ? styles.active : "")}
              key={index}
              onClick={() => router.push(item.link)}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebarList}>
        <ul>
          <li onClick={handleLogout}>
            <RiLogoutCircleRLine />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
