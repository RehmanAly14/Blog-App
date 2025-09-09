import React, { useEffect, useState } from "react";
import BlogTable from "../../components/Admin/BlogTable";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const List = () => {
  const {axios} = useAppContext()
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const {data} = await axios.get('/api/admin/blogs')
      if(data.success){
        setBlogs(data.blogs)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-blue-50/50 w-full">
    <div className="flex-1 h-full overflow-y-auto pt-5 px-5 sm:pt-12 sm:pl-16 ">
      <h1 className="text-xl font-semibold">All Blogs</h1>

      <div className="overflow-x-auto mt-5 rounded-lg shadow-md">
        <table className="min-w-full border border-gray-200 bg-white">
          <thead className="bg-gray-100 text-gray-700 text-sm sticky top-0 z-10">
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
          <tbody className="text-sm divide-y divide-gray-200">
            {blogs.map((blog, index) => (
              <BlogTable
                key={blog._id}
                index={index + 1}
                blog={blog}
                fetchBlogs={fetchBlogs}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default List;
