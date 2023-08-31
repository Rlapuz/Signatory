// "use client";

// import { PickerOverlay } from "filestack-react";
// import { useState, useEffect } from "react";
// import { RxUpload } from "react-icons/rx";
// import { VscSend } from "react-icons/vsc";

// export const UploadFiles = () => {
//   const [showPicker, setShowPicker] = useState(false);

//   return (
//     <div className="flex flex-col gap-10 border rounded-md bg-gray-50 p-10">
//       <div className="flex flex-col items-center gap-2">
//         <RxUpload size={25} />
//         <p className="font-medium mt-5">Upload your files here</p>
//       </div>
//       <hr />
//       <div className="flex flex-col gap-5">
//         <h3>Upload History:</h3>
//         <p>No files have been uploaded yet</p>

//         <div>
//           <ul>
//             {uploadHistory.map((upload) => (
//               <li
//                 key={upload.filestackUrl}
//                 className="flex flex-col">
//                 <div className="flex gap-14 my-5">
//                   <span>{upload.fileName}</span>
//                   <span>{new Date(upload.timestamp).toLocaleString()}</span>
//                 </div>
//                 <div className="flex gap-16">
//                   <button
//                     className="bg-gray-300 hover:bg-gray-400 border rounded-md py-1 px-4"
//                     onClick={() =>
//                       window.open(
//                         `https://cdn.filestackcontent.com/${upload.filestackUrl}`
//                       )
//                     }>
//                     View
//                   </button>

//                   <button
//                     className="bg-red-500 hover:bg-red-600 border rounded-md py-1 px-4"
//                     onClick={() => handleDelete(upload.filestackUrl)}>
//                     Delete
//                   </button>

//                   <VscSend
//                     size={20}
//                     className="mt-2"
//                   />
//                 </div>
//                 <hr className="my-5" />
//               </li>
//             ))}
//           </ul>
//         </div>

//         {showPicker && (
//           <PickerOverlay
//             apikey="An8nlW83SqzxGpQvDZeyw" // Replace with your Filestack API key
//             onUploadDone={(res) => {
//               console.log(res);
//               handleUploadDone(res);
//             }}
//             customRender={({ onPick }) => (
//               <div>
//                 <button
//                   onClick={onPick}
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
//                   Select Files
//                 </button>
//                 <button
//                   onClick={() => setShowPicker(false)}
//                   className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md ml-2">
//                   Cancel
//                 </button>
//               </div>
//             )}
//             storeTo="s3"
//           />
//         )}
//       </div>
//     </div>
//   );
// };
