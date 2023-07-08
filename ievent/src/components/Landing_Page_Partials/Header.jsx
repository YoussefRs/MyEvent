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
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineLogin } from 'react-icons/si'

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

  return (
    <header className="py-3 backdrop-blur-md ">
      <section className="max-w-5xl mx-auto w-11/12 sm:flex sm:justify-between sm:items-center ">
        <div className="flex items-center justify-between sm:block">
          <section className="w-16 rounded-full border-4 border-black overflow-hidden flex items-center">
            <img
              src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
              alt=""
              className="w-auto"
              style={{ height: '90%' }}
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
          <div className=" rounded-md p-2 border-8 mt-3 text-center sm:bg-transparent sm:p-0 sm:border-none sm:flex sm:m-0 sm:text-left">
            <a
              className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
              href="#"
            >
              HOME
            </a>
            <a
              className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
              href="#"
            >
              ABOUT
            </a>
            <a
              className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
              href="/shop"
            >
              SHOP
            </a>
            <a
              className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
              href="#"
            >
              CONTACT
            </a>
            <a
              className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)]"
              href="/users/signin"
            >
              ACCOUNT
            </a>
          </div>
          
        </nav>
      </section>
    </header>
  );
};

export default Header;