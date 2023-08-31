import { FaFolder } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";

export const ServerFolder = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/folder", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const folders = await res.json();

    // delete folder on mongoDB
    const deleteFolder = async (id) => {
      try {
        const res = await fetch(`http://localhost:3000/api/folder/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const { message } = await res.json();
        alert(message);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
    return (
      <>
        {folders.map((folder) => (
          <Link
            key={folder._id}
            href={`/view-files/${folder._id}`} // Assuming you have a route for viewing individual folders
            className="flex justify-between items-center gap-4 border rounded-lg shadow-md px-3 py-4 bg-gray-50 hover:bg-gray-200">
            <div className="flex items-center gap-2">
              <FaFolder
                size={20}
                className="opacity-75"
              />
              <h3 className="ml-0">{folder.name}</h3>{" "}
              {/* Display folder name */}
            </div>
            <BiDotsVerticalRounded size={20} />
          </Link>
        ))}
      </>
    );
  } catch (error) {
    console.log(error);
    return <div>Error: Something went wrong</div>;
  }
};
