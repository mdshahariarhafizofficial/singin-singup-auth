import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Navbar = () => {
  const {user} = use(AuthContext)
  console.log(user);
  
  const links = (
    <>
      <li>
        <NavLink 
        to="/" 
        className={
          ({isActive})=> isActive? "w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2": "w-full text-black border-2 border-gray-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"}>Home</NavLink>
      </li>
      <li>
        <NavLink 
        to="/login"
        className={
          ({isActive})=> isActive? "w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2": "w-full text-black border-2 border-gray-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"}
        >login</NavLink>
      </li>
      <li>
        <NavLink 
        to="/register"
        className={
          ({isActive})=> isActive? "w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2": "w-full text-black border-2 border-gray-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"}
        >register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-sm text-xl  px-5 py-2.5 text-center me-2 mb-2">Simple Login Auth</button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">
            {
                links
            }
        </ul>
      </div>
      <div className="navbar-end">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          {
            user? "Log Out" : "LogIn"
          }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
