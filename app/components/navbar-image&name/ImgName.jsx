"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

export const ImgName = () => {
  const { data: session } = useSession();
  // Check if the session and user data are available
  if (!session || !session.user || !session.user.image) {
    // You can return a placeholder image or null here, depending on your requirements.
    return null;
  }

  // If the session and user data are available, proceed with rendering the Image component
  return (
    <div>
      <Image
        src={session.user.image}
        width={40}
        height={40}
        alt="profile"
        className="rounded-full"
      />
    </div>
  );
};
