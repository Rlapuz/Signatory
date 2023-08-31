// 'use client'

import Navbar from "app/components/navbar/Navbar";
import Calen from "../components/calendar API/Calen";

export const metadata = {
  title: "Raymund | Calendar",
};
const page = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-7">
        <Navbar />
        <main className="w-full h-4/5">
          <Calen />
        </main>
      </div>
    </>
  );
};

export default page;
