import useContactModal from "../../Hooks/useContactModal";

import Close from "../Lib/Icons/Close";

import styles from "./ContactModal.module.scss";

const ContactModal = ({ children }) => {
  const [, setIsOpen] = useContactModal();

  return (
    <div
      className={`${styles.modal}`}
      onClick={(evt) => {
        if (evt.target.className.includes(styles.modal)) {
          setIsOpen(false);
        }
      }}
    >
      <div className={`${styles.modal__inner}`}>
        <button className={`${styles.modal__close}`} onClick={() => setIsOpen(false)}>
          <Close />
        </button>

        <div className={`${styles.modal__wrapper}`}>
          {children}
          <button className={`${styles.modal__button}`} onClick={() => setIsOpen(false)}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
