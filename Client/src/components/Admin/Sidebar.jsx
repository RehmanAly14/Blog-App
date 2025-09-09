import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus2,
  List,
  MessageSquare,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-screen w-20 lg:w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0">
     

      {/* Nav Links */}
      <nav className="flex-1 p-2 lg:p-4 space-y-2">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-violet-100 text-violet-700"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="hidden lg:inline">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/addBlog"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-violet-100 text-violet-700"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <FilePlus2 className="w-5 h-5" />
          <span className="hidden lg:inline">Add Blog</span>
        </NavLink>

        <NavLink
          to="/admin/listBlog"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-violet-100 text-violet-700"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <List className="w-5 h-5" />
          <span className="hidden lg:inline">Blog List</span>
        </NavLink>

        <NavLink
          to="/admin/comments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-violet-100 text-violet-700"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden lg:inline">Comments</span>
        </NavLink>
      </nav>

    
    </aside>
  );
};

export default Sidebar;
