"use client"
import {  useLayoutEffect } from "react";
import { redirect } from 'next/navigation'
import UserPostForm from "@/stories/components/UserPostForm/UserPostForm";


const Create = () => {
useLayoutEffect(()=>{   
    const token=localStorage.getItem('token' == true)
       if (!token){
           redirect('/login')
        }   
   
},[])
    return (
        <div>
            create page
            <UserPostForm/>

        </div>
    );
};

export default Create;