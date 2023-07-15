import { setUserToken } from "@/utils/setUserToken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Cookies from "universal-cookie";
import Link from "next/link";

export async function getServerSideProps(context) {
    const cookies = new Cookies(context.req.headers.cookie);
    const userId = cookies.get("user_token");
    if (!userId) {
        return {
            props: { userIdCookie: null },
        };
    }
    return {
        props: { userIdCookie: userId },
    };
}

export default function Signin({ userIdCookie }) {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState({ errorMsg: "", successMsg: ""})
    const [otp, setOtp] = useState('')

    useEffect(() => {
        // If cookie found, Redirect to dashboard
        if (userIdCookie) {
            setStep(3); // Skip login steps

            setTimeout(() => {
                // Set success message
                setMessage({
                    errorMsg: "",
                    successMsg: "Redirecting you ...",
                });
            }, 500);

            // Redirect to dashboard
            setTimeout(() => {
                router.push("/users/dashboard");
            }, 800);
        }
    }, []);

    const handleVerifyEmail = async (e) => {
        e.preventDefault();

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user/signin`,
            {
                method : 'POST',
                headers: {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    email: email,
                })
            }
        );

        const data = await response.json();
        if (response.status === 200) {
            setMessage({ errorMsg: "", successMsg: data.msg});
            setStep(2); // Move to the next step on the same page
        } else {
            console.error(`Failed with status code${response.status}`)
            setMessage({ errorMsg : data.msg, successMsg: ''})
            // redirect to signup if shown "This Email is not registred. Try signing up instead!"
            setTimeout(() => {
                // set Success Message
                setMessage({
                    errorMsg: "Redirecting you to Signup Page ...",
                    successMsg : ""
                })
            }, 1700);

            //Redirect to Dashboard
            setTimeout(() => {
                router.push('/users/signup')
            }, 2500)
        }
    }
    
    const handleSubmit  = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user/signin/verify`,
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify( {
                    email : email,
                    otp : otp
                }),
            }
        )
        const data = await response.json();
        if (response.status === 200) {
            setMessage({ errorMsg : "", successMsg : data.msg});
            setStep(3); // Move to the next step on the same page
            setUserToken(data.user_id);
        } else {
            console.error(`Failed with status code ${response.status}`);
            setMessage({ errorMsg: data.msg, successMsg: ""});
        }

    }
 
  return (
    <div className='m-2'>
      {/* back button */}
      <FiArrowLeft 
        onClick={() => router.push('/')}
        size={24}
        color='white'
        className='cursor-pointer'
      />
      {/* Page Heading */}
      <div className="text-center text-3xl font-bold text-white">Signin Page</div>
      {/* Page Content */}
      <div className="max-w-3xl mx-auto mt-10  ">
        {/* Nav steps*/}
        <div className="flex items-center justify-center">
            {/* step1: normal-height: fit; mobile-view: 6rem */}
            <div
                className={`w-full h-24 lg:h-fit ${
                    step === 1 ? `font-medium` : ``
                }`}
            >
                <div
                     className={`h-full border-2 rounded-l-lg px-5 py-2 ${
                        step >= 1
                        ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]`
                        : `border-[color:var(--darker-secondary-color)] border-dashed`
                    }`}
                >
                    <div>01</div>
                    Verify Email
                </div>
            </div>

            {/* step2: normal-height: fit; mobile-view : 6rem */}
            <div
                className={`w-full h-24 lg:h-fit ${
                    step === 2 ? `font-medium` : ``
                }`}
            >
                <div
                     className={`h-full border-2 rounded-l-lg px-5 py-2 ${
                        step >= 2
                        ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]`
                        : `text-gray-400 border-[color:var(--darker-secondary-color)] border-dashed`
                    }`}
                >
                    <div>02</div>
                    OTP Verification
                </div>
            </div>

            {/* step3: normal-height: fit; mobile-view : 6rem */}
            <div
                className={`w-full h-24 lg:h-fit ${
                    step === 3 ? `font-medium` : ``
                }`}
            >
                <div
                     className={`h-full border-2 rounded-l-lg px-5 py-2 ${
                        step >= 3
                        ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]`
                        : `text-gray-400 border-[color:var(--darker-secondary-color)] border-dashed`
                    }`}
                >
                    <div>03</div>
                    Go to Dashboard!
                </div>
            </div>
        </div>

        {/* Error Message Handle */}
        {message.errorMsg && (
            <h1 className='rounded p-3 my-2 bg-red-200 text-red-600 font-medium'>
                {message.errorMsg}
            </h1>
        )}

        {/* Success Message Handle */}
        {message.successMsg && (
            <h1 className='rounded p-3 my-2 bg-green-500 text-white font-medium'>
                {message.successMsg}
            </h1>
        )}

        {/* Steps content */}
        <div className="bg-white p-5 rounded-lg mt-2">
            {
                /* step 1 Content */
                step === 1 && (
                    <form onSubmit={handleVerifyEmail}>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Enter Your Email address
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            className='bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-full'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type='submit'
                            className="mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]"
                        >
                            Verify
                        </button>
                    </form>
                )
            }
            {
                /*step 2 Content */
                step === 2 && (
                    <form onSubmit={handleSubmit}>
                        {/* Only OTP in Signin */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Enter Verification Code
                            </label>
                            <input 
                                type ="text"
                                id="otp"
                                name='otp'
                                autoComplete='none'
                                required
                                value={otp}
                                className='bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12'
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>

                        <button
                            type='submit'
                            className='mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]'
                        >
                            Submit
                        </button>
                    </form>
                )
            }
            {
                /*Step 3 Content */
                step === 3 && (
                    <div>
                        <div className="bg-green-50 border-b border-green-400 text-green-800 text-sm p-4 flex justify-between">
                            <div className="flex items center">
                                <p>
                                    <span className="font-bold">
                                        Hey there!{" "}
                                    </span>
                                    Welcome back, you&apos;re successfully signed in!!
                                </p>
                            </div>
                        </div>
                        <Link href="/users/dashboard">
                            <button
                                className="mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)] transition ease-in-out"
                            >
                                Go to your dashboard
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  )
}
