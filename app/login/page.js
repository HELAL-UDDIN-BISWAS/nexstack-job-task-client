"use client"
import LoginForm from '@/stories/LoginForm';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {
    const {login}=useContext(AuthContext);
    const handleSubmit = async(event) => {
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    const user={
      email: email,
      password: password
    }
    login(email,password)
  //  await axios.post('https://job-tasks.vercel.app/login',user)
  //   .then(function (res) {
  //     console.log(res);
  //     localStorage.setItem('token', res.data.token);
  //   console.log('Login successful');
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
    console.log('hello',email,password)
  };

    return (
        <div className="flex items-center justify-center mt-11">
            <LoginForm handleSubmit={()=>handleSubmit(event)}/>
        </div>
    );
};

export default Login;