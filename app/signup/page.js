"use client"
import SignupForm from '@/stories/components/SignupForm/SignUpForm';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const SignUp = () => {
const {register}=useContext(AuthContext)

    const handleSubmit = async(event) => {
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    register(name,email,password)
    const SignUpUser={
        name,
        email,
        password
    }
    console.log(SignUpUser)
  };
    return (
        <div>
            <div className="flex items-center justify-center mt-6">
                <SignupForm handleSubmit={()=>handleSubmit(event)}/>
            </div>
        </div>
    );
};

export default SignUp;