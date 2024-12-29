import CustomButton from "@/components/elements/button";
import InputField from "@/components/elements/input";
import SelectField from "@/components/elements/select_input";
import { db } from "@/firebase.config";
import { useStore } from "@/store";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useFormik } from "formik";
import _, { isArray } from "lodash";
import { FC, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import styles from "./menu.module.scss";
import { addMenuYupSchema } from "@/validationSchema/admin";

interface IProps {
  handleCloseModal: () => void;
  updateList: () => void;
  data: any;
}

const AddEditMenu: FC<IProps> = ({ handleCloseModal, data, updateList }) => {
  const editMode = !!data;
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    category_id: data?.category_id ?? "",
    title: data?.title ?? "",
    description: data?.description ?? "",
    price: data?.price ?? "",
    sub_menu: data?.sub_menu ?? [],
  });

  const emptySubmenu = { title: "", description: "", price: "" };
  const { menuCategories } = useStore((state: any) => state);

  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },

    validationSchema: addMenuYupSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (editMode) {
        handleUpdate(values);
      } else {
        handleAdd(values);
      }
    },
  });

  const categoryOptions = [
    { value: "", label: "--- select category ---" },
    ...menuCategories?.map((item) => ({
      label: item?.title,
      value: item?.id,
    })),
  ];

  const handleAdd = async (values) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "menus"), { ...values });
      handleCloseModal();
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
  const deleteSubmenu = (index: number) => {
    const dataCopy = _.cloneDeep(formik.values);
    dataCopy.sub_menu.splice(index, 1);
    setInitialValues(dataCopy);
  };

  const handleUpdate = async (values) => {
    setLoading(true);
    try {
      const docRef = doc(db, "menus", data?.id);
      await updateDoc(docRef, { ...values });
      toast.success("Updated successfully!");
      handleCloseModal();
      formik.resetForm();
      updateList();
    } catch (error) {
      toast.error("An error occurred while updating the document.");
      console.error("Error updating document: ", error);
    } finally {
      setLoading(false);
    }
  };

  const addNewSubmenu = () => {
    const dataCopy = _.cloneDeep(formik.values);
    // Check if sub_menu is an empty object
    if (
      (_.isPlainObject(dataCopy.sub_menu) && _.isEmpty(dataCopy.sub_menu)) ||
      !dataCopy.sub_menu
    ) {
      // Convert empty object to an array
      dataCopy.sub_menu = [];
    }

    // Ensure sub_menu is an array before pushing
    if (Array.isArray(dataCopy.sub_menu)) {
      dataCopy.sub_menu.push(emptySubmenu);
    } else {
      // Handle case if sub_menu is neither object nor array
      dataCopy.sub_menu = [emptySubmenu];
    }
    setInitialValues(dataCopy);
  };
  useEffect(() => {
    console.log("formik.values", formik.values);
  }, [formik.values]);
  return (
    <div className={styles.addModal}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.field_wrapper}>
          <InputField
            formik={formik}
            label="Title"
            name="title"
            placeholder="Enter Title"
          />
          <InputField
            as="textarea"
            rows={4}
            formik={formik}
            label="Description"
            name="description"
            placeholder="Enter Description"
          />
          <SelectField
            label="Select category"
            formik={formik}
            name="category_id"
            optionList={categoryOptions}
          />
          <InputField
            formik={formik}
            label="Price"
            name="price"
            placeholder="Enter Price"
            className={styles.width50}
          />
          <div>
            <div className={styles.sub_heading}>
              <h5>Sub menus</h5>
              <CustomButton size="sm" onClick={addNewSubmenu}>
                + Sub menu
              </CustomButton>
            </div>
            {isArray(formik.values?.sub_menu) &&
              formik.values?.sub_menu?.map((item, index) => (
                <div key={index} className={styles.single_subMenu}>
                  <span
                    className={styles.delete_icon}
                    onClick={() => deleteSubmenu(index)}
                  >
                    <FaRegTrashAlt color="#f00" size={16} />
                  </span>
                  <div className={styles.field_wrapper}>
                    <InputField
                      isNumber
                      formik={formik}
                      // defaultValue={item?.[index]?.title}
                      value={item?.title}
                      label="Title"
                      name={`sub_menu[${index}].title`}
                      placeholder="Enter Title"
                      className={styles.width50}
                      onChange={formik.handleChange}
                    />
                    <InputField
                      isNumber
                      formik={formik}
                      value={item?.price}
                      label="Price"
                      name={`sub_menu[${index}].price`}
                      placeholder="Enter Price"
                      className={styles.width50}
                      onChange={formik.handleChange}
                    />
                    <InputField
                      as="textarea"
                      rows={4}
                      isNumber
                      value={item?.description}
                      formik={formik}
                      label="Description"
                      name={`sub_menu[${index}].description`}
                      placeholder="Enter description"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              ))}
          </div>
          {/* <div>
            <ImageUpload
              setFile={(file) => formik.setFieldValue("image", file)}
              file={formik.values?.image}
              currentUrl={formik?.values?.company_logo}
            />
          </div>
          <div>
            <ImageUpload
              setFile={(file) => formik.setFieldValue("upload_file", file)}
              file={formik.values?.upload_file}
              currentUrl={formik?.values?.company_logo}
            />
          </div> */}
        </div>
        <div className={styles.button_wrap}>
          <CustomButton type="submit" loading={loading}>
            {editMode ? "Save" : "+ Add"}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddEditMenu;
