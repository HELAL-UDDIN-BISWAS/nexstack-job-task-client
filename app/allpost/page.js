"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllPost = () => {
    const [allpost,setPost]=useState()
    //     const response = await fetch("https://job-tasks.vercel.app/allposts");
    // const allpost = await response.json();
    useEffect(() => {
        fetch('https://job-tasks.vercel.app/allposts')
          .then(res => res.json())
          .then(dataes => setPost(dataes))
          .catch(error => console.error('Error fetching ratings:', error));
      }, []);
    console.log(allpost);
    const handleDelete=(Id)=>{
        axios.delete(`https://job-tasks.vercel.app/deletepost/${Id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        console.log(Id)
    }
    return (
        <div>
 <div className='grid grid-cols-3 gap-3 mt-3'>
            {
                allpost?.map(post => <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="w-full h-48 object-cover" src={post?.image} alt="Card Image" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Title: {post?.title}</h2>
                        <p className="text-gray-700 mb-4">Author By: {post?.author}</p>
                        <p className="text-gray-700">{post?.content}</p>
                    </div>
                    <div className="mx-5">
                        <Link href={`/allpost/${post?.id}`}>
                        <button className="bg-green-500 rounded p-2 px-4">Update</button>
                        </Link>
                       
                        <button className="bg-red-400 mx-2 rounded p-2 px-4" onClick={()=>handleDelete(post?.id)}>Delete</button>
                    </div>
                </div>)
            }

        </div>
        <div>
    </div>
        </div>
       
    );
};

export default AllPost;