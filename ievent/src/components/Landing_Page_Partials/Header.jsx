// import { useRouter } from "next/router"


// function Header() {

//     const router = useRouter();

//   return (
//     <div classNameName="fixed w-full z-30 flex items-center backdrop-blur-md">
//         <a>
//             THRUST
//         </a>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//             <div className="flex items-center justify-between h-20">
//                 {/*Desktop view */}
//                 <nav className="flex grow">
//                     {/*Desktop sign in links*/}
//                     <ul className="flex grow justify-between flex-wrap items-center">
//                         <li>
//                             <a
//                                 href='/users/signup'
//                                 className='btn-sm text-white bg-gray-700 hover:bg-gray-800 ml-3 cursor-pointer'
//                             >
//                                 Signup
//                             </a>
//                             <a
//                                 href='/users/signin'
//                                 className='btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer'
//                             >
//                                 Signin
//                             </a>
                            
//                             <a onClick={ () => router.push("/admin/auth")} className="btn-sm text-red bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer">
//                                 Event Manager 
//                             </a>
//                         </li>
                        
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Header

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import { getUserToken } from '@/utils/getUserToken';
import dynamic from "next/dynamic";
import { removeUserToken } from '@/utils/removeUserToken';
import Link from 'next/link';
/**
 * Modify design on stackblitz
 * - https://play.tailwindcss.com/lHGLvzlyes
 */

const Header = () => {
  const hamburger = React.useRef(null);
  const router = useRouter();

  function toggleMenu() {
    hamburger.current.classList.toggle('h-0');
    hamburger.current.classList.toggle('h-56');
  }

  const userIdCookie = getUserToken();
  const [userData, setUserData] = useState({})

  const fetchUserData = async () => {

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

     // function to handle logout button click
     const handleLogout = () => {
      removeUserToken();
      router.push("/");
  };

  return (
  <header className="py-3 bg-black sticky top-0 flex justify-between">
    <section className="mx-auto w-11/12 sm:flex sm:items-center " >
      <div className="flex items-center justify-between sm:block">
        <section className="w-16 rounded-full border-4 border-black overflow-hidden flex items-center">
          <Image
            src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
            alt=""
            className="cursor-pointer"
            width={100}
            height={50}
            onClick={() => router.push("/")}
          />
        </section>
        <button
          onClick={toggleMenu}
          className="hamburger rounded-md cursor-pointer py-3 px-4 bg-[color:var(--darker-secondary-color)] sm:hidden text-white"
        >
          <span /> <AiOutlineMenu />
        </button>
      </div>
      <nav
        ref={hamburger}
        className="overflow-hidden h-0 transition-all duration-300 sm:h-auto text-white flex-grow"
      >
        <div className="rounded-md p-2 mt-3 text-center sm:bg-transparent sm:p-0 sm:border-none sm:flex sm:m-0 sm:text-left">
          <Link href="/events" className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]">
            EVENT
          </Link>
          <Link href="#" className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]">
            POSTS
          </Link>
          <Link href="/shop" className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]">
            SHOP
          </Link>
          {!userIdCookie ? (
            <Link
            className="block p-2 sm:ml-6 font-semibold text-white  text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
            href="/users/signin"
          >
            ACCOUNT
          </Link>
          ) : (
            <>
              <Link
              className="block p-2 sm:ml-6 font-semibold sm:ml-0 text-sm sm:text-base text-[color:var(--darker-secondary-color)]"
              >
                {userData.username}
              </Link>
              <Link className='block p-2 sm:ml-6 cursor-pointer font-semibold hover:text-[color:var(--darker-secondary-color)]  text-sm sm:text-base text-white' onClick={handleLogout}>LOGOUT</Link>
            </>
            
          )}
        </div>
      </nav>
    </section>
  </header>
  );
};

export default dynamic (() => Promise.resolve(Header), {ssr: false})







{/* <header className="py-3 bg-black sticky top-0 flex justify-between">
<section className=" mx-auto w-11/12 sm:flex sm:items-center ">
  <div className="flex items-center justify-between sm:block">
    <section className="w-16 rounded-full border-4 border-black overflow-hidden flex items-center">
      <Image
        src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
        alt=""
        className="cursor-pointer"
        width={100}
        height={50}
        onClick={() => router.push("/")}
      />
    </section>
    <button
      onClick={toggleMenu}
      className="hamburger rounded-md cursor-pointer py-3 px-4 bg-[color:var(--darker-secondary-color)] sm:hidden text-white"
    >
      <span /> <AiOutlineMenu />
    </button>
  </div>
  <nav
    ref={hamburger}
    className="overflow-hidden h-0 transition-all duration-300 sm:h-auto text-white"
  >
    <div className=" rounded-md p-2 border-8 mt-3 text-center sm:bg-transparent sm:p-0 sm:border-none sm:flex-center sm:flex sm:m-0 sm:text-left">
      <a
        className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
        href="#"
      >
        EVENTS
      </a>
      <a
        className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
        href="#"
      >
        POSTS
      </a>
      <a
        className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
        href="/shop"
      >
        SHOP
      </a>
      <a
      className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
      href="/account"
    >
      ACCOUNT
    </a>
    </div>
  </nav>
</section>
</header> */}