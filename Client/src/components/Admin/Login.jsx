import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const {axios,setToken}= useAppContext()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data} =await axios.post('/api/admin/login',{email,password})

      if(data.success){
        setToken(data.token)
        localStorage.setItem('token',data.token)
        axios.defaults.headers.common['Authorization']=data.token
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
   
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section (Branding / Info) */}
      <div className="hidden lg:flex w-1/2 bg-blue-500 text-white items-center justify-center p-12">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-bold">Welcome to QuickBlog Admin</h1>
          <p className="text-blue-100 text-lg">
            Manage your blogs, comments, and users in one powerful dashboard.
            Sign in to take full control of your blogging platform.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-blue-300"></div>
            <div className="h-3 w-3 rounded-full bg-blue-300"></div>
          </div>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                className="w-full border-b-2 border-gray-300 p-2 outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium block mb-2">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
                className="w-full border-b-2 border-gray-300 p-2 outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-all"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} QuickBlog Admin. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

