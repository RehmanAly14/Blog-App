import React from 'react'
import {motion} from 'framer-motion'
const Newletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <motion.h1 className='md:text-4xl text-2xl font-semibold'
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
         viewport={{ once: true }}
        >Never Miss a Blog!</motion.h1>
        <motion.p className='md:text-lg text-gray-500/70 pb-8'
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
         viewport={{ once: true }}
        >Subscribe to get the latest blog, new tech, and exclusive new.</motion.p>
        <motion.form
        className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
       <input className="w-full pl-4 outline-none" type="text" placeholder="Enter your email id" required />
       <button type="submit" className="bg-blue-500 text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer">Subscribe</button>
      </motion.form>
    </div>
  )
}

export default Newletter