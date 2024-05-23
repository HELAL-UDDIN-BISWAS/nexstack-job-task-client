
"use client"
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
  });
  console.log(authState)
  const login = async (email, password) => {
    const res = await axios.post('http://localhost:5000/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.jwtToken);
        localStorage.setItem('userId', res.data.userId);
        setAuthState({
          token: res.data.token,
          userId: res.data.userId,
        });
      })
      .catch(error => console.log(error))

  };

  const register = async (name, email, password) => {
    const res = await axios.post('http://localhost:5000/register', { name, email, password })
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.jwtToken);
      localStorage.setItem('userId', res.data.userId);
      setAuthState({
        token: res.data.token,
        userId: res.data.userId,
      });
    })
    .catch(error => console.log(error))
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
