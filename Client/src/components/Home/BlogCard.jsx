import React from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
const BlogCard = ({blog}) => {
    const navigate = useNavigate()

    const {title,description,category,image,_id}=blog
  return (
    <motion.div onClick={()=> navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-blue-500/25 duration-300 cursor-pointer'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
    viewport={{ once: true }}
    >
        <img src={image} alt="" className='aspect-video' />
        <span className='ml-5 mt-4 px-3 py-1 inline-block bg-blue-400/20 rounded-full text-blue-500'>{category}</span>
        <div className='p-5'>
            <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
            <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{'__html':description.slice(0,80)}}></p>
        </div>
    </motion.div>
  )
}

export default BlogCard