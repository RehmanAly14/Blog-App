import React, { useState } from 'react'
import {  blogCategories } from '../../assets/assets'
import {motion} from 'framer-motion'
import BlogCard from './BlogCard'
import { useAppContext } from '../../context/AppContext'
const BlogList = () => {
    const {blogs,input} =useAppContext()
    const [menu,setMenu] = useState('All')

    const filteredBlogs = ()=>{
        if(input === ''){
            return blogs
        }
        return blogs.filter((blog)=>blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }
  return (
    <div>
        <motion.div className='flex justify-center gap-4 sm:gap-8 my-10 relative'
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
         viewport={{ once: true }}
        >
            {blogCategories.map((item)=>(
                <div key={item} className='relative'>
                    <button onClick={()=> setMenu(item)} className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}>
                        {item}
                        {menu === item &&(
                        <motion.div layoutId='underline'
                        transition={{type: 'spring' , stiffness: 500 , damping:30}} 
                        className= 'absolute left-0 right-0 top-0 h-7 -z-10 bg-blue-600 rounded-full'
                       
                        ></motion.div>
                        )}
                    </button>
                </div>
            ))}
        </motion.div>
       {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24 mx-6 sm:mx-12 xl:mx-32">
        {filteredBlogs()
          .filter((blog) => (menu === 'All' ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}

        {/* No Blogs Message */}
        {filteredBlogs().length === 0 && (
          <p className="col-span-full text-center text-gray-500 py-10">
            🚫 No blogs found. Try another category or search term.
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogList