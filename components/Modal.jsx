"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  useEffect(() => {
    if (modalRef.current?.open === false) {
      modalRef.current?.showModal();
    }
  }, [mounted]);

  function onHide() {
    router.back();
  }

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
     <span onClick={onHide} className="flex justify-end">
  <X className="w-8 h-8 text-blue-500 cursor-pointer hover:text-blue-700" />
</span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
