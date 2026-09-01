import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {ArrowLeft} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
    const navigate = useNavigate();
    
    const backToHome = ()=>{
        navigate("/create-post");
    }
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://i.pinimg.com/736x/f7/48/18/f7481818bf6a66189c6fe41a4e9a8281.jpg",
            caption: "BMW Car"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
           setPosts(res.data.posts)
           
        })
       })
    
  return (
    <>
    <button onClick={backToHome} className='bg-red-400 rounded h-auto w-fit font-bold m-10 flex cursor-pointer'> <ArrowLeft /> Back to Home</button>
    <section className='feed-section flex flex-wrap'>
      { posts.length > 0 ? (posts.map((post)=>(
         <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p className='font-bold text-xl bg-gray-300 rounded h-auto'>{post.caption}</p>
         </div>
      ))):
      (<h1>No Posts Avaliable</h1>)
      }
    </section>
   </>
  )
}

export default Feed
