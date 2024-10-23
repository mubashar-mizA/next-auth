"use client";
import { useEffect } from 'react';
import Typed from 'typed.js';

const CommingSoon = () => {
    useEffect(() => {
        const options = {
            strings: ['.', '..', '...'], // Gradually increasing dots
            typeSpeed: 400,   // Slower speed to make the dots appear more gradual
            backSpeed: 200,   // Speed of removing dots
            loop: true,       // Keep looping the dots
            backDelay: 100,   // Shorter delay before backspacing for smooth effect
        };

        // Initialize Typed.js after component mount
        const typed = new Typed('#typedDOT', options);

        // Cleanup Typed instance on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="max-w-5xl h-96 flex items-center flex-col justify-center mx-auto ">
            <p className="text-4xl text-center">Coming soon</p>
            <p className="text-center m-5">
                Our fully functional LMS <br />
                is coming soon because we undergo reconstruction
                <span id="typedDOT" className="text-white "></span>
            </p>
        </div>
    );
};

export default CommingSoon;
