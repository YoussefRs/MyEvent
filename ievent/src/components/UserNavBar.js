import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import UserDropDown from '@/components/UserDropdown'
import { useRouter } from 'next/router';
import { getUserToken } from "@/utils/getUserToken";

export default function NavBar() {

    const router = useRouter();

    const userIdCookie = getUserToken();
    const [userData, setUserData] = useState({});

    // fetch the user data as soon as the page loads
    const fetchUserData = async () => {
        // If cookie was manually removed from browser
        if (!userIdCookie) {
            console.error("No cookie found! Please signin");
            // redirect to signin
            // router.push("/users/signin");
        }
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user/details`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_token: userIdCookie,
                }),
            }
        );
        if (!response.ok)
            throw new Error(`${response.status} ${response.statusText}`);

        // User Details fetched from API `/user/details`
        try {
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleDashboardClick = () => {
        router.push('/users/dashboard');
      };
    
      const handlePastEventsClick = () => {
        router.push('/users/past_events');
      };
    
      const handleShopClick = () => {
        router.push('/shop');
      };
    
      const handleAboutUsClick = () => {
        router.push('/');
      };


  return (
    <div className='mb-[8vh]'>
        <header className='bg-transparent fixed top-0 z-50 w-full shadow-md text-[color:var(--darker-secondary-color)]'>
            <div className='container mx-auto flex items-center flex-col lg:flex-row justify-between p-4'>
                <div
                    onClick={() => {router.push("/users/dashboard")}}
                    className='flex items-center gap-x-3 cursor-pointer'
                >
                    <Image
                        src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
                        width={500}
                        height={500}
                        alt="THRUST"
                        className='h-8 w-8 rounded'
                    />
                    <h1 className='m-2 text-[color:var(--darker-secondary-color)]font-bold text-4xl'>
                        THRUST
                    </h1>
                </div>
                <nav className='text-sm'>
                    <ul className='flex items-center'>
                        <li
                            onClick={handleDashboardClick}
                            className='mr-4 cursor-pointer'
                        >
                            <a>Dashboard</a>    
                        </li>
                        <li
                            onClick={handlePastEventsClick}
                            className='mr-4 cursor-pointer'
                        >
                            <a>Past Events</a>
                        </li>
                        <li
                            onClick={handleShopClick}
                            className='mr-4 cursor-pointer'
                        >
                            <a>Shop</a>
                        </li>
                        <UserDropDown userData={userData} />
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}
