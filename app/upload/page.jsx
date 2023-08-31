import { Drop } from "../components/drag & drop/Drop";
import { UploadFiles } from "../components/drag & drop/UploadFiles";
import Navbar from "../components/navbar/Navbar";

export const metadata = {
  title: "Raymund | Upload",
};
const page = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-7 mb-5">
        <Navbar />
        <main className="">
          <div className="">
            <Drop />
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
