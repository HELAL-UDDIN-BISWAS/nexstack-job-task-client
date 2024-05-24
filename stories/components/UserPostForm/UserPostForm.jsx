// FormComponent.js
import React, { useState } from 'react';
import './FormComponent.css'; // Import the CSS file
import axios from 'axios';
import Swal from 'sweetalert2';



const UserPostForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    author: '',
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   const image=e.target.image.value
   const author=e.target.author.value
   const title=e.target.title.value
   const content=e.target.content.value
   const userpost={
    image,
    author,
    title,
    content
   }
   await axios.post('https://job-tasks.vercel.app/userpost',userpost)
   .then(res=>{
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Data Post",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    console.log(res)
  })
   .catch(error=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    console.log(error)})
    console.log(userpost);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="form-label">
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="form-textarea"
          />
        </label>
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default UserPostForm;
