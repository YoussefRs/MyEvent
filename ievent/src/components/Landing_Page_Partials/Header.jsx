import { useRouter } from "next/router"


function Header() {

    const router = useRouter

  return (
    <div className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-20">
                {/*Desktop view */}
                <nav className="flex grow">
                    {/*Desktop sign in links*/}
                    <ul className="flex grow justify-end flex-wrap items-center">
                        <li>
                            <a
                                href='/users/signup'
                                className='btn-sm text-white bg-gray-700 hover:bg-gray-800 ml-3 cursor-pointer'
                            >
                                Signup
                            </a>
                            <a
                                href='/users/signin'
                                className='btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer'
                            >
                                Signin
                            </a>
                            
                            <a onClick={ () => router.push("/admin/auth")} className="btn-sm text-red bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer">
                                Event Manager 
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header
