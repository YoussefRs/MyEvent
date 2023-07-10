import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Landing_Page_Partials/Header'
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";

export default function index() {
    const router = useRouter();

    const [allEvents, setAllEvents] = useState([]);

    const fetchAllEvents = async () => {
      const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/getallevents`
      );
      if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
      }
      try {
          const data = await response.json();
          setAllEvents(data);
      } catch (error) {
          console.error("Invalid JSON string:", error.message);
      }
  };

  useEffect(() => {
      fetchAllEvents();
  }, []);



  return (
    <div className=" overflow-y-hidden " >
      <Header />
      <div className='flex m-auto'>
        <div className='flex mx-auto container'>
            <div className='flex m-auto overflow-y-hidden gap-4 lg:gap-8 w-full h-[calc(88vh)]'>
                {/* Render the main content of the dashboard */}
                <div className='flex w-full md:w-4/4 mx-auto justify-between container'>
                      <div className='p-4 overflow-y-auto w-full h-[calc(88vh)]'>
                        <h2 className='text-lg font-medium mb-4 text-white'>
                             Events             
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {allEvents.length === 0 ? (
                              <p className='text-white'>No events yet</p>
                            ) : (
                                allEvents.map((event, i) => (
                                <div
                                  key={event._id}
                                  onClick={() => {router.push(`/events/${event.event_id}`)}}
                                  className='hover:scale-105 cursor-pointer transition-all mt-5  rounded-lg shadow-md px-3 py-3'
                                >
                                  <div className='relative h-[20rem]'>
                                    {event.profile && (
                                      <Image 
                                        fill
                                        className='object-fill h-full w-full rounded-md'
                                        src={event.profile}
                                        alt=""
                                        sizes='(min-width: 640px) 100vw, 50vw'
                                        priority
                                      />
                                    )}
                                  </div>
                                  <div className='flex flex-row justify-between items-start mt-4'>
                                    <div className='px-2'>
                                       <p className='text-sm text-white font-bold'>
                                          {event.name.length > 30 ? event.name.slice (0,30) + "..." : event.name}
                                        </p>
                                        <p className='text-sm text-white'> {event.value}</p>
                                        <p className='text-sm text-white'>{event.date}</p>
                                    </div>
                                      {/*Star component*/}
                                      <div className='flex flex-col justify-end items-center'>
                                        <span className='w-full text-white flex flex-row items-center'>
                                            {event.venue}
                                        </span>
                                      </div>
                                  </div>
                                </div>
                              ))
                            )}
                        </div>
                      </div>                  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
