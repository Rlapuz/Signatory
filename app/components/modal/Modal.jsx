import { handleCreate } from "@/actions/modalAction";
import { ModalClient } from "../modal client/ModalClient";

export const Modal = ({ isVisible, onClose, updateFolders }) => {
  const handleSubmit = async (newFolderName) => {
    try {
      const updatedFolders = await handleCreate(newFolderName);
      updateFolders(updatedFolders);
      onClose();
    } catch (error) {
      console.error(error);
      // Handle the error, show a notification, etc.
    }
  };

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-gray-50 box-border border rounded-md shadow-md h-1/4 w-2/4 md:h-1/4 md:w-1/4 px-3 py-4">
        <h1 className="text-center">New Folder</h1>
        <div className="mt-5 text-sm">
          <form>
            <ModalClient
              onClose={onClose}
              updateFolders={updateFolders}
              handleSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
