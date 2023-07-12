// "use client";

// import { PickerOverlay } from "filestack-react";
// import { useState, useEffect } from "react";
// import { RxUpload } from "react-icons/rx";
// import { VscSend } from "react-icons/vsc";
// const Drag = () => {
//   const [showPicker, setShowPicker] = useState(false);
//   const [uploadHistory, setUploadHistory] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]); // Track the selected files to send
//   const [showConfirmation, setShowConfirmation] = useState(false); // Track the visibility of the confirmation pop-up

//   // Load upload history from local storage on component mount
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("uploadHistory")) || [];
//     setUploadHistory(history);
//   }, []);

//   function handleClick() {
//     setShowPicker((prevState) => !prevState);
//   }

//   function handleDelete(handle) {
//     const updatedHistory = uploadHistory.filter(
//       (upload) => upload.handle !== handle
//     );
//     localStorage.setItem("uploadHistory", JSON.stringify(updatedHistory));
//     setUploadHistory(updatedHistory);
//   }

//   function handleUploadDone(res) {
//     // Save upload handle to local storage
//     const updatedHistory = [...uploadHistory];
//     res.filesUploaded.map((file) => {
//       const newUpload = {
//         handle: file.handle,
//         fileName: file.filename,
//         timestamp: new Date().toLocaleString(),
//       };
//       updatedHistory.push(newUpload);
//     });
//     localStorage.setItem("uploadHistory", JSON.stringify(updatedHistory));
//     setUploadHistory(updatedHistory);
//     setShowPicker(false);
//   }

//   function handleSendToHeadPerson() {
//     setShowConfirmation(true);
//   }

//   function handleSendToHeadPerson() {
//     // Combine the uploaded files and manually selected files to send
//     const filesToSend = [
//       ...selectedFiles,
//       ...uploadHistory.map((upload) => upload.handle),
//     ];
//     sendFilesToHeadPerson(filesToSend);
//     setShowConfirmation(false);
//   }

//   function cancelSendToHeadPerson() {
//     setShowConfirmation(false);
//   }

//   function sendFilesToHeadPerson(fileHandles) {
//     // Logic to send the files to the head person
//     // You can use an API call or any other method to send the files
//     // For example:
//     const headPersonEmail = "headperson@example.com";
//     const emailSubject = "Files for review";
//     const emailBody = `Please review the following files: ${fileHandles.join(
//       ", "
//     )}`;

//     // Send email or trigger the necessary functionality to notify the head person
//     // Example using a hypothetical sendEmailToHeadPerson function:
//     sendEmailToHeadPerson(headPersonEmail, emailSubject, emailBody);
//   }

//   function sendEmailToHeadPerson(to, subject, body) {
//     // Logic to send an email to the head person
//     // This is a hypothetical function and needs to be implemented based on your email sending mechanism
//     // For example, using a third-party library or an API call
//     console.log(
//       `Sending email to ${to} with subject "${subject}" and body "${body}"`
//     );
//   }

//   return (
//     <div className="flex flex-col gap-10 border rounded-md bg-gray-50 p-10">
//       <div className="flex flex-col items-center gap-2">
//         <RxUpload
//           size={25}
//           onClick={handleClick}
//         />
//         <p className="font-medium mt-5">Upload your files here</p>
//       </div>
//       <hr />
//       <div className="flex flex-col gap-5">
//         <h3>Upload History:</h3>
//         {uploadHistory.length === 0 && <p>No files have been uploaded yet</p>}

//         <div>
//           <ul>
//             {uploadHistory.map((upload) => (
//               <li
//                 key={upload.handle}
//                 className="flex flex-col">
//                 <div className="flex gap-14 my-5">
//                   <span>{upload.fileName}</span>
//                   <span>{upload.timestamp}</span>
//                 </div>
//                 <div className="flex gap-16">
//                   <button
//                     className="bg-gray-300 hover:bg-gray-400 border rounded-md py-1 px-4"
//                     onClick={() =>
//                       window.open(
//                         `https://cdn.filestackcontent.com/${upload.handle}`
//                       )
//                     }>
//                     View
//                   </button>

//                   <button
//                     className="bg-red-500 hover:bg-red-600 border rounded-md py-1 px-4"
//                     onClick={() => handleDelete(upload.handle)}>
//                     Delete
//                   </button>

//                   <VscSend
//                     size={20}
//                     className="mt-2"
//                     onClick={handleSendToHeadPerson}
//                   />
//                 </div>
//                 <hr className="my-5" />
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* filestack */}
//         {showPicker && (
//           <PickerOverlay
//             apikey="An8nlW83SqzxGpQvDZeywz"
//             onUploadDone={(res) => {
//               console.log(res);
//               handleUploadDone(res);
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Drag;
