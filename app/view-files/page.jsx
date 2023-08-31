import { ViewFIles } from "../components/parent-component/ViewFIles";
import Navbar from "../components/navbar/Navbar";

export const metadata = {
  title: "Raymund | View Files",
};
const page = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-7">
        <Navbar />
        <main className="flex flex-col gap-5">
          <ViewFIles />
        </main>
      </div>
    </>
  );
};

export default page;
