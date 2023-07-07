import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer';
  const layout = ({children}) => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='flex-grow flex gap-5'>
            <Sidebar />
            {children}
        </div>
        <div className=''>
            <Footer />
        </div>
      </div>
    </>
  )
}
export default layout;

