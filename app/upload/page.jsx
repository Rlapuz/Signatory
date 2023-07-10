import Drag from "../components/drag & drop/Drag";
import Navbar from "../components/navbar/Navbar";


export const metadata = {
  title: 'Raymund | Upload',
};
const page = () => {
  return (
    <>
      <div className='w-full flex flex-col gap-7'>
        <Navbar />
        <main className=''>
          <h1 className="font-medium">Upload Files</h1>
          <div className='mt-10'>
            <Drag/>
          </div>
        </main>
      </div>
    </>
  )
}

export default page