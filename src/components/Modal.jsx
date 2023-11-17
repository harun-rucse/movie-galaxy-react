import PropTypes from "prop-types";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function ModalOpen({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function ModalBody({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-800/20 flex items-center backdrop-blur-sm justify-center z-[99999]">
      <div ref={ref} className="flex flex-col gap-4 bg-transparent rounded-lg">
        {children}
      </div>
    </div>,
    document.body
  );
}

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Body = ModalBody;
Modal.Open = ModalOpen;

Modal.propTypes = {
  children: PropTypes.node,
};

ModalOpen.propTypes = {
  children: PropTypes.node,
  opens: PropTypes.string,
};

ModalBody.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default Modal;
