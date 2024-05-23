import { useContext } from "react";
import { AuthProvider } from "../Provider/AuthContext";

const SignInUser = async() => {
    const {authState}=useContext(AuthProvider);
    console.log(authState)
    const result= await fetch(`http://localhost:5000/user/${authState.userId}`)
    return result.json()
};

export default SignInUser;