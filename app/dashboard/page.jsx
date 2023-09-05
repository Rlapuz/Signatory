import { DashboardContent } from "../components/dashboard/DashboardContent";
import Navbar from "../components/navbar/Navbar";

export const metadata = {
  title: "Raymund | Dashboard",
};
const page = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-7">
        <Navbar />
        <main className="">
          <div className="">
            <DashboardContent />
          </div>
        </main>
      </div>
    </>
  );
};

export default page;

// put contextAPI
