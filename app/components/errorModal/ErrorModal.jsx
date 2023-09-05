"use client";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { AddFolder } from "../filesView/AddFolder";

export const ErrorModal = ({ updateFolders }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <div className="flex flex-row-reverse mr-5">
        <AddFolder handleShowModal={() => handleShowModal(updateFolders)} />
        <Modal
          isVisible={showModal}
          onClose={handleCloseModal}
          updateFolders={updateFolders}
        />
      </div>
    </>
  );
};
