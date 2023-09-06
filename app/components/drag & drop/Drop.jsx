"use client";

import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { BsFillSendFill, BsImage } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PickerOverlay } from "filestack-react";

export const Drop = () => {
  const [inputValue, setInputValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileHandle, setUploadedFileHandle] = useState("");
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const handleClearInput = () => {
    setInputValue("");
  };

  function handleClick() {
    setShowPicker((prevState) => !prevState);
  }

  // Use useEffect hook to reset showPicker when uploadedFile or inputValue changes
  useEffect(() => {
    setShowPicker(false);
  }, [uploadedFile, inputValue]);

  // Function to handle the file upload completion
  const handleUploadDone = async (res) => {
    try {
      if (res?.filesUploaded && res.filesUploaded.length > 0) {
        const { handle } = res.filesUploaded[0];
        setUploadedFileHandle(handle);
        const { filename, size, url, mimetype } = res.filesUploaded[0];

        const response = await fetch("http://localhost:3000/api/file", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filename, size, url, mimetype }),
        });
        // console.log("Response", response);
        if (response.ok) {
          console.log("File uploaded successfully!");
          setUploadedFile({ filename, size, url, mimetype });
          setHasUploadedFile(true); // Set the hasUploadedFile state to true
        } else {
          console.error("Failed to upload file to MongoDB.");
        }
      } else {
        console.warn("No files uploaded.");
      }
    } catch (error) {
      console.error("Error while uploading file:", error);
    }
  };

  return (
    <div className="w-full md:flex justify-center">
      {/* box container */}

      <div className="border rounded-md shadow-md p-5 bg-gray-50 w-full lg:w-1/2">
        <h1 className="text-center mb-10">Please Upload documents here!</h1>
        <h1 className="text-center mb-5">My Documents</h1>
        {/* Main */}
        <div className="flex justify-center items-center gap-5">
          <div
            className="flex justify-center items-center"
            onClick={handleClick}>
            <FcDocument
              className="absolute mr-24 sm:mr-40 md:mr-40"
              size={30}
            />
            <button className="border rounded-md pr-5 pl-10 py-2 bg-inherit md:py-3">
              Upload Document
            </button>
          </div>
          <div>
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="Note:"
                className="outline-none bg-transparent border-b-2 border-gray-500 w-3/4 md:w-full"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue && ( // Only show the cross icon if there's something in the input
                <RxCross2
                  className="text-red-500 font-semibold flex justify-center items-center cursor-pointer"
                  size={20}
                  onClick={handleClearInput}
                />
              )}
            </form>
          </div>
        </div>

        {/* Files uploaded display */}
        {uploadedFile && ( // Render only if the uploadedFile state is truthy
          <div className="flex justify-center items-center mt-5">
            <div className="p-3 rounded-md shadow-md border-box h-48 w-48 flex flex-col items-center gap-5 bg-blue-200">
              <h5>{uploadedFile.filename}</h5>
              {/* <h3>{uploadedFile.size}</h3> */}
              <h3>{uploadedFile.mimetype}</h3>
              <div className="flex justify-center items-center mt-5">
                <button
                  className="bg-gray-50 py-2 px-5 rounded-md"
                  onClick={() =>
                    window.open(
                      `https://cdn.filestackcontent.com/${uploadedFileHandle}`
                    )
                  }>
                  View
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Files uploaded display end */}

        {/* Document Viewer */}
        {/* {uploadedFileHandle && (
            <div className="flex justify-center items-center mt-5">
              <button
                onClick={() =>
                  window.open(
                    `https://cdn.filestackcontent.com/${uploadedFileHandle}`
                  )
                }>
                View
              </button>
            </div>
          )} */}
        {/* Document Viewer end */}

        {/* buttons */}
        <div className="flex justify-center items-center mt-10 gap-5">
          <div className="flex justify-center items-center">
            <FaPlus className="absolute mr-20" />
            <button
              type="button"
              className="border rounded-md pr-5 pl-8 py-2 bg-gray-500"
              onClick={handleClick}>
              Add new
            </button>
          </div>
          <div className="flex justify-center items-center">
            <BsFillSendFill className="absolute mr-16" />
            <button className="border rounded-md pr-5 pl-10 py-2 bg-red-500">
              Submit
            </button>
          </div>
        </div>
        {/* Main end */}
        {/* Conditionally render the PickerOverlay */}
        {showPicker && !hasUploadedFile && (
          <PickerOverlay
            apikey="An8nlW83SqzxGpQvDZeywz"
            onUploadDone={handleUploadDone}
          />
        )}
      </div>
    </div>
  );
};
