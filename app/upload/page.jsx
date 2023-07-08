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
          <h1>Upload</h1>
        </main>
      </div>
    </>
  )
}

export default page