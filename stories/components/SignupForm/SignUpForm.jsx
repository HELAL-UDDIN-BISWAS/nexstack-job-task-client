"use client"
import PropTypes from 'prop-types';
import "./../signupform.css"
import { useState } from 'react';
import { Button } from '@/stories/Button';

const SignupForm = ({handleSubmit}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

// const {register}=useContext(AuthContext)
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   const name=e.target.name.value;
  //   const email=e.target.email.value;
  //   const password=e.target.password.value;
  //   register(name,email,password)
  //   const SignUpUser={
  //       name,
  //       email,
  //       password
  //   }
  // // await axios.post('http://localhost:5000/register',SignUpUser)
  // //  .then(function (res) {
  // //   console.log(res);
  // //   localStorage.setItem('token', res.data.token);
  // // console.log('Signup successful');
  // // })
  // // .catch(function (error) {
  // //   console.log(error);
  // // });

  // };

  return (
    <form  onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required

        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button
        label="Sign Up"
     type='submit'
        Secondary
      />
      {/* <button type="submit">Sign Up</button> */}
    </form>
  );
};
SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SignupForm;
