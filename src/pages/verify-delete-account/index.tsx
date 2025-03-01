import CustomButton from "@/components/elements/button";
import InputField from "@/components/elements/input";
import AuthLayout from "@/layout/authLayout";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import styles from "./auth.module.scss";
import { deleteAccountSchema } from "@/validationSchema/customer";

const Page = () => {
  const [buttonLoader, setButtonLoader] = useState(false);
  const [accountDeleted, setAccountDeleted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: deleteAccountSchema,
    onSubmit: (values) => {
      handleDeleteAccount(values);
    },
  });

  const handleDeleteAccount = async (values) => {
    try {
      setButtonLoader(true);
      const response = await fetch("http://66.179.210.141:3000/api/v1/app/customers/verify_and_destroy", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Account deleted successfully!");
        setAccountDeleted(true);
      } else {
        toast.error(data.message || "Failed to delete account.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error:", error);
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <AuthLayout title="Delete Account">
      {accountDeleted ? (
        <div className={styles.thank_you_card}>
         
          <p>Your account has been deleted successfully.</p>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className={styles.field_wrapper}>
          <InputField formik={formik} name="email" placeholder="Email address" />
          <InputField
            type="password"
            formik={formik}
            name="password"
            placeholder="Password"
          />
          <CustomButton className="mt-2" type="submit" loading={buttonLoader}>
            Delete Account
          </CustomButton>
        </form>
      )}
    </AuthLayout>
  );
};

export default Page;
