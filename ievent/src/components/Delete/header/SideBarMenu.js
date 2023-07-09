import Image from "next/image";
// import {
//   HomeIcon,
//   InformationCircleIcon,
//   LogoutIcon,
//   MailIcon,
//   ShoppingBagIcon,
//   ShoppingCartIcon,
//   TableIcon,
//   UserCircleIcon,
//   XIcon,
// } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import onClickOutside from "react-onclickoutside";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { getUserToken } from "@/utils/getUserToken";
import { useEffect, useState } from "react";


function SideBarMenu({ closeSideBar }) {
  const router = useRouter();
  const userIdCookie = getUserToken();
  const [userData, setUserData] = useState({});

  SideBarMenu.handleClickOutside = closeSideBar;

  const sideBarClickHandler = (href) => {
    closeSideBar();
    router.push(href);
  };

  const fetchUserData = async () => {
    // If cookie was manually removed from browser
    // if (!userIdCookie) {
    //     console.error("No cookie found! Please signin");
    //     // redirect to signin
    //     router.push("/users/signin");
    // }
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


  return (
    <div className="relative h-full w-full px-8 py-6  font-medium md:hidden backdrop-blur-md">
      <div>
        <Image
          src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo.png"
          alt="THRUST"
          className="cursor-pointer rounded-full "
          width={70}
          objectFit="contain"
          height={30}
        />
      </div>
      <div className=" h-0.5 my-4 w-full bg-[color:var(--darker-secondary-color)]"></div>
      <div className="my-8">
            {!userIdCookie ? (
                  <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" onClick={() => router.push('/users/signin')}>
                    Login
                  </span>
                ) : (
                  <>
                    <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" 
                      >
                        {userData.username}
                    </span>
                    <span className="block p-2 font-semibold text-white text-sm sm:text-base hover:text-[color:var(--darker-secondary-color)] cursor-pointer" 
                      onClick={() => router.push("/users/dashboard")}>
                        Dashboard
                    </span>
                    {/* <UserDropDown userData={userData} /> */}
                  </>
                   )} 
      </div>
      {/* <div className="gap-4 flex flex-col text-white"> */}
        {/* <div>
          <span
            onClick={() => sideBarClickHandler("/")}
            className="link inline-flex"
          >
            <HomeIcon className="w-5 mr-6" /> Home
          </span>
        </div> */}
        {/* {session && session?.admin && (
          <div>
            <span
              onClick={() => sideBarClickHandler("/admin/dashboard")}
              className="link inline-flex"
            >
              <TableIcon className="w-5 mr-6" /> Dashboard
            </span>
          </div>
        )}
        {session && (
          <div>
            <span
              onClick={() => sideBarClickHandler("/profile")}
              className="link inline-flex"
            >
              <UserCircleIcon className="w-5 mr-6" /> Profile
            </span>
          </div>
        )} */}
        {/* <div>
          <span
            onClick={() => sideBarClickHandler("/cart")}
            className="link inline-flex"
          > */}
            {/* <ShoppingCartIcon className="w-5 mr-6" />  */}
            {/* Cart
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/orders")}
            className="link inline-flex"
          > */}
            {/* <ShoppingBagIcon className="w-5 mr-6" /> */}
             {/* Orders
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/about")}
            className="link inline-flex"
          > */}
            {/* <MailIcon className="w-5 mr-6" />  */}
            {/* Contact
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/about")}
            className="link inline-flex"
          > */}
            {/* <InformationCircleIcon className="w-5 mr-6" /> */}
             {/* About
          </span>
        </div> */}
        {/* {session && (
          <div>
            <span
              onClick={() => {
                signOut();
              }}
              className="link inline-flex"
            >
              <LogoutIcon className="w-5 mr-6" /> Logout
            </span>
          </div>
        )} */}
      {/* </div> */}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SideBarMenu.handleClickOutside,
};

export default onClickOutside(SideBarMenu, clickOutsideConfig);