import { FormikProps } from "formik";
import { ReactNode } from "react";
import { Form, FormSelectProps } from "react-bootstrap";

interface IProps extends FormSelectProps {
  name: string;
  label?: string;
  formik?: FormikProps<any>;
  children?: ReactNode;
  optionList?: { label: string | number; value: string | number }[];
}

const SelectField: React.FC<
  IProps & React.SelectHTMLAttributes<HTMLSelectElement>
> = ({ name, formik, label, optionList, children, ...rest }) => {
  const formikValue = formik?.values[name];
  const formikError = formik?.touched[name] ? formik?.errors[name] : null;

  return (
    <div className={rest.className}>
      <Form.Group className="field_wrap" controlId={name}>
        {label ? <Form.Label>{label}</Form.Label> : null}
        <Form.Select
          aria-label="Default select example"
          value={formikValue}
          onChange={formik ? (e) => formik?.handleChange(e) : () => {}}
          className={`${formikError ? "has_error" : ""}`}
        >
          {children ? (
            children
          ) : (
            <>
              {optionList &&
                optionList.map((item) => (
                  <option
                    value={item.value}
                    key={item.value}
                    disabled={item.value ? false : true}
                  >
                    {item.label}
                  </option>
                ))}
            </>
          )}
        </Form.Select>
        {formikError ? (
          <span className="error">
            {typeof formikError === "string" ? formikError : ""}
          </span>
        ) : null}
      </Form.Group>
    </div>
  );
};

export default SelectField;
