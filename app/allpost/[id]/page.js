"use client"
import axios from "axios";
import Swal from "sweetalert2";

const UpdatePost = ({params}) => {
    const{author,image,id,title,content}=params;
    console.log(id)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = e.target.image.value
        const author = e.target.author.value
        const title = e.target.title.value
        const content = e.target.content.value
        const userpost = {
            image,
            author,
            title,
            content
        }
        await axios.put(`https://job-tasks.vercel.app/userput/${id}`, userpost)
            .then(res => {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "data put",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              console.log(res)
            })
            .catch(error => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              console.log(error)
            })
        console.log(userpost);
    };
    return (
        <div className=" p-4 flex items-center justify-center ">
          <form className="w-2/5" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
                <input
                  type="text"
                  name="image"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                <input
                  type="text"
                  name="author"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                <input
                  type="text"
                  name="title"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
                <textarea
                  name="content"
                  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
        </div>
    );
};

export default UpdatePost;