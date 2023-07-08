"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineBellAlert} from 'react-icons/hi2'

const Navbar = () => {

    const [openProfile, setOpenProfile] = useState(false)

    return (
        <nav className='mt-2'>
            <div className='flex justify-between py-3 px-6 bg-gray-50 border-b rounded-lg space-x-6'>
                <form action="" className='w-full max-w-md'>
                    <div className='relative flex items-center text-gray-400 focus-within:text-gray-600  '>
                        <BiSearch className='w-5 h-5 absolute ml-3 pointer-events-none'/>
                            <input type="text" 
                                name='search'
                                placeholder='Search'
                                autoComplete='off'
                                className='w-full pr-3 pl-9 py-1 font-medium placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
                            />
                    </div>
                </form>
                    {/* profile and notifications*/}
                    <div className='relative flex-shrink-0 flex items-center gap-7'>
                        <div>
                            <HiOutlineBellAlert className='w-6 h-6'/>
                        </div>
                        <div>
                            <Image src='/bsu_logo.png' width={40} height={40} alt='profile' className='rounded-full' 
                                onClick={()=> setOpenProfile((prev)=> !prev)}
                            />

                            { openProfile &&
                                <div className='flex flex-col absolute top-4.5 right-1 p-5 w-100 rounded-md border border-gray-400'>
                                    <ul className='flex flex-col gap-2'>
                                        <Link href='/' className='px-5 hover:bg-gray-300 border rounded-md'>Profile</Link>
                                        <Link href='/' className='px-5 hover:bg-gray-300 border rounded-md'>Settings</Link>
                                        <hr />
                                        <Link href='/' className='px-5 hover:bg-gray-300 border rounded-md'>Logout</Link>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar