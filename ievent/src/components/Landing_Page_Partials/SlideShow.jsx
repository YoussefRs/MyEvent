import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function SlideShow() {
    const images = [
        "img/SliderPics/edm1.jpg",
        "img/SliderPics/edm2.jpg",
        "img/SliderPics/edm3.jpg",
    ];
    const len = images.length - 1;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
    }, 5000);
      return () => clearInterval(interval);
    }, [activeIndex]);


   

    const zoomProp = {
        scale : 1,
        duration: 5000,
        transitionDuration: 300,
        infinity: true,

        prevArrow: (
            <div className='ml-10 top-1/2 transform -translate-y-1/2 md:absolute md:top-1/2 md:-translate-y-1/2 left-0 md:left-10 relative'>
                <FiArrowLeft className='h-8 w-8 text-white cursor-pointer' />
            </div>
        ),
        nextArrow: (
            <div className='mr-10 top-1/2 transform -translate-y-1/2 md:absolute md:top-1/2 md:-translate-y-1/2 right-0 md:right-10 relative' >
                <FiArrowRight className='h-8 w-8 text-white cursor-pointer' />
            </div>
        )
    }
  return (
    <div className='w-screen'>
      <Zoom {...zoomProp}>
        {images.map((each, i) =>(
            <div key={i} className='flex justify-center md:items-center items-start w-screen relative'>
                <img className='object-cover w-full h-screen' src={each}/>
            </div>
        ))}
      </Zoom>
    </div>
  )
}

export default SlideShow
