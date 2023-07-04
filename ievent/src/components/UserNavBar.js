import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <div className='mb-[8vh]'>
        <header className='bg-transparent fixed top-0 z-50 w-full shadow-md text-[color:var(--darker-secondary-color)]'>
            <div className='container mx-auto flex items-center flex-col lg:flex-row justify-between p-4'>
                <div
                    onClick={() => {}}
                    className='flex items-center gap-x-3 cursor-pointer'
                >
                    <Image
                        src="/favicon_io/android-chrome-192x192.png"
                        width={500}
                        height={500}
                        alt='Logo'
                        className='h-8 w-8'
                    />
                    <h1 className='m-2 text-[color:var(--darker-secondary-color)]font-bold text-4xl'>
                        THRUST
                    </h1>
                </div>
                <nav className='text-sm'>
                    <ul className='flex items-center'>
                        <li
                            onClick={() => {}}
                            className='mr-4 cursor-pointer'
                        >
                            <a>Dashboard</a>    
                        </li>
                        <li
                            onClick={() => {}}
                            className='mr-4 cursor-pointer'
                        >
                            <a>Past Events</a>
                        </li>
                        <li
                            onClick={() => {}}
                            className='mr-4 cursor-pointer'
                        >
                            <a>About us</a>
                        </li>
                        {/* <UserDropDown userData={userData} /> */}
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}
