import React from "react";
import { NavLink, Link } from "react-router";

const Register = () => {
  return (
    <div className="bg-linear-65 from-purple-500 pt-20 to-pink-500 h-screen">
      <form className="max-w-md mx-auto bg-white p-5 space-y-5 rounded-xl">
        <div>
          <h2 className="text-center text-3xl font-bold">Registration Form</h2>
          <div className="my-5 flex gap-0">
            <NavLink
              to="/login"
              type="button"
              className={({ isActive }) =>
                isActive
                  ? "w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                  : "w-full text-black border-2 border-gray-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              type="button"
              className={({ isActive }) =>
                isActive
                  ? "w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                  : "w-full text-black border-2 border-gray-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2 border-l-0"
              }
            >
              Register
            </NavLink>
          </div>
        </div>

        {/* Name */}
        <label className=" w-full input input-secondary">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="input"
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
          />
        </label>

        {/* Email */}
        <label className="w-full input validator input-secondary">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>

        {/* Password */}
        <label className="w-full input validator input-secondary">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            required
            placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>

        {/* Button */}
        <button
          type="button"
          className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Register Now
        </button>

        <p className="text-center my-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-semibold">
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
