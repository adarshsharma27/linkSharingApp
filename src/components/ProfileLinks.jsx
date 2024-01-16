import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserLinks } from "../features/profileSlice";
import { useNavigate } from "react-router-dom";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
const ProfileLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gitHubUrl, setGitHubUrl] = useState();
  const [linkedInUrl, setLinkedInUrl] = useState();
  const [instaGramUrl, setInstaGramUrl] = useState();
  const [faceBookUrl, setFaceBookUrl] = useState();
  const [twitterUrl, setTwitterUrl] = useState();
  const addProfileLinks = () => {
    dispatch(addUserLinks({ gitHubUrl, linkedInUrl, instaGramUrl, faceBookUrl,twitterUrl}));
    navigate("/profileDetails");
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2  lg:px-16 lg:py-6 p-4 font-poppins">
        <div className="p-6 rounded-lg card-shadow-custom">
          <div className="p-16">
            <img
              alt="profileLinks"
              src="images/links.svg"
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

              <p className="mt-2 text-gray-500">text</p>
            </div>
            <div className="mx-auto mb-0 mt-8 max-w-lg space-y-4">
              <div>
                <label
                  htmlFor="github"
                  className="text-sm font-medium text-gray-600"
                >
                  Link GitHub#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg  text-gray-700 border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Github Url"
                    value={gitHubUrl}
                    onChange={(e) => {
                      setGitHubUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaGithub size={20} />
                  </span>
                </div>
                <label
                  htmlFor="linkedin"
                  className="text-sm font-medium text-gray-600"
                >
                  Link LinkedIn#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter LinkedIn Url"
                    value={linkedInUrl}
                    onChange={(e) => {
                      setLinkedInUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaLinkedin size={20} className="text-[#0A66C2]" />
                  </span>
                </div>
                <label
                  htmlFor="youtube"
                  className="text-sm font-medium text-gray-600"
                >
                  Link Instagram#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Twitter Url"
                    value={instaGramUrl}
                    onChange={(e) => {
                      setInstaGramUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaInstagram size={20} className="text-[#e4405f]" />
                  </span>
                </div>
                <label
                  htmlFor="facebook"
                  className="text-sm font-medium text-gray-600"
                >
                  Link Facebook#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Facebook Url"
                    value={faceBookUrl}
                    onChange={(e) => {
                      setFaceBookUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaSquareFacebook size={20} className="text-[#1977F3] " />
                  </span>
                </div>
                <label
                  htmlFor="facebook"
                  className="text-sm font-medium text-gray-600"
                >
                  Link Twitter#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Twitter Url"
                    value={twitterUrl}
                    onChange={(e) => {
                      setTwitterUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaSquareTwitter size={20} className="text-[#1d9bf0] " />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  onClick={() => addProfileLinks()}
                >
                  <span className="text-sm font-medium"> Save </span>

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

export default ProfileLinks;
