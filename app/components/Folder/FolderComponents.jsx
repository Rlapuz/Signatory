// import { ServerFolder } from "./ServerFolder";

// export const FolderComponents = ({ updateFolders }) => {
//   const handleCreateFolder = async (newFolderName) => {
//     try {
//       if (newFolderName.trim() === "") {
//         // If the folder name is empty or contains only spaces, don't create the folder
//         return;
//       }

//       // Create a new folder
//       const response = await fetch("http://localhost:3000/api/folder", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: newFolderName }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create folder");
//       }

//       // Fetch the updated list of folders
//       const updatedResponse = await fetch("http://localhost:3000/api/folder", {
//         method: "GET",
//       });
//       if (!updatedResponse.ok) {
//         throw new Error("Failed to fetch folders");
//       }
//       const folders = await res.json();

//       const updatedFolders = await updatedResponse.json();
//       updateFolders(updatedFolders); // Update the folders using the function from props
//     } catch (error) {
//       console.error("Error creating folder:", error);
//       // Handle the error, show a notification, etc.
//     }
//   };
//   return (
//     <section className="ml-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 text-sm">
//       <ServerFolder />
//     </section>
//   );
// };
