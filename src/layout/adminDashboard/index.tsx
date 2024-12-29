import { useState } from "react";
import styles from "./adminLayout.module.scss";
import Sidebar from "@/common/sidebar";
interface IProps {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: IProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`${styles.DashboardLayout} ${
        sidebarOpen ? "sidebarClose" : ""
      }`}
    >
      <div className={styles.DashboardPage}>
        <div
          className={`${styles.overlay} ${sidebarOpen ? styles.hide : ""}`}
          onClick={handleToggleSidebar}
        />
        <div className={styles.DashboardSidebar}>
          <Sidebar />
        </div>

        <div className={styles.DashboardBody}>
          {/* <TopBar
            toggleSidebar={handleToggleSidebar}
            sidebarOpen={sidebarOpen}
          /> */}
          <div className={styles.DashboardBody_content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
