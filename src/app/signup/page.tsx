"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const [notification, setNotification] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.currentTarget[0] as HTMLInputElement).value;
        const password = (e.currentTarget[1] as HTMLInputElement).value;
        console.log('Email', email, 'Password', password);
        if (!email || !password) {
            console.log("All fields are required");
            return; // Add return to prevent further execution
        }

        try {
            const res = await fetch('/api/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (res.status === 400) {
                setNotification('User already registered');
            } else if (res.status === 200) {
                setNotification('Successfully created');
                router.push('/login');
            }

        } catch (error) {
            // Properly typing the error
            console.error("Error in signup form:", (error as Error).message);
            setNotification('An error occurred. Please try again.'); // Show a notification for errors
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-5">
            <div>
                <div className="p-6 bg-gray-800 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-4xl text-center font-mono">Register</h1>

                        <div className="text-center m-2 mt-10">
                            <input
                                className="w-full rounded-md p-2 text-black placeholder:black outline-none"
                                type="email"
                                placeholder="Email"
                                name="email"
                                required // Add required attribute for better UX
                            /><br />
                        </div>
                        <div className="text-center m-2">
                            <input
                                className="w-full rounded-md p-2 text-black placeholder:black outline-none"
                                type="password"
                                placeholder="Password"
                                name="password"
                                required // Add required attribute for better UX
                            /><br />
                        </div>
                        <p className='m-2 text-red-900'>{notification}</p>
                        <div className="text-center m-2">
                            <button
                                type="submit"
                                className="w-1/2 border bg-gray-400 rounded-md p-2 mt-4 hover:bg-gray-900"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <p className='text-center'>-or-</p>
                    <div className='text-center'>
                        <Link href="/login">Login with an existing account</Link>
                    </div>
                </div>
            </div>
            <div className="m-3 p-4 mt-10 absolute lg:bottom-3 bottom-0 font-mono">
                <p className="relative p-4">Education is a matter of life and death for Pakistan</p>
                <q className="absolute p-3 right-5 bottom-0">Muhammad Ali Jinnah</q>
            </div>
        </div>
    );
};

export default Page;
