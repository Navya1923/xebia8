import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="header bg-blue-500 text-white p-4 fixed top-0 left-0 w-full flex justify-between items-center z-50">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img w-24 " />
      </Link>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar hidden md:flex">
        <Link to="#who" className="text-lg text-white ml-4">
          WHO WE ARE
        </Link>
        <Link to="#what" className="text-lg text-white ml-4">
          WHAT WE DO
        </Link>
        <Link to="#where" className="text-lg text-white ml-4">
          WHERE WE WORK
        </Link>
        <Link to="#faq" className="text-lg text-white ml-4">
          FAQs
        </Link>
        <Link to="#PersonalDetails" className="text-lg text-white ml-4">
          LOGIN
        </Link>
      </nav>
    </header>
  );
};

export default Header;
