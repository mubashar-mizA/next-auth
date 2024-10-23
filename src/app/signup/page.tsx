"use client"
import Link from 'next/link'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()

    const [notification, setNotification] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        console.log('Email', email, 'Password', password)
        if (!email || !password) {
            console.log("All fields are required")
        }

        try {
            const res = await fetch('/api/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })

            if (res.status == 400) {
                setNotification('User already register')
            }
            if (res.status == 200) {
                setNotification('Sucssefully created')
                router.push('/login')
            }

        } catch (error) {
            console.log("Bhi error signup form mn aa rha h", error)
        }

    }
    return (
        <div className="relative min-h-screen flex items-center justify-center p-5">
            
            <div>
                <div className=" p-6 bg-gray-800 rounded-lg">
                    <form>
                        <h1 className="text-4xl text-center font-mono "><a href="">Register</a></h1>

                        <div className="text-center m-2 mt-10">
                            <input className="w-full rounded-md p-2 text-black placeholder:black outline-none " type="email" placeholder="Email" name="email" /><br />
                        </div>
                        <div className="text-center m-2">
                            <input className="w-full rounded-md p-2 text-black placeholder:black outline-none" type="Password" placeholder="Password" name="password" /><br />
                        </div>
                        <div className="text-center  m-2">
                            <button type="submit" className="w-1/2 border bg-gray-400 rounded-md p-2 mt-4 hover:bg-gray-900">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>-or-</p>
                    <div className='text-center'><Link href="/login">Login with an existing account</Link></div>

                </div>
            </div>
            <div className="m-3 p-4 mt-10 absolute bottom-3 font-mono">
                <p className="relative p-4">Education is a matter of life and death for pakistan</p>
                <q className="absolute p-3 right-5 bottom-0">Muhammad Ali Jinnah</q>
            </div>

        </div>
    )
}

export default page