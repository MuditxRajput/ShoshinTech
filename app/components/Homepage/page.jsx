"use client"
import { useState } from 'react';
import Dashboard from "../Dashboard/page";
import Sidebar from "../Sidebar/page";

const Homepage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex ">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 sm:ml-[90px] lg:ml-[242px] flex-col">
        <div className="sm:hidden p-4">
          <button className="text-2xl" onClick={toggleSidebar}>
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <Dashboard />
      </div>
    </div>
  );
};

export default Homepage;
