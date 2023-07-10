"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineBellAlert} from 'react-icons/hi2'
import {IoCloseOutline} from 'react-icons/io5'

const Navbar = () => {

    const [openProfile, setOpenProfile] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

    // Function to handle the search query
    const handleSearch = (e) => {
    e.preventDefault();
    // Perform your search logic here based on the search query
    // Replace the following code with your actual search implementation
    const dummySearchResults = [
        { name: 'File 1', path: '/files/file1' },
        { name: 'File 2', path: '/files/file2' },
        { name: 'File 3', path: '/files/file3' },
    ];
    setSearchResults(dummySearchResults);
    setShowSearchResults(true);
    };

    // Function to clear the search results and query
    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setShowSearchResults(false);
    }
    return (
        <nav className='mt-2'>
        {/* search */}
        <div className='flex justify-between py-3 px-6 bg-gray-50 border-b rounded-lg space-x-6'>
            <form onSubmit={handleSearch} className='w-full max-w-md'>
            <div className='relative flex items-center text-gray-400 focus-within:text-gray-600  '>
                <BiSearch className='w-5 h-5 absolute ml-3 pointer-events-none' />
                <input
                type='text'
                name='search'
                placeholder='Search'
                autoComplete='off'
                className='w-full pr-3 pl-9 py-1 font-medium placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            </form>
            {/* profile and notifications*/}
            <div className='relative flex-shrink-0 flex items-center gap-7'>
            <div>
                <HiOutlineBellAlert className='w-6 h-6' />
            </div>
            <div>
                <Image
                src='/bsu_logo.png'
                width={40}
                height={40}
                alt='profile'
                className='rounded-full'
                onClick={() => setOpenProfile((prev) => !prev)}
                />

                {openProfile && (
                <div className='flex flex-col absolute top-4.5 right-1 p-5 w-100 rounded-md border border-gray-400'>
                    <ul className='flex flex-col gap-2'>
                    <Link href='/' className='px-5 hover:bg-gray-300 border rounded-md'>
                        Profile
                    </Link>
                    <Link href='/' className='px-5 hover:bg-gray-300 border rounded-md'>
                        Settings
                    </Link>
                    <hr />
                    <Link href='/' className='px-5 hover:bg-gray-300 border rounded-md'>
                        Logout
                    </Link>
                    </ul>
                </div>
                )}
            </div>
            </div>
        </div>

        {/* Display search results */}
        {showSearchResults && (
            <div className='bg-gray-50 p-4 mt-2 md:w-5/12 md:border md:rounded-md'>
            <div className='flex items-center justify-between mb-2'>
                <h3 className='text-xl font-bold'>Search Results</h3>
                <IoCloseOutline className='w-5 h-5 text-gray-500 cursor-pointer' onClick={clearSearch} />
            </div>
                <ul>
                    {searchResults.map((result) => (
                    <li key={result.path}>
                        <Link href={result.path}>{result.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        )}
        </nav>
    );
};


export default Navbar