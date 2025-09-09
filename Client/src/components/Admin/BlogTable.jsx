import React from "react";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";

const BlogTable = ({ blog, fetchBlogs, index }) => {
  const {axios} = useAppContext();
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  const handlePublish = async()=>{
    try {
     const{data} =await axios.post('/api/blog/toggle-publish',{id:blog._id})
     if(data.success){
      toast.success(data.message)
      await fetchBlogs()
     }else{
      toast.error(data.message)
     }
    } catch (error) {
      toast.error(error.message)
    }

  }
  const deleteBlog = async()=>{
    const confirm = window.confirm('Are you sure you want to delete this blog?')
    if(!confirm) return
    try {
     const {data} =await axios.post('/api/blog/delete',{id:blog._id})
     if(data.success){
      toast.success(data.message)
      await fetchBlogs()
     }else{
      toast.error(data.message)
     }
    } catch (error) {
      toast.error(error.message)
    }

  }

  return (
    <tr className="hover:bg-gray-50 transition border-b border-gray-200">
      {/* Index */}
      <th className="px-4 py-3 text-center text-gray-700">{index}</th>

      {/* Title */}
      <td className="px-4 py-3 font-medium text-gray-800">{title}</td>

      {/* Date */}
      <td className="px-4 py-3 text-gray-500 max-sm:hidden">
        {BlogDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>

      {/* Status */}
      <td className="px-4 py-3 max-sm:hidden">
        <span
          className={`px-2 py-1 text-xs rounded-full font-medium ${
            isPublished
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isPublished ? "Published" : "Unpublished"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {/* Publish/Unpublish Button */}
          <button onClick={handlePublish} className="border text-sm text-gray-600 px-3 py-1 rounded-md cursor-pointer w-full sm:w-auto hover:bg-gray-100">
            {blog.isPublished ? "Unpublish" : "Publish"}
          </button>

          {/* Delete Button */}
          <button
          onClick={deleteBlog}
            className="p-2 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
            title="Delete Blog"
          >
            <img src={assets.cross_icon} alt="Delete" className="w-6 h-6" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BlogTable;
