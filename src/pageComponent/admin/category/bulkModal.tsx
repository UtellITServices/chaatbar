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
  data: any;
}

const BulkUploadForm: FC<IProps> = ({ handleClose, data }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      json: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await addDataToCategory();
        toast.success("updated");
        handleClose();
      } catch (err) {
        console.log("err", err);

        toast.error("error");
      } finally {
        setLoading(false);
      }
    },
  });

  async function addDataToCategory() {
    if (loading) return;
    const collectionRef = collection(db, "menus");
    const arrayData = JSON.parse(formik.values.json);
    console.log("arrayData", arrayData);

    for (const item of arrayData) {
      try {
        const docRef = await addDoc(collectionRef, {
          ...item,
          category_id: data?.id,
        });
        console.log(`Document written with ID: ${docRef.id}`);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  return (
    <div className={styles.portfolioModal}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.field_wrapper}>
          <InputField
            as="textarea"
            rows={10}
            formik={formik}
            label="Data"
            name="json"
            placeholder="Enter json here"
          />
        </div>
        <div className={styles.button_wrap}>
          <CustomButton type="submit" loading={loading}>
            update
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default BulkUploadForm;
