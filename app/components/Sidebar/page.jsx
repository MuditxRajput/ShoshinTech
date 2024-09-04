import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FcDepartment } from "react-icons/fc";
import { IoIosPersonAdd } from "react-icons/io";
import { IoPeopleOutline, IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import logo from "../../assets/Logo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg sm:block ${
        isOpen ? "block" : "hidden"
      } md:w-[90px] lg:w-[242px] h-full`}
    >
      <div className="flex flex-col h-full bg-gray-100">
        {/* Logo */}
        <div className="flex items-center justify-center p-4 lg:p-6">
          <Image src={logo} alt="Logo" className="w-auto h-12" />
        </div>

        {/* Navigation Menu */}
        <div className="flex-grow p-4 lg:p-6 bg-gray-100">
          <p className="text-gray-500  text-xs lg:text-sm mb-4 whitespace-nowrap">Main Menu</p>
          <ul className="space-y-4 ">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              <MdDashboard className="text-xl" />
              <span className="block sm:hidden lg:block">Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              <IoIosPersonAdd className="text-xl" />
              <span className="block sm:hidden lg:block">Recruitment</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              <RiCalendarScheduleLine className="text-xl" />
              <span className="block sm:hidden lg:block">Schedule</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              <IoPeopleOutline className="text-xl" />
              <span className="block sm:hidden lg:block">Employee</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              <FcDepartment className="text-xl" />
              <span className="block sm:hidden lg:block">Department</span>
            </li>
          </ul>
          <div className="mt-5">
            <p className="text-gray-500 font-medium text-sm mb-4">Other</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                <BiSupport className="text-xl" />
                <span className="block sm:hidden lg:block">Support</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                <IoSettingsSharp className="text-xl" />
                <span className="block sm:hidden lg:block">Setting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Close Button for Mobile */}
        <button
          className="sm:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={toggleSidebar}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
