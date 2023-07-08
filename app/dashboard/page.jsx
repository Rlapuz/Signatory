import Navbar from '../components/navbar/Navbar'


export const metadata = {
  title: 'Raymund | Dashboard',
};
const page = () => {
  return (
    <>
      <div className='w-full flex flex-col gap-7'>
        <Navbar />
        <main className=''>
          <h1>Dashboard</h1>
        </main>
      </div>
    </>
  )
}

export default page