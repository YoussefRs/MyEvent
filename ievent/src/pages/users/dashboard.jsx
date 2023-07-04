import { useRouter } from 'next/router'
import React, { useState } from 'react'
import UserNavBar from '@/components/UserNavBar'
import Dashboard_Filter from '@/components/Dashboard_Filter';

export default function UserDashboard() {
    const router = useRouter();

    const [allEvents, setAllEvents] = useState([]);
    const [popupFilterOpen, setPopupFilterOpen] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        keyword: "",
        category: "",
        dataRange: "",
        price: [10,300],
    })
  return (
    <div className="pt-20 lg:pt-8 overflow-y-hidden bg-transparent" >
      <UserNavBar />
      <div className='flex m-auto'>
        <div className='flex mx-auto container'>
            <div className='flex m-auto overflow-y-hidden gap-4 lg:gap-8 w-full h-[calc(88vh)]'>
                {/*Render the regular filter for medium screens and above */}
                <div className='hidden md:flex flex-col p-4 sticky top-0 w-1/6 md:w-1/4'>
                    <Dashboard_Filter />

                </div>
                {/*Render the popup filter for small screens*/}
            </div>
        </div>
      </div>
    </div>
  )
}
