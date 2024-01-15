import React from "react";
import {
  FaSquareFacebook,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const Preview = () => {
  return (
    <>
      <div className="lg:px-16 lg:py-6 p-4 font-poppins">
        <div className="w-full max-w-sm bg-white border mx-auto border-gray-100 rounded-lg card-shadow-custom">
          <div className="flex flex-col items-center py-8">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg border-4 border-indigo-600"
              src="https://avatars1.githubusercontent.com/u/37371998?v=4"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-2xl font-bold text-gray-600 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div className="flex mt-4 md:mt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center md:w-72 w-60 gap-2 rounded border border-black-600 bg-black  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <FaGithub size={20} />
                <span className="text-sm font-medium"> Github </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div className="flex mt-4 md:mt-4">
              <a
                href="/"
                className="inline-flex items-center  justify-center md:w-72 w-60 gap-2 rounded border border-[#0A66C2] bg-[#0A66C2]  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <FaLinkedin size={20} />
                <span className="text-sm font-medium"> LinkedIn </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div className="flex mt-4 md:mt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center md:w-72 w-60 gap-2 rounded border border-[#FF0000] bg-[#FF0000]  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <FaYoutube size={20} />
                <span className="text-sm font-medium"> Youtube </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                     strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div className="flex mt-4 md:mt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center md:w-72 w-60 gap-2 rounded border border-[#1977F3] bg-[#1977F3]  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <FaSquareFacebook size={20} />
                <span className="text-sm font-medium"> Facebook </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
