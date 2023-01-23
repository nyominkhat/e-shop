import React, { useContext } from "react";
import { BsFillHandbagFill, BsListNested } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import  {Context}  from "../App";
import Logo from "/images/logo.svg";

let activeLink = {
  color: "#B68D40",
};

const NavBar = ({ amount }) => {
  const { isShown, setIsShown, isOpen, setIsOpen } = useContext(Context);

  return (
    <nav className="sticky top-0 right-[10vw] z-50">
      <div className="border-b-2 bg-heather border-secondary text-charcoal relative flex items-center min-w-screen min-h-[10vh]">
        {/* small device */}
        <ul className="flex items-center justify-between w-full p-4 sm:hidden">
          <li className="w-1/3">
            <span
              onClick={() => setIsOpen(true)}
              className="text-2xl cursor-pointer menu"
            >
              <BsListNested />
            </span>
          </li>
          <li className="flex flex-col items-center w-1/3">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </li>
          <li
            onClick={() => setIsShown(!isShown)}
            className="flex justify-end w-1/3 gap-1"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="cursor-pointer hover:text-white"
            >
              <BsFillHandbagFill />
            </motion.span>
            <span className="absolute bg-gold p-1 top-2 right-0 rounded-full py-0 px-1.5 text-sm select-none">
              {amount === 0 ? undefined : amount}
            </span>
          </li>
        </ul>

        {/* over small device */}
        <ul className="items-center justify-between hidden w-full gap-4 p-4 font-semibold md:px-8 lg:px-12 xl:px-16 2xl:px-20 sm:flex">
          <li className="w-[6.5rem] mr-10">
            <NavLink to="/">
              <img src={Logo} alt="logo" className="w-full" />
            </NavLink>
          </li>

          <ul className="flex items-center sm:gap-2 lg:gap-16 grow">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeLink : null)}
                className="px-4 py-2 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLink : null)}
                to="/products"
                className="px-4 py-2"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeLink : null)}
                className="px-4 py-2"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                style={({ isActive }) => (isActive ? activeLink : null)}
                className="px-2 py-2"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <li
            onClick={() => setIsShown(!isShown)}
            className="relative flex justify-end gap-1 p-1 "
          >
            <span className="text-xl transition duration-200 ease-out cursor-pointer hover:text-tan">
              <BsFillHandbagFill />
            </span>

            {amount === 0 ? null : (
              <motion.span
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.6,
                }}
                className="absolute bg-gold -top-3 -right-3 rounded-full py-0 px-1.5 text-sm select-none"
              >
                {amount}
              </motion.span>
            )}
          </li>
        </ul>
      </div>

      {isOpen ? (
        <motion.aside
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0.6,
          }}
          className="fixed sm:hidden top-0 -left-10 z-50 text-charcoal w-[90vw] h-[100vh] bg-white"
        >
          <span className="min-h-[10vh] border-b-[1px] border-secondary flex justify-end items-center pr-2">
            <span
              className="p-4 border rounded-full cursor-pointer border-secondary"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose />
            </span>
          </span>

          <ul className="flex flex-col gap-6 p-4 pl-20">
            <li onClick={() => setIsOpen(false)}>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeLink : null)}
              >
                Home
              </NavLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <NavLink
                style={({ isActive }) => (isActive ? activeLink : null)}
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeLink : null)}
              >
                About Us
              </NavLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <NavLink
                to="/contactus"
                style={({ isActive }) => (isActive ? activeLink : null)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </motion.aside>
      ) : null}
    </nav>
  );
};

export default NavBar;
