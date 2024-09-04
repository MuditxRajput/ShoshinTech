import { CgProfile } from "react-icons/cg";
import { FaBell, FaCommentDots } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3  shadow-md">
      {/* Search Bar */}
      <div className="flex items-center  ">
        <input
          type="text"
          placeholder="Search"
          className=" w-[150px] sm:w-[400px]  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <button className="ml-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-200">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.65 16.65z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-4 ">
    
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-blue-500 transition duration-200" />
          <FaCommentDots className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-blue-500 transition duration-200" />
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <CgProfile className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:text-blue-500 transition duration-200" />
          <p className="text-gray-800 font-semibold text-sm sm:text-base hidden lg:block">
            Admirra John
          </p>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
