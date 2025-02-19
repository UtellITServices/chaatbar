import CustomButton from "@/components/elements/button";
import PopupLayout from "@/components/elements/popup";
import { db } from "@/firebase.config";
import AdminLayout from "@/layout/adminDashboard";
import AddEditMenu from "@/pageComponent/admin/menu/addEditMenu";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "sonner";
import styles from "../admin.module.scss";

const Products = () => {
  const router = useRouter();
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [editModal, setEditModal] = useState(null);

  const [categoryDetail, setCategoryDetail] = useState(null);
  const [menuList, setMenuList] = useState([]);

  const handleDelete = async () => {
    setLoadingDelete(true);
    try {
      const docRef = doc(db, "menus", deleteModal?.id);
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

  console.log("router.query", router.query?.id);

  const getData = async () => {
    const collectionRef = collection(db, "menus");

    const q = query(
      collectionRef,
      where("category_id", "==", router.query?.id)
    );
    try {
      const querySnapshot = await getDocs(q);
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      data.sort((a, b) => {
        const orderA = a.order_id ?? Number.MAX_SAFE_INTEGER; // If undefined, move to end
        const orderB = b.order_id ?? Number.MAX_SAFE_INTEGER;
        return orderA - orderB;
      });
      setMenuList(data ?? []);
    } catch (err: any) {
      console.log("err==>", err);
    }
    setLoading(false);
  };
  const getCategoryDoc = async () => {
    const docRef = doc(db, "category", router.query?.id as string);
    try {
      const docSnap = await getDoc(docRef);
      // const data = querySnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      // }));
      // setMenuList(data ?? []);
      console.log("docSnap", docSnap);

      setCategoryDetail({ id: docSnap.id, ...docSnap.data() });
      // if (docSnap.exists()) {
      // } else {
      //   console.log("No such document!");
      //   return null;
      // }
    } catch (err: any) {
      console.log("err==>", err);
    }
    setLoading(false);
  };
  console.log("categoryDetail", categoryDetail);

  const handleCloseModal = () => {
    setAddModal(false);
    setEditModal(null);
    setDeleteModal(null);
  };

  useEffect(() => {
    if (router.query?.id) {
      getData();
      getCategoryDoc();
    }
  }, [router.query]);

  return (
    <AdminLayout>
      {/* <CustomButton variant="danger" size="sm">
        <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <IoArrowBack />
          Back
        </span>
      </CustomButton> */}
      <div className={styles.heading}>
        <h4>MenusList of ({categoryDetail?.title})</h4>
        <CustomButton onClick={() => setAddModal(true)}>+ Menu</CustomButton>
        {/* <CustomButton onClick={addDataToFirestore}>+ Menu</CustomButton> */}
      </div>
      <div className="table_wrapper mt-4">
        <Table responsive bordered className={styles.table}>
          <thead>
            <tr>
              <th>S no.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={100} className="p-5 text-center">
                  <RotatingLines width="30" strokeColor="#f28300" />
                </td>
              </tr>
            ) : !menuList?.length ? (
              <tr>
                <td colSpan={100} className="p-5 text-center">
                  No data found
                </td>
              </tr>
            ) : (
              menuList?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>{item?.description ?? "__"}</td>
                  <td>{item?.price ?? "__"}</td>
                  <td>
                    <div className="action_btn">
                      <span
                        title="Edit"
                        className="edit"
                        onClick={() => {
                          setEditModal(item);
                        }}
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
            )}
          </tbody>
        </Table>
        {/* <Pagination className="justify-content-center">
          <Pagination.Item active as="span">
            1
          </Pagination.Item>
          <Pagination.Item as="span">2</Pagination.Item>
        </Pagination> */}
      </div>
      <PopupLayout
        closeBtn
        title={!!editModal ? "Edit menu" : "Add menu"}
        show={addModal || editModal}
        onHide={handleCloseModal}
        maxWidth={556}
      >
        <AddEditMenu
          handleCloseModal={handleCloseModal}
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
          <p>Are you sure you want to delete this Menu?</p>
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
    </AdminLayout>
  );
};

export default Products;
