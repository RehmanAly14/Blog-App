import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const {setInput,input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler =async(e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }
  const onClear=async()=>{
    setInput('')
    inputRef.current.value=''
  }
  return (
    <motion.div
      className="mx-8 sm:mx-16 xl:mx-24 flex-column justify-center text-center my-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-blue-500"
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400">New: AI feature integrated</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1
        className="text-4xl font-bold max-w-[400px] sm:text-7xl sm:max-w-[790px] text-center mx-auto mt-10 text-slate-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        Your own <span className="text-blue-600">blogging</span>, platform
      </motion.h1>

      <motion.p
        className="text-center text-gray-500 max-sm:text-xs  mt-5 mx-auto max-w-2xl my-6 sm:my-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it's one word or a thousand, your story
        starts right here.
      </motion.p>
      <motion.form
       onSubmit={onSubmitHandler}
        className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
       <input ref={inputRef} className="w-full pl-4 outline-none" type="text" placeholder="Search for blogs" required />
       <button type="submit" className="bg-blue-500 text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer">Search</button>
      </motion.form>
      <div className="text-center">
        {input && <button onClick={onClear} className="border font-light text-xs py-1 px-3 mt-4 rounded-sm shadow-custom-sm cursor-pointer">Clear Search</button>}
      </div>
    
    </motion.div>
   
  );
};

export default Header;
