import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Moment from 'moment'
import Loader from "../components/Loader/Loader";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
const Blog = () => {
 const {id} = useParams()
 const {axios} =useAppContext()
  const [data,setData] = useState(null)
  const [comments,setComments] = useState([])
  const [name,setName] = useState(null)
  const [content,setContent] = useState(null)

  const fetchBlogs = async ()=>{
   try {
    const {data} = await axios.get(`/api/blog/${id}`)

    data.success ? setData(data.blog) : toast.error(data.message)
   } catch (error) {
    toast.error(error.message)
   }
  }
  const fetchComments = async ()=>{
    try {
      const {data} = await axios.post(`/api/blog/comments`,{blogId: id})
  
      data.success ? setComments(data.comments) : toast.error(data.message)
     } catch (error) {
      toast.error(error.message)
     }
  }
  const addComment = async(e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.post(`/api/blog/add-comment`,{blog: id,name,content})
  
      if(data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
      }
      else{
        toast.error(data.message)
      }
     } catch (error) {
      toast.error(error.message)
     }


  }
  

  useEffect(()=>{
    fetchBlogs()
    fetchComments()
  },[])

  return data ? (
    <div><NavBar/>
    <div className="max-w-4xl mx-auto px-4 py-10">
     <div className="text-center mt-16">
      {/* Published Info */}
      <div className="text-sm text-gray-500 mb-4">
        First published on{' '}
        {Moment(data.createdAt).format('MMMM Do YYYY')}
      </div>
     
      {/* Title & Subtitle */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {data.title}
      </h1>
      <p className="text-lg text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: data.subTitle}}></p>
       <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-blue-500 bg-blue-100 font-medium text-blue-400">Sherry Rehman</p>
    
      </div>

      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full rounded-lg shadow mb-8"
      />

      {/* Blog Content */}
      <article
        className="rich-text max-w-3xl mx-auto "
        dangerouslySetInnerHTML={{ __html: data.description }}
      />

      {/* Comments Section */}
      <section className="mt-12">
      <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
    <MessageCircle className="w-6 h-6" />
    Comments ({comments.length})
  </h2>

  {/* Dynamic Comments */}
  <div className="space-y-6 mb-8">
    {comments.map((c) => (
      <div
        key={c.id}
        className="flex items-start gap-3 border-b pb-4"
      >
        {/* User Icon */}
        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-semibold">
          {c.name.charAt(0)}
        </div>

        {/* Comment Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="font-medium">{c.name}</p>
            <span className="text-xs text-gray-500">
              {Moment(c.createdAt).fromNow()}
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-1">{c.content}</p>
        </div>
      </div>
    ))}
  </div>

  


        {/* Comment Form */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
        <form onSubmit={addComment} className="flex flex-col items-start gap-4 max-w-lg">
          <input onChange={(e)=>setName(e.target.value)}
          value={name} type="text" required placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded outline-none"
          />
          <textarea
            rows="4"
            onChange={e=> setContent(e.target.value)}
            value={content}
            placeholder="Add your comment..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          ></textarea>
          <button
            type="submit"
            className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition"
          >
            Add Comment
          </button>
        </form>
        </div>
      </section>

    </div>
    <Footer/>
    </div>
  ): <Loader/>;
};

export default Blog;
