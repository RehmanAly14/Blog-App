import React from 'react'
import { assets } from "../../assets/assets";
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
    const {setToken,axios,navigate} = useAppContext()
    

    const logout = ()=>{
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization']=null;
      setToken(null)
      navigate('/')
        
    }
  return (
    <>
     <div className="flex   overflow-hidden py-2 px-4 sm:px-12  h-[70px]cursor-pointer border-b border-gray-200  items-center justify-between">
    
        <img  src={assets.logo} alt="" className="w-32 sm:w-44 " onClick={()=>navigate('/')} />
      
     
        <button onClick={logout} className="rounded-full bg-blue-500 hover:bg-blue-700 hover:scale-105 py-2 px-8  text-white flex items-center  text-sm "> Logout</button>
    
    </div>

    <div className='flex h-[cal(100vh-70px)]'>
       <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Layout