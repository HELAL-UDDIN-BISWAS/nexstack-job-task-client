"use client"
import PropTypes from 'prop-types';
import { useState } from 'react';
import './LoginForm.css'
import { Button } from './Button';


const LoginForm = ({handleSubmit}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async(event) => {
  //   event.preventDefault();
  //   const name=event.target.name.value;
  //   const email=event.target.email.value;
  //   const password=event.target.password.value;
  //   const user={
  //     email: email,
  //     password: password
  //   }
  //   login(email,password)
  // //  await axios.post('http://localhost:5000/login',user)
  // //   .then(function (res) {
  // //     console.log(res);
  // //     localStorage.setItem('token', res.data.token);
  // //   console.log('Login successful');
  // //   })
  // //   .catch(function (error) {
  // //     console.log(error);
  // //   });
  //   console.log('hello',email,password)
  // };

  return (
    <div className='login-form div'>
    <form className='' onSubmit={handleSubmit}>
      <div className=''>
        <label className=''>Email:</label>
        <input
        name='email'
        className='login-form input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mt-10 '>
        <label htmlFor="password">Password:</label>
        <input
        name='password'
        className='login-form input'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        label="Login"
     type='submit'
        Secondary
      />
      {/* <button type="submit">Login</button> */}
    </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;