import Image from 'next/image'
import Footer from './components/footer/Footer';
import Link from 'next/link';
import { Login } from './components/login/Login';


export const metadata = {
  title: 'Raymund | Login',
};

export default function Home() {
  return (
    <>
      <div className='md:flex flex-col'>
        <div>
          <Login />
        </div>
        <div className='hidden md:block '>
          <Footer />
        </div>
      </div >
    </>
  )
}
