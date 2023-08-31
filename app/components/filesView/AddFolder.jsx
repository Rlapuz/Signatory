import { HiFolderPlus } from "react-icons/hi2";

export const AddFolder = ({ handleShowModal, updateFolders }) => {
  return (
    <button
      onClick={() => handleShowModal(updateFolders)}
      className="flex justify-between items-center gap-2 border rounded-md shadow-md px-4 py-2 bg-gray-50 hover:bg-gray-200">
      <HiFolderPlus size={20} />
      <h1 className="text-sm font-semibold">New</h1>
    </button>
  );
};
