import Footer from '../components/footer/Footer'
import Sidebar from '../components/sidebar/Sidebar'

const layout = ({children}) => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow flex gap-4'>
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

export default layout