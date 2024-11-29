import NextImage from "@/components/image/NextImage";
import { getStoreKey, updateAddress } from "@/utils/functions";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import styles from "./Header.module.scss";
export default function Header() {
  const router = useRouter();

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [data, setData] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleDropdown = (name: string) => {
    updateAddress(name);
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(getStoreKey());
    }
  }, []);

  const storeList = [
    {
      name: "Store 1",
      key: "store1",
    },
    {
      name: "Store 2",
      key: "store2",
    },
    {
      name: "Store 3",
      key: "store3",
    },
    {
      name: "Store 4",
      key: "store4",
    },
  ];

  return (
    <>
      <Head>
        <title>ChatBar</title>
        <link rel="icon" href="/images/fav_icon.png" />
      </Head>
      <header
        className={
          isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header
        }
      >
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <NextImage src="/images/logo.png" alt="Payorio" />
              </Link>
            </div>
            <div
              className={`${styles.menu} ${
                isMenuVisible ? styles.visible : ""
              }`}
            >
              <div className={styles.menu_wrapper}>
                <ul className={styles.ul}>
                  <li className={styles.nav_item}>
                    <Link
                      className={`${styles.nav_link} ${
                        router.pathname === "/" ? styles.active : ""
                      } `}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link
                      className={`${styles.nav_link} ${
                        router.pathname === "/about" ? styles.active : ""
                      } `}
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link
                      className={`${styles.nav_link} ${
                        router.pathname === "/menus" ? styles.active : ""
                      } `}
                      href="/menus"
                    >
                      Our Menu
                    </Link>
                  </li>

                  <li className={styles.nav_item}>
                    <Link
                      className={`${styles.nav_link} ${
                        router.pathname === "/contact" ? styles.active : ""
                      } `}
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link
                      className={`${styles.nav_link} ${
                        router.pathname === "/franchises" ? styles.active : ""
                      } `}
                      href="/franchises"
                    >
                      Franchises
                    </Link>
                  </li>
                  <Dropdown className={styles.dropdown}>
                    <Dropdown.Toggle id="dropdown-basic">
                      Our stores
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {storeList.map((store) => (
                        <Dropdown.Item
                          className={data === store.key ? styles.selected : ""}
                          onClick={() => handleDropdown(store.key)}
                          key={store.key}
                        >
                          {store.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
            <div className={styles.ham} onClick={toggleMenu}>
              <HiOutlineMenuAlt2 />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
