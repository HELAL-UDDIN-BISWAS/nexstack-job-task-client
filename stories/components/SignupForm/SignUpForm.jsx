"use client"
import axios from "axios";
import "./../signupform.css"
import { useContext } from "react";
import { AuthContext} from "@/app/Provider/AuthContext";

// import './SignupForm.css'; // Import the CSS file for styling

const SignupForm = () => {

const {register}=useContext(AuthContext)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    register(name,email,password)
    const SignUpUser={
        name,
        email,
        password
    }
  // await axios.post('http://localhost:5000/register',SignUpUser)
  //  .then(function (res) {
  //   console.log(res);
  //   localStorage.setItem('token', res.data.token);
  // console.log('Signup successful');
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  };

  return (
    <form  onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
