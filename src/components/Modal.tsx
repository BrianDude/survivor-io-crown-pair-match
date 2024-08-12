import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        event.stopPropagation();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="w-full max-w-md bg-white rounded-lg shadow-xl"
        ref={modalRef}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
