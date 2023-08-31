"use client";

import React from "react";
import { useSession } from "next-auth/react";

export const NameImg = () => {
  const { data: session } = useSession();
  return (
    <div className=" flex-col hidden md:block">
      <h1 className="font-medium">{session?.user?.name}</h1>
      <p className="text-center opacity-50">{session?.user?.role}</p>
    </div>
  );
};
