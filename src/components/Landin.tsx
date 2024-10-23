"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import Typed from 'typed.js';


const Landing = () => {
    useEffect(() => {
        const options = {
            strings: ['clear', 'concise', 'effective'],
            typeSpeed: 30, // Typing speed
            backSpeed: 10, // Backspacing speed
            loop: true,    // Loop the typing effect
            backDelay: 5000, // Delay before backspacing
        };

        // Initialize Typed.js only after component has mounted
        const typed = new Typed('#typedText', options);

        // Cleanup function to destroy Typed instance when component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array ensures this runs once when component mounts

    return (

        <div className="relative max-w-5xl flex h-screen items-center justify-center text-gray-100">
            <div className='absolute top-0 left-0 w-full h-full'>
                <video src="https://www.youtube.com/watch?v=BadB1z-V_qU" loop autoPlay></video>
            </div>
            <div className="text-center text-md w-10/12  ">
                <div className='mx-auto w-10/12 '>
                    <p>
                        Our goal is to help you excel in your studies with <span id='typedText' className='font-mono text-green-300'></span> content. In addition to our free resources, we also offer paid solutions for more personalized assistance.
                    </p>
                </div>
                
                <div className='border lg:py-1 mt-10 lg:w-1/4 w-3/4 mx-auto rounded-lg bg-gray-600 hover:cursor-pointer hover:bg-transparent transition-all duration-150 ease-in-out'>
                    <Link href="/signup">Register now</Link>
                </div>
            </div>

        </div>
    );
};

export default Landing;
