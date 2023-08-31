import { ServerFolder } from "../filesView/ServerFolder";
import { Files } from "../filesView/Files";
import { ErrorModal } from "../errorModal/ErrorModal";

export const ViewFilesComponents = () => {
  return (
    <>
      <ErrorModal />

      <div className="p-2">
        <h1 className="text-md font-semibold mb-8">Folders</h1>
        <div className="flex flex-col gap-5">
          <section className="ml-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 text-sm">
            <ServerFolder />
          </section>
          {/* components file */}
          <section>
            <Files />
          </section>
        </div>
      </div>
    </>
  );
};
