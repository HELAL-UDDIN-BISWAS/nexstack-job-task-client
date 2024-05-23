"use client"
import { Button } from "@/stories/Button";
import LoginForm from "@/stories/LoginForm";
import { useContext, useLayoutEffect } from "react";

import { redirect } from 'next/navigation'


const Create = () => {
    const token=localStorage.getItem('token')
useLayoutEffect(()=>{   
       if (!token){
           redirect('/login')
        }   
   
},[])
    return (
        <div>
            create page
            <Button
                label="Button"
                onClick={() => { console.log("hello everryone") }}
                Secondary
            />
            <div className="flex items-center justify-center">
                <LoginForm />
            </div>

        </div>
    );
};

export default Create;