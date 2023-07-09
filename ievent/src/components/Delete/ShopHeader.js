// import React, { Fragment, useEffect } from 'react'
// import { useState } from "react";
// import Image from "next/image";
// import { AiOutlineShoppingCart } from 'react-icons/ai'
// import { useRouter } from "next/router";
// import Search from '../search/Search';
// import { getUserToken } from "@/utils/getUserToken";
// import UserDropDown from '@/components/UserDropdown';


// function ShopHeader() {
//   const router = useRouter();
//   const userIdCookie = getUserToken();
//   const [userData, setUserData] = useState({});

//   const fetchUserData = async () => {

//     const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/user/details`,
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 user_token: userIdCookie,
//             }),
//         }
//     );
//     if (!response.ok)
//         throw new Error(`${response.status} ${response.statusText}`);
  
//     // User Details fetched from API `/user/details`
//     try {
//         const data = await response.json();
//         setUserData(data);
//     } catch (error) {
//         console.error("Invalid JSON string:", error.message);
//     }
//   };
  
//     useEffect(() => {
//       fetchUserData();
//     }, []);

    

//   return (
//     <header className="sticky backdrop-blur-md top-0 inset-x-0 z-30 bg-transparent text-gray-900 glassmorphism px-6 md:block hidden">
      
//         <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto">
//             <div className="w-16 rounded-full border-4 border-black overflow-hidden flex items-center">
//                 <Image
//                 src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
//                 alt="THRUST"
//                 className="cursor-pointer"
//                 width={100}
//                 objectFit="contain"
//                 height={50}
//                 onClick={() => router.push("/")}
//                 />
//             </div>
//             <div className="flex-grow">
//               <Search />
//             </div>
//             <div className="flex items-center xl:space-x-12  lg:space-x-10 space-x-7  font-medium  lg:text-base text-sm">
//                 <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" 
//                 onClick={() => router.push("/orders")}>
//                   Orders
//                 </span>
//                 {!userIdCookie ? (
//                   <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" onClick={() => router.push('/users/signin')}>
//                     Login
//                   </span>
//                 ) : (
//                   <>
//                     <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" 
//                       onClick={() => router.push("/users/dashboard")}>
//                         Dashboard
//                     </span>
//                     <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" 
//                       >
//                         {/* {userData.username} */}
//                     </span>
//                   </>
//                    )} 
//             </div>
//             <div
//               className="relative cursor-pointer"
//               onClick={() => router.push("/cart")}
//             >
//               <AiOutlineShoppingCart className="xl:w-10 lg:w-9 w-12 link text-white hover:text-[color:var(--darker-secondary-color)]" />
//               <div className="absolute -top-2 -right-1 rounded-full text-white bg-blue-light p-1 flex items-center justify-center text-xs font-extrabold">
//                 {/* {items?.length} */}
//               </div>
//             </div>
//         </div>
//     </header>
//   )
// }

// export default ShopHeader
