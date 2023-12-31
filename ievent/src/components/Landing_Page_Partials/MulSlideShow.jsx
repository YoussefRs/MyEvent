import React, { Fragment, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function MulSlideShow() {
    const images = [
        "img/SliderPics/edm1.jpg",
        "img/SliderPics/edm2.jpg",
        "img/SliderPics/edm3.jpg",
        "img/SliderPics/edm4.jpg",
        "img/SliderPics/edm5.jpg",
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                 <div className='flex justify-between flex-row md:flex-ro'>
                    <a className="h2 mb-4 md:mb-0" href='#'>
                        UPCOMING
                    </a>
                    <a className="flex flex-row text-lg pt-2 mb-4 md:mb-0 md:mr-12 hover:text-[color:var(--darker-secondary-color)]" href='#'>
                         VIEW ALL
                         <FiArrowRight className='pt-2'/> 
                    </a>
                </div>
                <Fragment>
                    <Slider {...settings} >
                        {images.map((each, i) =>(
                            <div key={i} className='flex w-screen relative h-90'>
                                <img className='object-cover w-inherit h-80 cursor-pointer pr-1 pl-1' src={each}/>
                                <div className='flex justify-between ml-5 mr-5'>
                                  <div className='flex flex-col'>
                                    <p className='text-white'>Name</p>
                                    <p className='text-white'>Place</p>
                                  </div>
                                  <p className='text-[color:var(--darker-secondary-color)]'>Date</p>
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

export default MulSlideShow
