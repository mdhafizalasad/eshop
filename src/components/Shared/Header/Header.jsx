import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import { useCart } from "../../../context/CartContext"; // Import the useCart hook
import logo from "../../../assets/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useCart() || {}; // Fallback to an empty object if useCart() is undefined
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar bg-black text-white sticky top-0 z-50 px-4 md:px-10 flex-wrap">
      {/* Logo Section */}
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost p-0">
          <img src={logo} alt="logo" className="w-26 h-16" />
        </NavLink>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <NavLink to="/" className="hover:text-blue-300">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-blue-300">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/product" className="hover:text-blue-300">Product</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink>
          </li>
          {!user && (
            <li>
              <NavLink to="/sign-up" className="hover:text-blue-300">Sign Up</NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Cart Icon with Item Count */}
      {user && (
        <Link to="/cart" className="btn btn-ghost btn-circle mx-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l3.6 7.59M7 13h13l1.4-5.4M17 19a2 2 0 11-4 0 2 2 0 014 0zm4-7H8.8L6 5H3" />
          </svg>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cart?.length || 0} {/* Use optional chaining and default to 0 if cart is undefined */}
          </span>
        </Link>
      )}

      {/* User Profile and Dropdown */}
      <div className="dropdown dropdown-end ml-auto md:ml-0">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-black rounded-box mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Name <span className="badge">{user?.displayName || "No Name"}</span>
            </a>
          </li>
          <li>
            <a>{user?.email}</a>
          </li>
          <li>
            {user?.uid ? (
              <a onClick={logOut} className="hover:text-blue-300">Logout</a>
            ) : (
              <Link to="/login" className="hover:text-blue-300">Login</Link>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="w-full bg-black text-white md:hidden absolute top-16 left-0 z-40 p-5">
          <ul className="space-y-4">
            <li>
              <NavLink to="/" className="hover:text-blue-300" onClick={toggleMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-300" onClick={toggleMenu}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/product" className="hover:text-blue-300" onClick={toggleMenu}>Product</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-300" onClick={toggleMenu}>Contact</NavLink>
            </li>
            {!user && (
              <li>
                <NavLink to="/sign-up" className="hover:text-blue-300" onClick={toggleMenu}>Sign Up</NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
