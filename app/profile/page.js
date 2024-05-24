"use client"
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Button } from '@/stories/Button';
import Link from 'next/link';


const Profile = () => {
    const [token,setToken]=useState()
    const [userId,setUserId]=useState()
    const { user } = useContext(AuthContext);
console.log(user)
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        setToken(token)
        setUserId(userId)

    },[])
   


    return (
        <div>
            {
                token && userId ? <div className='mt-10'>
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <div className="flex items-center">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Name: {user?.name}</h1>
                                    <p className="text-gray-700">Email: {user?.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 mb-4 bg-gray-100">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 font-bold">Password:</span>
                                <span className="text-gray-700">{user?.password}</span>
                            </div>
                        </div>
                        <Link href={`/profile/${user?.id}`}>
                            <div className='m-5'>
                            <Button
                                label="Update"
                                secendery></Button>
                            </div>
                            
                        </Link>

                    </div>

                </div> : <div className='text-2xl text-center mt-10'>Do Not Have a User</div>
            }
        </div>

    );
};

export default Profile;