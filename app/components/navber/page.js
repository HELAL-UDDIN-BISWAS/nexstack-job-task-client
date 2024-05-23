"use client"
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/stories/Button';
import { AuthContext } from '@/app/Provider/AuthContext';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { authState,logout, } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

   const handaleLogOut=()=>{
logout()
    }
    useEffect(() => {
        // Define an async function to fetch user data
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/user/${authState.userId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // Fetch user data if userId is available
        if (authState?.userId) {
            fetchUserData();
        } else {
            setLoading(false);
        }
    }, [authState,logout]);

    console.log(user)

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <p className="text-white text-lg font-semibold">MyLogo</p>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link className={`link ${pathname === '/' ? 'text-red-600' : 'text-red-400'}`} href="/">
                        Home
                    </Link>
                    <Link href="/profile">
                        <p className="text-white hover:text-gray-400">Profile</p>
                    </Link>
                    <Link href="/services">
                        <p className="text-white hover:text-gray-400">Services</p>
                    </Link>
                    <Link href="/contact">
                        <p className="text-white hover:text-gray-400">Contact</p>
                    </Link>
                </div>
                <div className="hidden gap-3 md:flex">
                    {
                        user ? <div className='gap-3 md:flex items-center'>
                            <h2 className='text-white'>Name: {user.name}</h2>
                            <Button
                            onClick={handaleLogOut}
                                label="Log Out"
                                primary
                            />
                        </div> : <div>
                            <Link href="/signup">
                            <Button
                                label="SignUp"
                                primary
                            />
                        </Link>

                            <Link href="/login">
                                <Button
                                    label="Login"
                                    primary
                                />
                            </Link></div>
                    }

                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Link className={`link ${pathname === '/' ? 'text-red-600' : 'text-red-400'}`} href="/">
                        Home
                    </Link>
                    <Link href="/about">
                        <p className="block text-white px-2 py-1 hover:bg-gray-700">About</p>
                    </Link>
                    <Link href="/services">
                        <p className="block text-white px-2 py-1 hover:bg-gray-700">Services</p>
                    </Link>
                    <Link href="/contact">
                        <p className="block text-white px-2 py-1 hover:bg-gray-700">Contact</p>
                    </Link>

                    <button className="block w-full text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 mt-2 rounded">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
}