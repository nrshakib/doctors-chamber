import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="appointment">Appointment</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
      <li>
        {user ? (
          <button className="btn btn-ghost text-xl" onClick={logOut}>
            Sign Out
          </button>
        ) : (
          <Link to="login">LogIn</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar h-20 bg-gradient-to-r from-secondary to-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl ml-20">
          Doctor's Chamber
        </a>
      </div>
      <div className="navbar-end hidden lg:flex mr-10">
        <ul className="menu text-xl menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
