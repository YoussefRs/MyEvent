import Image from "next/image";
import Fade from "react-reveal/Fade";
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Banner() {
    const scrollHandler = () => {
      window.scrollTo({
        top: document.getElementById("products-feed").offsetTop - 90,
        behavior: "smooth",
      });
      //window.location.href='#products-feed'
    };
  
    return (
      <div className="px-6  sm:py-16  xs:py-14 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-screen-xl mx-auto h-full  bg-transparent overflow-hidden md:gap-1 gap-4 p-6 border-4 border-white overflow-hidden">
          <div className="max-w-lg">
            <Fade left>
              <div className="text-[color:var(--darker-secondary-color)] font-extrabold">
                <h2 className="lg:text-6xl sm:text-5xl xxs:text-4xl text-3xl leading-snug">
                  Stay Home
                </h2>
                <h1 className="lg:text-7xl sm:text-6xl xxs:text-5xl text-4xl leading-snug sm:mt-4 xxs:mt-2">
                  Shop Online.
                </h1>
              </div>
              <p className="lg:mt-10  lg:mb-14 sm:mt-8 sm:mb-10 mt-6 mb-8 max-w-md font-medium lg:text-base text-white text-sm">
                Shop online from a wide range of genuine products whenever you
                want 24x7.
              </p>
              <button
                className="button lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-white flex items-center justify-center bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)]"
                onClick={scrollHandler}
              >
                <AiOutlineShoppingCart className="mr-2 xl:w-6 w-5 text-white" />
                Shop Now
              </button>
            </Fade>
          </div>
          <div className="max-w-xs mx-auto  md:mx-0 md:w-1/2 xl:w-auto md:max-w-lg sm:max-w-sm  xl:max-w-none">
            <Fade right>
              <Image
                src="/img/ShopPics/hero.svg"
                alt=""
                width={600}
                height={600}
                objectFit="contain"
              />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
  
  export default Banner;