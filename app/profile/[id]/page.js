"use client"

import { AuthContext } from "@/app/Provider/AuthContext";
import axios from "axios";
import { useContext } from "react";

const UpdateUser = () => {
    const {user}=useContext(AuthContext);
    console.log(user?.id)
    const handleSubmit = async(e) => {
        e.preventDefault();
         const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const Update={
            name,
            email,
            password
        }
await axios.put(`https://job-tasks.vercel.app/user/${user?.id}`,Update)
.then(res=>console.log(res))
.catch(error=>console.log(error))

        console.log(name,email,password)
      };
    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">User Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateUser;