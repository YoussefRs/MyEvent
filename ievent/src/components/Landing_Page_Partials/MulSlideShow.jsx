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
    ];

    const settings = {
        dots: true,
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
                <h1 className="h2 mb-4">
                    UPCOMING
                </h1>
                <Fragment>
                    <Slider {...settings} >
                        {images.map((each, i) =>(
                            <div key={i} className='flex w-screen relative h-60'>
                                <img className='object-cover h-full cursor-pointer' src={each}/>
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
