import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserLinks } from "../features/profileSlice";
import { useNavigate } from "react-router-dom";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import toast from "react-hot-toast";
const ProfileLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState();
  const [instaGramUrl, setInstaGramUrl] = useState();
  const [faceBookUrl, setFaceBookUrl] = useState();
  const [twitterUrl, setTwitterUrl] = useState();
  const [gitHubUrlErr, setGitHubUrlErr] = useState(false);
  const [linkedInUrlErr, setLinkedInUrlErr] = useState(false);
  const [instaGramUrlErr, setInstaGramUrlErr] = useState(false);
  const [faceBookUrlErr, setFaceBookUrlErr] = useState(false);
  const [twitterUrlErr, setTwitterUrlErr] = useState(false);

  const userProfileLinksDetails = useSelector((state) => state?.profileReducer);
  const userDetails = useSelector(
    (state) => state.AuthenticationReducer.userData
  );
  useEffect(() => {
    setGitHubUrl(userProfileLinksDetails?.profileLinks?.gitHubUrl);
    setLinkedInUrl(userProfileLinksDetails?.profileLinks?.linkedInUrl);
    setInstaGramUrl(userProfileLinksDetails?.profileLinks?.instaGramUrl);
    setFaceBookUrl(userProfileLinksDetails?.profileLinks?.faceBookUrl);
    setTwitterUrl(userProfileLinksDetails?.profileLinks?.twitterUrl);
  }, [userProfileLinksDetails]);
  const addProfileLinks = () => {
    // Regular expressions for validating URLs
    const githubRegex =
      /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-]+(\/)?$/;
    const linkedinRegex =
      /^(https?:\/\/)?(www\.)?linkedin\.com\/[a-zA-Z0-9-]+(\/)?$/;
    const instagramRegex =
      /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.]+(\/)?$/;
    const facebookRegex =
      /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9-.]+(\/)?$/;
    const twitterRegex =
      /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]+(\/)?$/;
    if (!gitHubUrl || !githubRegex.test(gitHubUrl)) {
      setGitHubUrlErr(true);
      setLinkedInUrlErr(false);
      setInstaGramUrlErr(false);
      setFaceBookUrlErr(false);
      setTwitterUrlErr(false);
    } else if (!linkedInUrl || !linkedinRegex.test(linkedInUrl)) {
      setLinkedInUrlErr(true);
      setGitHubUrlErr(false);
      setInstaGramUrlErr(false);
      setFaceBookUrlErr(false);
      setTwitterUrlErr(false);
    } else if (!instaGramUrl || !instagramRegex.test(instaGramUrl)) {
      setInstaGramUrlErr(true);
      setGitHubUrlErr(false);
      setLinkedInUrlErr(false);
      setFaceBookUrlErr(false);
      setTwitterUrlErr(false);
    } else if (!faceBookUrl || !facebookRegex.test(faceBookUrl)) {
      setFaceBookUrlErr(true);
      setInstaGramUrlErr(false);
      setGitHubUrlErr(false);
      setLinkedInUrlErr(false);
      setTwitterUrlErr(false);
    } else if (!twitterUrl || !twitterRegex.test(twitterUrl)) {
      setTwitterUrlErr(true);
      setFaceBookUrlErr(false);
      setInstaGramUrlErr(false);
      setGitHubUrlErr(false);
      setLinkedInUrlErr(false);
    } else {
      if (userDetails) {
        dispatch(
          addUserLinks({
            gitHubUrl,
            linkedInUrl,
            instaGramUrl,
            faceBookUrl,
            twitterUrl,
          })
        );
        navigate("/profileDetails");
      } else {
        toast.success("Please SignUp ", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#fff",
            color: "#252525",
            padding: "20px",
            fontWeight: "700",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            borderBottom: "3px solid #4F46E5",
            borderRadius: "3px",
            fontFamily: "Poppins, sans-serif",
          },
        });
        navigate("/signup");
      }
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2  lg:px-16 lg:py-6 p-4 font-poppins dark:bg-[#313E51]">
        <div className="p-6 rounded-lg card-shadow-custom dark:shadow-2xl">
          <div className="p-16">
            <img
              alt="profileLinks"
              src="images/links.svg"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="p-6 rounded-lg card-shadow-custom dark:bg-[#313E51] dark:shadow-2xl">
            <div className="mx-auto max-w-lg text-left">
              <h1 className="text-2xl font-bold sm:text-2xl dark:text-white">
                Customize Your Links!
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-200">text</p>
            </div>
            <div className="mx-auto mb-0 mt-8 max-w-lg space-y-4">
              <div>
                <label
                  htmlFor="github"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Link GitHub#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg  text-gray-700 border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Github Url"
                    value={gitHubUrl}
                    onChange={(e) => {
                      setGitHubUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaGithub size={20} className="dark:text-sky-500" />
                  </span>
                </div>
                {gitHubUrlErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      Please Enter GitHub Url
                    </span>
                  </div>
                )}
                <label
                  htmlFor="linkedin"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Link LinkedIn#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter LinkedIn Url"
                    value={linkedInUrl}
                    onChange={(e) => {
                      setLinkedInUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaLinkedin
                      size={20}
                      className="text-[#0A66C2] dark:text-sky-500"
                    />
                  </span>
                </div>
                {linkedInUrlErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      Please Enter LinkedIn Url
                    </span>
                  </div>
                )}
                <label
                  htmlFor="youtube"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Link Instagram#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Twitter Url"
                    value={instaGramUrl}
                    onChange={(e) => {
                      setInstaGramUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaInstagram
                      size={20}
                      className="text-[#e4405f] dark:text-sky-500"
                    />
                  </span>
                </div>
                {instaGramUrlErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      Please Enter Instagram Url
                    </span>
                  </div>
                )}
                <label
                  htmlFor="facebook"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Link Facebook#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Facebook Url"
                    value={faceBookUrl}
                    onChange={(e) => {
                      setFaceBookUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaSquareFacebook
                      size={20}
                      className="text-[#1977F3] dark:text-sky-500 "
                    />
                  </span>
                </div>
                {faceBookUrlErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      Please Enter Facebook Url
                    </span>
                  </div>
                )}
                <label
                  htmlFor="facebook"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Link Twitter#
                </label>
                <div className="relative my-2">
                  <input
                    type="url"
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Enter Twitter Url"
                    value={twitterUrl}
                    onChange={(e) => {
                      setTwitterUrl(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <FaSquareXTwitter
                      size={20}
                      className="text-[#0F1419] dark:text-sky-500"
                    />
                  </span>
                </div>
                {twitterUrlErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      Please Enter Twitter Url
                    </span>
                  </div>
                )}
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
