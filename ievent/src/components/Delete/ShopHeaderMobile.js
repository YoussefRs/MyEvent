import { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRouter } from "next/router";
import Search from "@/components/shop_partials/search/Search";
import SideBarMenu from "./header/SideBarMenu";

function ShopHeaderMobile() {
  const router = useRouter();
  const [showSideBar, setShowBar] = useState(false);

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-30 bg-transparent backdrop-blur-md text-gray-900 glassmorphism px-6 md:hidden block py-4 transition-all">
        <div className="flex items-center w-full justify-between  mb-4">
          <div className="flex items-center space-x-4">
            <div>
              <AiOutlineMenu className="w-8 h-7 text-white " onClick={() => setShowBar(true)} />
            </div>
            <div className="w-16 rounded-full border-4 border-black overflow-hidden flex items-center">
              <Image
                src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
                alt="THRUST"
                className="cursor-pointer w-auto "
                width={70}
                height={30}
                onClick={() => router.push("/")}
              />
            </div>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <AiOutlineShoppingCart className="xl:w-10 w-9 h-8 text-white link hover:text-[color:var(--darker-secondary-color)]" />
            <div className="absolute -top-2 -right-1 rounded-full text-white bg-blue-light p-1 flex items-center justify-center text-xs font-extrabold">
              {/* {items?.length} */}
            </div>
          </div>
        </div>
        <div>
          <Search />
        </div>
      </header>
      <div
        className={`z-40 fixed inset-y-0 left-0 overflow-hidden transition-all duration-300  shadow-2xl  ${showSideBar ? "translate-x-0" : "-translate-x-full"
          }
          `}
      >
        <SideBarMenu closeSideBar={() => setShowBar(false)} />
      </div>
    </>
  );
}

export default ShopHeaderMobile;