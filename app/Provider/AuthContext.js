
"use client"
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authState, setAuthState] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const alltoken = {
      token,
      userId
    }
    setAuthState(alltoken)
  }, [])

  console.log(authState)
  const login = async (email, password) => {
    const res = await axios.post('https://job-tasks.vercel.app/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token)
       localStorage.setItem('userId', res.data.userId)
       console.log(res)
        setAuthState({
          token: res.data.token,
          user: res.data.userId
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
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
    const res = await axios.post('https://job-tasks.vercel.app/register', { name, email, password })
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        setAuthState({
          token: res.data.token,
          user: res.data.userId
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
    localStorage.setItem('token', res.data.token);
    setAuthState({
      token: res.data.token,
      user: res.data.userId
    });
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
    const fetchUserData = async () => {
      if (!authState.userId) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`https://job-tasks.vercel.app/user/${authState?.userId}`);
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

    fetchUserData();
  }, [authState.userId]);
  
  return (
    <AuthContext.Provider value={{ authState, login, register, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
