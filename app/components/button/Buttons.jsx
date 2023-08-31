"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const Buttons = ({ value, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={pending}
      className=" py-2 rounded-md bg-gray-50 hover:bg-gray-200 w-6/12 md:w-1/4">
      {pending ? "Loading..." : value}
    </button>
  );
};
