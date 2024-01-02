import React from "react";

const ProfileLinks = () => {
  return (
    <>
      <div class="grid grid-cols-1 gap-3 lg:grid-cols-2  lg:px-16 lg:py-6 p-4 font-poppins">
        <div class="p-6 rounded-lg card-shadow-custom">
          <div className="p-16">
            <img
              alt="profileLinks"
              src="images/links.svg"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div class="p-6 rounded-lg card-shadow-custom">
            <div class="mx-auto max-w-lg text-left">
              <h1 class="text-2xl font-bold sm:text-2xl">
                Customize Your Links!
              </h1>

              <p class="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>
            <div className="mx-auto mb-0 mt-8 max-w-lg space-y-4">
              <div>
                <label
                  for="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Link GitHub#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg  text-gray-700 border-gray-200 p-4 pe-12 text-sm shadow-md"
                    placeholder="Enter Github Url"
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
                  Link LinkedIn#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                    placeholder="Enter LinkedIn Url"
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
                  Link Facebook#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                    placeholder="Enter Facebook Url"
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
                  Link Twitter#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                    placeholder="Enter Twitter Url"
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
              </div>

              <div className="flex items-center justify-between">
                <button class="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                  <span class="text-sm font-medium"> Save </span>

                  <svg
                    class="h-5 w-5 rtl:rotate-180"
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

export default ProfileLinks;
