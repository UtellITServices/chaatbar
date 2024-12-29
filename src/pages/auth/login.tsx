import CustomButton from "@/components/elements/button";
import InputField from "@/components/elements/input";
import { auth } from "@/firebase.config";
import AuthLayout from "@/layout/authLayout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";
import styles from "./auth.module.scss";
import { loginYupSchema } from "@/validationSchema/admin";

const Page = () => {
  const router = useRouter();
  const [buttonLoader, setButtonLoader] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginYupSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (values) => {
    try {
      setButtonLoader(true);
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Login Successfully !");
      router.push("/admin");
    } catch (err) {
      console.log("err", err);
      if (err.code === "auth/user-not-found") {
        toast.error("Email not found!");
      } else {
        toast.error("Email not found!");
      }
    }
    setButtonLoader(false);
  };

  return (
    <AuthLayout title="Sign In">
      <form onSubmit={formik.handleSubmit} className={styles.field_wrapper}>
        <InputField formik={formik} name="email" placeholder="Email address" />
        <InputField
          type="password"
          formik={formik}
          name="password"
          placeholder="password"
        />
        <CustomButton className="mt-2" type="submit" loading={buttonLoader}>
          Login
        </CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Page;
