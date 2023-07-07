import Image from 'next/image'
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

export const metadata = {
  title: 'Raymund | Home',
};

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Sidebar />
      <Footer />
    </div>
  )
}
