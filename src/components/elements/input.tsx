/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";
import { Form, FormControlProps } from "react-bootstrap";
import { numberRegExp } from "@/constants/regex";
import clsx from "clsx";

interface IProps extends FormControlProps {
  rows?: number;
  name: string;
  label?: string;
  formik?: FormikProps<any>;
  isNumber?: boolean;
}

const InputField: React.FC<
  IProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ rows, name, formik, label, isNumber, ...rest }) => {
  const formikValue = formik?.values[name] ?? "";
  const formikError = formik?.touched[name] ? formik?.errors[name] : null;

  return (
    <div className={rest?.className}>
      <Form.Group className="field_wrap" controlId={name}>
        {label ? <Form.Label>{label}</Form.Label> : null}
        <Form.Control
          type="text"
          value={formikValue}
          rows={rows}
          onChange={(e) => {
            const value = e.target.value.trimStart();
            if (formik && (!isNumber || !value || numberRegExp.test(value))) {
              formik.setFieldValue(name, value);
            }
          }}
          onBlur={() =>
            formikValue
              ? formik?.setFieldValue(
                  name,
                  typeof formikValue === "string"
                    ? formikValue.trim()
                    : formikValue
                )
              : undefined
          }
          {...rest}
          className={clsx(formikError ? "has_error" : "")}
        />
        {formikError ? (
          <span className="field_error">
            {typeof formikError === "string" ? formikError : ""}
          </span>
        ) : null}
      </Form.Group>
    </div>
  );
};

export default InputField;
