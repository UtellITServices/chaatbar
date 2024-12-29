import { FC, ReactNode } from "react";
import { Modal, ModalProps } from "react-bootstrap";
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from "./popup.module.scss";
import CustomButton from "../button";

interface IProps extends ModalProps {
  children: ReactNode;
  maxWidth?: number;
  closeBtn?: boolean;
  title?: string;
}

const PopupLayout: FC<IProps> = ({
  closeBtn,
  title,
  children,
  maxWidth = 300,
  ...rest
}) => {
  return (
    <Modal
      {...rest}
      className={styles.modal_layout}
      backdropClassName={styles.backdrop}
      dialogClassName={styles.modal_dialog}
      contentClassName={styles.modal_content}
    >
      <Modal.Body
        className={styles.modal_body}
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {title || closeBtn ? (
          <div className={styles.modal_header}>
            {title ? <h5>{title}</h5> : null}
            {closeBtn ? (
              <CustomButton
                variant="link"
                className={styles.closeBtn}
                onClick={rest?.onHide}
              >
                <IoCloseCircleOutline size={28} />
              </CustomButton>
            ) : null}
          </div>
        ) : null}
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default PopupLayout;
