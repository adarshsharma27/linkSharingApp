import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiLinksFill, RiAccountPinCircleLine } from "react-icons/ri";
import { RiAlignLeft, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="bg-white  font-poppins">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="flex font-bold text-indigo-600" to="/">
                <span className="sr-only">Home</span>
                <RiLinksFill size={30} /> <span>SimpleShare</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-base">
                  <li>
                    <NavLink
                      className="flex gap-2 hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                      to="/"
                    >
                      <RiLinksFill
                        size={20}
                        className="hover:text-indigo-600"
                      />
                      Links
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="flex gap-2 hover:bg-slate-200 hover:text-indigo-600 p-2 rounde"
                      to="/profileDetails"
                    >
                      <RiAccountPinCircleLine size={20} />
                      Profile Details
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 block md:hidden">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="flex font-bold text-indigo-600" to="/">
                <span className="sr-only">Home</span>
                <RiLinksFill size={30} /> <span>SimpleShare</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden z-50">
                {open === true ? (
                  <RiCloseLine
                    className="text-2xl"
                    onClick={() => toggleNavigation()}
                  />
                ) : (
                  <RiAlignLeft
                    className="text-2xl"
                    onClick={() => toggleNavigation()}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={
              open === true
                ? "md:hidden flex flex-col absolute right-0 top-0 w-full h-screen transition-all duration-1000 ease-in-out"
                : "md:hidden flex flex-col absolute right-[-350px] top-0 w-full h-screen transition-all duration-1000 ease-in-out"
            }
          >
            <nav aria-label="Global">
              <div className="w-full h-screen bg-indigo-600 flex flex-col justify-center items-center gap-4">
                <NavLink
                  className="flex gap-2 hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                  to="/"
                  onClick={() => toggleNavigation()}
                >
                  <RiLinksFill size={20} className="hover:text-indigo-600" />
                  Links
                </NavLink>

                <NavLink
                  className="flex gap-2 hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                  to="/profileDetails"
                  onClick={() => toggleNavigation()}
                >
                  <RiAccountPinCircleLine size={20} />
                  Profile Details
                </NavLink>

                <div className="p-2">
                  <a
                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/"
                  >
                    Login
                  </a>
                </div>
                <div className="p-2">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
