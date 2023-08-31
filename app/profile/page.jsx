import Navbar from "../components/navbar/Navbar";
import ProfileUpdate from "../components/profile-update/ProfileUpdate";

export const metadata = {
  title: "Raymund | Profile",
};
const page = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-7">
        <Navbar />
        <main className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <ProfileUpdate />
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
