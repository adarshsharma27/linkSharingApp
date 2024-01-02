import React from "react";

const ProfileDetails = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2  lg:px-16 lg:py-6 p-4 font-poppins">
        <div className="p-6 rounded-lg card-shadow-custom">
          <div className="p-16">
            <img
              alt="profileDetails"
              src="images/test.svg"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="p-6 rounded-lg card-shadow-custom">
            <div className="mx-auto max-w-lg text-left">
              <h1 className="text-2xl font-bold sm:text-2xl">
                Customize Your Links!
              </h1>

              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>
            <div className="mx-auto mb-0 mt-8 max-w-lg space-y-4">
              <div>
                <label
                  for="firstName"
                  className="text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <div className="relative my-2">
                  <input
                    type="text"
                    className="w-full rounded-lg  text-gray-700 border-gray-200 p-4 pe-12 text-sm shadow-md"
                    placeholder="Enter First Name"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
                <label
                  for="lastName"
                  className="text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <div className="relative my-2">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                    placeholder="Enter Last Name"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
                <label
                  for="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <div className="relative my-2">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                    placeholder="Please Enter Email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
                <label
                  for="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Profile Picture
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-54 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        <span className="text-indigo-600 font-bold text-xl">
                          Profile Picture
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX-2MB)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                  <span className="text-sm font-medium"> Save </span>
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
