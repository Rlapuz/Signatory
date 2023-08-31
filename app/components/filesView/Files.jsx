import { BsImage } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Image from "next/image";

export const Files = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/file", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const files = await res.json();

    return (
      <>
        <h1 className="text-md font-semibold mb-8">Files</h1>
        <div>
          <section className="ml-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 text-sm">
            {files.map((f) => (
              <div key={f._id}>
                <div className="flex flex-col gap-2 border rounded-lg p-2 bg-gray-50 hover:bg-gray-200 box-border h-52 w-52 shadow-md  overflow-hidden">
                  <div className="flex justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <BsImage
                        size={20}
                        className="opacity-75 text-red-900"
                      />
                      <h3 className="ml-0">{f.filename}</h3>
                    </div>
                    <BiDotsVerticalRounded size={20} />
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={f.url}
                      alt="file-preview"
                      height={150}
                      width={200}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    return <div>Error: Something went wrong</div>;
  }
};
