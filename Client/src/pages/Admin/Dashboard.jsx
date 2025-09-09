import React, { useEffect, useState } from "react";
import { assets} from "../../assets/assets";
import BlogTable from "../../components/Admin/BlogTable";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
const Dashboard = () => {
  const {axios}=useAppContext();
  const [dashData, setDashData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
  const fetchDashboard = async () => {
    try {
      const {data} =await axios.get('/api/admin/dashboard',{})
      if(data.success){
      setDashData(data.dashboardData)
        
      }else{
       toast.error(data.message)
      }
     } catch (error) {
       toast.error(error.message)
     }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);
  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>
        {/* table */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th scope="col" className="px-2 py-3 text-left font-semibold">
                  #
                </th>
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  Blog Title
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold max-sm:hidden"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold max-sm:hidden"
                >
                  Status
                </th>
                <th scope="col" className="px-4 py-3 text-left font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=" text-sm">
              {dashData.recentBlogs.map((blog, index) => (
                <BlogTable
                  key={blog._id}
                  index={index + 1}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
