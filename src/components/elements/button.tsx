import clsx from "clsx";
import { Button, ButtonProps } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";

interface IProps extends ButtonProps {
  loading?: boolean;
}

const CustomButton: React.FC<IProps> = ({ loading, ...rest }) => {
  return (
    <Button
      type="button"
      {...rest}
      className={clsx(
        "custom_btn",
        loading ? "loading" : "",
        rest.className ?? ""
      )}
    >
      <span className="custom_btn_text">{rest.children}</span>
      {loading && (
        <span className="loader">
          <RotatingLines strokeColor="currentColor" />
        </span>
      )}
    </Button>
  );
};

export default CustomButton;
