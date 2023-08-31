"use client";

import { useRef } from "react";

const Form = ({ action, ...props }) => {
  const formRef = useRef();

  async function handleAction(formdata) {
    await action(formdata);
    formRef.current.reset();
  }

  return (
    <form
      {...props}
      ref={formRef}
      action={handleAction}
    />
  );
};

export default Form;
