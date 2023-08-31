"use client";
import { useState } from "react";

export const ModalClient = ({ onClose, updateFolders, handleSubmit }) => {
  const [newFolderName, setNewFolderName] = useState("");

  const handleCreateAndClose = () => {
    handleSubmit(newFolderName); // Call the handleSubmit function
    onClose(); // Close the modal
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Untitled folder"
        value={newFolderName}
        onChange={(e) => setNewFolderName(e.target.value)}
        className="border rounded-md p-2 w-full mb-5"
      />
      <div className="flex justify-end gap-4 text-blue-500 md:mt-5">
        <button
          className="hover:bg-blue-50 rounded-lg p-2"
          onClick={onClose}>
          Cancel
        </button>
        <button
          type="button" // Change to "button" to prevent default form submission
          className="hover:bg-blue-50 rounded-lg p-2"
          onClick={handleCreateAndClose} // Call the combined function
        >
          Create
        </button>
      </div>
    </div>
  );
};
