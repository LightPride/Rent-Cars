import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, showModal, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  const handleKeydown = useMemo(
    () => (e) => {
      if (e.code === "Escape") {
        setVisible(false);
        setTimeout(() => onClose(), 300);
      }
    },

    [onClose],
  );

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setVisible(false);
      setTimeout(() => onClose(), 300);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "visible";
    };
  }, [handleKeydown]);

  return createPortal(
    <Backdrop onClick={handleBackdropClick} showModal={visible}>
      <ModalContainer showModal={visible}>{children}</ModalContainer>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
