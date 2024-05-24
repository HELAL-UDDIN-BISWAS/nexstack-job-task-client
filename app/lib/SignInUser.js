import { useContext } from "react";
import { AuthProvider } from "../Provider/AuthContext";

const SignInUser = async() => {
    const {authState}=useContext(AuthProvider);
    console.log(authState)
    const result= await fetch(`https://job-tasks.vercel.app/user/${authState.userId}`)
    return result.json()
};

export default SignInUser;