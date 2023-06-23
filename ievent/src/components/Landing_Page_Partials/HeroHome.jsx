import React from 'react'

function HeroHome() {
  return (
    <section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            {/*Hero content */}
            <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="h1 m-2 text-[color:var(--primary-color)]">
                        {"< i"}
                        <span className='text-[color:var(--darker-secondary-color)]'>EVENT</span>
                        {" />"}
                        <p className="mt-3 text-5xl text-white">
                                {"Event Management"}
                        </p>
                    </h1>
                    <p className="text-2xl text-gray-500 mb-8">
                        "Simplified Registration, Seamless Management, and Easy Ticketing."
                    </p>
                    <a
                        href='/users/signin'
                        className='btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0'
                    >
                        Signin
                    </a>
                    <a
                        href='/users/signup'
                        className='btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4'
                    >
                        Signup
                    </a>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroHome
