import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {

  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
      e.preventDefault();

      const formData = new FormData(e.target);

      await axios.post("http://localhost:3000/create-post", formData)
      .then((res)=>{
        navigate("/feed");
      })
      .catch((err)=>{
         console.log(err);
         alert("Post creating Error")
      })
    
}
  return (
    <>
    <section className='create-post-section'>
       <h1 className='font-bold text-3xl'>Create Post</h1>

       <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept='image/*'/>
          <input type="text" name="caption" required placeholder='Enter Caption' />
          <button type='submit'>Submit</button>
       </form>
    </section>
    </>
  )
}

export default CreatePost
