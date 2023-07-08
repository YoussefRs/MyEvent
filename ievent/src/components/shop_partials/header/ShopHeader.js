import React from 'react'
import { useState } from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRouter } from "next/router";
import Search from '../search/Search';

function ShopHeader() {
  const router = useRouter();
  return (
    <header className="sticky backdrop-blur-md top-0 inset-x-0 z-30 bg-transparent text-gray-900 glassmorphism px-6 md:block hidden">
        <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto">
            <div className="w-16 rounded-full border-4 border-black overflow-hidden flex items-center">
                <Image
                src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
                alt="RADON"
                className="cursor-pointer"
                width={100}
                objectFit="contain"
                height={50}
                onClick={() => router.push("/")}
                />
            </div>
            <div className="flex-grow">
              <Search />
            </div>
            <div className="flex items-center xl:space-x-12  lg:space-x-10 space-x-7  font-medium  lg:text-base text-sm">
              {/* {!loading ? (
                !session ? (
                  <span className="link" onClick={signIn}>
                    Login
                  </span>
                ) : (
                  <span
                    className="relative"
                    onClick={() => setDropDown((value) => !value)}
                  >
                    <span className="flex items-center cursor-pointer">
                      <img
                        src={session?.user?.image || "/img/ShopPics/profile_pic.svg"}
                        loading="lazy"
                        alt=""
                        width="24"
                        height="24"
                        className="object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md"
                      />
                      <ChevronDownIcon className="lg:w-6 w-4" />
                    </span>
                    {dropDown && (
                      <div className="absolute top-14 right-1">
                        <Dropdown hideDropDown={() => setDropDown(false)} />
                      </div>
                    )}
                  </span>
                )
              ) : (
                <Skeleton circle={true} width={40} height={40} />
              )} */}
                <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer"
                 onClick={()=>router.push("/users/signin")}>
                      Login
                </span>
                <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" 
                onClick={() => router.push("/orders")}>
                  Orders
                </span>
                <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" 
                onClick={() => router.push("/about")}>
                  About
                </span>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => router.push("/cart")}
            >
              <AiOutlineShoppingCart className="xl:w-10 lg:w-9 w-12 link text-white hover:text-[color:var(--darker-secondary-color)]" />
              <div className="absolute -top-2 -right-1 rounded-full text-white bg-blue-light p-1 flex items-center justify-center text-xs font-extrabold">
                {/* {items?.length} */}
              </div>
            </div>
        </div>
    </header>
  )
}

export default ShopHeader
