import Image from 'next/image'
import Footer from './components/footer/Footer';
import Link from 'next/link';
import './globals.css'

export const metadata = {
  title: 'Raymund | Home',
};

export default function Home() {
  return (
    <>
      <div className='bsu'>
        <Image
          src='/bsu.png'
          alt='bsu bg'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className=''>
        <div className='flex flex-col gap-5 items-center justify-center h-screen'>
          <h1 className='text-xl font-bold '>Automation Signatory</h1>
          <Link
            href="/login"
            className="mb-3 inline-block w-auto md:w-1/6 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] lot text-center"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light">
            Log in
          </Link>
        </div>
        <Footer />
      </div>
    </>
  )
}
