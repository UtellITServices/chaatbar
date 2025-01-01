import { clearToken } from "@/utils/functions";
import { Dropdown } from "react-bootstrap";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import NextImage from "@/components/NextImage";

interface IProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}
const TopBar = ({ toggleSidebar, sidebarOpen }: IProps) => {
  const router = useRouter();
  const handleLogout = () => {
    clearToken();
    router.replace("/auth/login");
  };

  const dropdownData = [
    {
      name: "Edit profile",
      icon: <FiEdit2 />,
      disabled: true,
    },
    {
      name: "Change password",
      icon: <MdLockOutline />,
      disabled: true,
    },
    {
      name: "Logout",
      icon: <RiLogoutCircleRLine />,
      onclick: () => handleLogout(),
    },
  ];

  return (
    <div className={styles.topBar}>
      <div className={styles.topBar_search}>
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </button>
      </div>
      <div className={styles.topBar_right}>
        <Dropdown className="themeDropdown">
          <Dropdown.Toggle variant="outline-primary" as="div">
            <div className={styles.login_user}>
              <NextImage src="/images/dummyPic.webp" alt="" />
              <span className={styles.name}>
                <span>Admin</span>
                <FaCaretDown />
              </span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu align="end" className="themeDropdown_menu">
            {dropdownData.map((item, index) => (
              <Dropdown.Item
                as="li"
                disabled={item.disabled}
                key={index}
                onClick={item?.onclick}
              >
                <span className="themeDropdown_menuIcon">{item.icon}</span>
                {item.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default TopBar;
