import React, { Fragment, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

function SlideShop() {
    const images = [
      "img/ShopPics/j1.jpg",
      "img/ShopPics/j2.png",
      "img/ShopPics/j3.jpg",
      "img/ShopPics/j4.jpg",
      "img/ShopPics/j5.png",
      "img/ShopPics/j3.jpg",
  ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };

  return (
    <section>
        <div className="max-w-100 mx-4 px-4 sm:px-6 text-white">
            <br/>
            {/*Title section */}
            <div className="max-w-100 text-white md:pb-16 ">
                <div className='flex justify-between flex-row md:flex-row'>
                  <Link className="h2 mb-4 md:mb-0" href='/shop'>
                      SHOP
                  </Link>
                  <Link className="flex flex-row text-lg pt-2 mb-4 md:mb-0 md:mr-12 hover:text-[color:var(--darker-secondary-color)]" href='#'>
                       VIEW ALL
                      <FiArrowRight className='pt-2'/> 
                  </Link>
                </div>
                <Fragment>
                    <Slider {...settings} >
                        {images.map((each, i) =>(
                            <div key={i} className='flex w-full relative h-90'>
                                <img className='object-cover w-80 h-80 cursor-pointer pr-1 pl-1' src={each}/>
                                <div className='flex flex-col ml-5 mr-5'>
                                    <p className='text-white'>Name</p>
                                    <p className='text-[color:var(--darker-secondary-color)]'>Price</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Fragment>
            </div>
        </div>
    </section>
  )
}

export default SlideShop;
