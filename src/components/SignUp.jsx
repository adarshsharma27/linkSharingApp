import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2  lg:px-16 lg:py-4 p-4 font-poppins">
        <div className="rounded-lg ">
          <img
            alt="profileLinks"
            src="images/signup.avif"
            className="object-cover w-full lg:h-[450px] h-full rounded-lg "
          />
        </div>
        <div>
          <div className="p-6 rounded-lg card-shadow-custom">
            <div className="mx-auto max-w-lg text-left">
              <h1 className="text-2xl font-bold sm:text-2xl">Sign Up!</h1>

              <p className="mt-2 text-gray-500">Welcome to SimpleShare!</p>
            </div>
            <div className="mx-auto mb-0 mt-4 max-w-lg space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <div className="relative my-2">
                  <input
                    type="text"
                    className="w-full rounded-lg  text-gray-700 border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Please Enter Name"
                    // value={gitHubUrl}
                    // onChange={(e) => {
                    //   setGitHubUrl(e.target.value);
                    // }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    {/* <FaGithub size={20} /> */}
                  </span>
                </div>

                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <div className="relative my-2">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Please Enter Email"
                    // value={instaGramUrl}
                    // onChange={(e) => {
                    //   setInstaGramUrl(e.target.value);
                    // }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    {/* <FaInstagram size={20} className="text-[#e4405f]" /> */}
                  </span>
                  <label
                    htmlFor="Password"
                    className="text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <div className="relative my-2">
                    <input
                      type="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                      placeholder="Please Enter Password"
                      // value={instaGramUrl}
                      // onChange={(e) => {
                      //   setInstaGramUrl(e.target.value);
                      // }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  //   onClick={() => addProfileLinks()}
                >
                  <span className="text-sm font-medium"> SignUp </span>

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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
