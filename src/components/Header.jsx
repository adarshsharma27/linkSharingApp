import React from "react";
import { NavLink,Link } from "react-router-dom";
import { RiLinksFill, RiAccountPinCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <header className="bg-white  font-poppins">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
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
                    <RiLinksFill size={20} className="hover:text-indigo-600"/>
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

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
