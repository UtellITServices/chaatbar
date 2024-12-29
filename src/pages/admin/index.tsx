import CustomButton from "@/components/elements/button";
import HtmlRenderer from "@/components/elements/htmlRender";
import PopupLayout from "@/components/elements/popup";
import { db } from "@/firebase.config";
import AdminLayout from "@/layout/adminDashboard";
import BulkUploadForm from "@/pageComponent/admin/category/bulkModal";
import AddEditCategoryForm from "@/pageComponent/admin/category/categoryModal";
import { useStore } from "@/store";
import clsx from "clsx";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "sonner";
import styles from "./admin.module.scss";

export default function Category() {
  const { menuCategories, setMenuCategories, categoryLoader } = useStore(
    (state: any) => state
  );
  const [loading, setLoading] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(null);
  const [uploadJsonModal, setUploadJsonModal] = useState(null);

  const getData = async () => {
    const collectionRef = collection(db, "category");
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMenuCategories(data ?? []);
    } catch (err: any) {
      console.log("err==>", err);
    }
    setLoading(false);
  };

  const handleClose = () => {
    setAddModal(false);
    setEditModal(null);
    setUploadJsonModal(null);
  };

  const handleDelete = async () => {
    setLoadingDelete(true);
    try {
      const docRef = doc(db, "category", deleteModal?.id);
      await deleteDoc(docRef);
      toast.success("Deleted successfully!");
      setDeleteModal(null);
      getData();
    } catch (e) {
      toast.error("Error while deleting");
      console.error("Error deleting document: ", e);
    }
    setLoadingDelete(false);
  };

  return (
    <AdminLayout>
      <div className={clsx(styles.page, styles.projects)}>
        <div className={styles.heading}>
          <h4>Projects</h4>
          <CustomButton onClick={() => setAddModal(true)}>+ Add</CustomButton>
        </div>
        <div className="table_wrapper mt-4">
          <Table responsive bordered className={styles.table}>
            <thead>
              <tr>
                <th className={styles.contain_width}>Sno.</th>
                <th>Title</th>
                <th>Description</th>
                <th className={styles.contain_width}>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading || categoryLoader ? (
                <tr>
                  <td colSpan={10}>
                    <div className="d-flex justify-content-center py-4">
                      <RotatingLines width="30" strokeColor="#f28300" />
                    </div>
                  </td>
                </tr>
              ) : !!menuCategories?.length ? (
                menuCategories?.map((item, index: number) => (
                  <tr key={item?.id}>
                    <td className={styles.contain_width}>{index + 1}</td>
                    <td>{item?.title}</td>
                    <td>
                      <HtmlRenderer
                        htmlContent={
                          item?.description?.length > 80
                            ? item.description.slice(0, 80) + "..."
                            : item?.description
                        }
                      />
                    </td>
                    <td className={styles.contain_width}>
                      <div className="action_btn">
                        <span
                          title="Upload"
                          className="view"
                          onClick={() => setUploadJsonModal(item)}
                        >
                          <FaCloudUploadAlt />
                        </span>
                        <span
                          title="Edit"
                          className="edit"
                          onClick={() => setEditModal(item)}
                        >
                          <MdModeEditOutline />
                        </span>
                        <span
                          title="Delete"
                          className="delete"
                          onClick={() => setDeleteModal(item)}
                        >
                          <RiDeleteBin6Line />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10}>
                    <h5 className="text-center p-5">No data found</h5>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <PopupLayout
        closeBtn
        title={!!editModal ? "Edit project Modal" : "Add project modal"}
        show={!!addModal || !!editModal}
        onHide={handleClose}
        maxWidth={650}
      >
        <AddEditCategoryForm
          handleClose={handleClose}
          data={editModal}
          updateList={getData}
        />
      </PopupLayout>
      <PopupLayout
        closeBtn
        title={`Sure to delete ${deleteModal?.title}`}
        show={!!deleteModal}
        onHide={() => (!loadingDelete ? setDeleteModal(null) : null)}
        maxWidth={600}
      >
        <div className={styles.confirm_delete}>
          <p>Are you sure you want to delete this Category?</p>
          <div className={styles.confirm_delete_btn}>
            <CustomButton
              variant="outline-danger"
              disabled={loadingDelete}
              onClick={() => setDeleteModal(null)}
            >
              Cancel
            </CustomButton>
            <CustomButton
              variant="danger"
              onClick={handleDelete}
              loading={loadingDelete}
            >
              Delete
            </CustomButton>
          </div>
        </div>
      </PopupLayout>
      <PopupLayout
        closeBtn
        title="Upload Bulk data"
        show={!!uploadJsonModal}
        onHide={handleClose}
        maxWidth={650}
      >
        <BulkUploadForm handleClose={handleClose} data={uploadJsonModal} />
      </PopupLayout>
    </AdminLayout>
  );
}
