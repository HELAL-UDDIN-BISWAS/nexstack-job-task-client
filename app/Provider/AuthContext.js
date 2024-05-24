
"use client"
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authState, setAuthState] = useState({  });


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    const userId = JSON.parse(localStorage.getItem('userId'))
    const alltoken = {
      token,
      userId
    }
    setAuthState(alltoken)
  }, [])
  console.log(authState)
  const login = async (email, password) => {
    const res = await axios.post('http://localhost:5000/login', { email, password })
      .then(res => {
        JSON.stringify(localStorage.setItem('token', res.data.token));
        JSON.stringify(localStorage.setItem('userId', res.data.userId));
        setAuthState({
          token: res.data.token,
          userId: res.data.userId,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error =>{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Invalid User",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(error)
      })

  };

  const register = async (name, email, password) => {
    const res = await axios.post('http://localhost:5000/register', { name, email, password })
      .then(res => {
        console.log(res)
        JSON.stringify(localStorage.setItem('token', res.data.jwtToken));
        JSON.stringify(localStorage.setItem('userId', res.data.userId));
        setAuthState({
          token: res.data.token,
          userId: res.data.userId,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Register Success Full",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Email doesn't have to exist",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(error)})
    // localStorage.setItem('token', res.data.token);
    // setAuthState({
    //   token: res.data.token,
    //   user: res.data.userId
    // });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setAuthState({
      token: null,
      userId: null
    });
  };
  // =-=-=-=-=-=-
  useEffect(() => {
    // Define an async function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${authState.userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch user data if userId is available
    if (authState?.userId) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, login, register, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
