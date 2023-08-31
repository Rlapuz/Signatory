"use client";

import { useState, useEffect } from "react";
import Form from "../form/Form";
import { Buttons } from "../button/Buttons";
import { useSession } from "next-auth/react";
import { updateUser } from "@/actions/authActions";
import Alert from "@mui/material/Alert";

const ProfileUpdate = () => {
  const { data: session, update } = useSession();
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    if (alertMessage) {
      const timeout = setTimeout(() => {
        setAlertMessage(null);
      }, 5000); // Change the timeout value (in milliseconds) to adjust the duration before the alert vanishes
      return () => clearTimeout(timeout);
    }
  }, [alertMessage]);

  async function handleUpdateprofile(formData) {
    const name = formData.get("name");
    const image = formData.get("image");

    let updatedImage = image;

    if (!image && session?.user?.image) {
      // If no new image is provided and there is an existing image in the session, use the existing image
      updatedImage = session.user.image;
    }

    if (update) {
      update({ name, image: updatedImage });
    }

    const res = await updateUser({ name, image: updatedImage });
    if (res?.msg) setAlertMessage(res.msg);
  }

  return (
    <div className="w-full md:w-3/4 flex flex-col items-center mb-10 p-5 bg-slate-200 shadow-md rounded-md">
      <h2>Update Profile</h2>
      <Form
        action={handleUpdateprofile}
        className="flex flex-col gap-5 w-full md:w-2/4">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-2 rounded-md"
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          placeholder="Image"
          className="p-2 rounded-md"
        />
        <div className="flex justify-center">
          <Buttons value="Update" />
        </div>
      </Form>
      <div className="mt-10">
        {alertMessage && (
          <Alert
            variant="filled"
            severity="success">
            {alertMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ProfileUpdate;
