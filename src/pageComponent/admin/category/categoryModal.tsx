import CustomButton from "@/components/elements/button";
import InputField from "@/components/elements/input";
import { db } from "@/firebase.config";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { FC, useState } from "react";
import { toast } from "sonner";
import styles from "./category.module.scss";

interface IProps {
  handleClose: () => void;
  updateList: () => void;
  data: any;
}

const AddEditCategoryForm: FC<IProps> = ({ handleClose, data, updateList }) => {
  const editMode = !!data;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: data?.title ?? "",
      description: data?.description ?? "",
      order_id: data?.order_id ?? "",
      image: data?.image ?? "",
    },
    onSubmit: (values) => {
      if (editMode) {
        handleUpdate(values);
      } else {
        handleAdd(values);
      }
    },
  });
  const handleAdd = async (values) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "category"), { ...values });
      handleClose();
      formik.resetForm();
      updateList();
      toast.success("project added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("An error occurred while adding the document.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (values) => {
    setLoading(true);
    try {
      const docRef = doc(db, "category", data?.id);
      await updateDoc(docRef, { ...values });
      toast.success("Updated successfully!");
      handleClose();
      formik.resetForm();
      updateList();
    } catch (error) {
      toast.error("An error occurred while updating the document.");
      console.error("Error updating document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.portfolioModal}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.field_wrapper}>
          <InputField
            formik={formik}
            label="Title"
            name="title"
            placeholder="Enter title"
          />
          <InputField
            formik={formik}
            name="description"
            label="Description"
            placeholder="Write description"
          />
          <InputField
            isNumber
            formik={formik}
            name="order_id"
            label="Order number"
            placeholder="Add order number"
          />
        </div>
        <div className={styles.button_wrap}>
          <CustomButton type="submit" loading={loading}>
            {editMode ? "Save" : "Add new"}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddEditCategoryForm;
