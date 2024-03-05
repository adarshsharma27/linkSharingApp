import React, { useEffect, useState } from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSquareXTwitter,
  FaShare,
} from "react-icons/fa6";
import conf, { databases } from "../conf/config";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Preview = () => {
  // const userProfileLinksDetails = useSelector((state) => state.profileReducer); fetching from redux
  const [userProfileLinksDetails, setUserProfileLinksDetails] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { t } = useTranslation();
  const userDetails = useSelector(
    (state) => state.AuthenticationReducer.userData
  );
  useEffect(() => {
    const getProfile = async () => {
      try {
        const resp = await databases.getDocument(
          conf.databaseId,
          conf.collectionId,
          id
        );
        setUserProfileLinksDetails(resp);
        setLoading(false);
      } catch (error) {}
    };
    getProfile();
  }, []);
  const shareProfileUrl = () => {
    window.navigator.clipboard.writeText(window.location.href);
    toast.success("Profile Link Copied Successfully", {
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
  };
  return (
    <>
      <div className="lg:px-16 lg:py-6 p-4 font-poppins dark:bg-[#313E51]">
        {loading === true ? (
          <Loader />
        ) : (
          <div className="w-full max-w-sm bg-white border mx-auto border-gray-100  rounded-lg card-shadow-custom dark:border-[#313E51] dark:bg-[#313E51]  dark:shadow-2xl">
            <div className="flex flex-col items-center py-8 relative">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg border-4 border-indigo-600 dark:border-sky-500"
                src={userProfileLinksDetails?.imageUrl}
                alt="Bonnie image"
              />
              {userDetails?.userId === userProfileLinksDetails?.$id && (
                <div className="bg-indigo-600  dark:bg-sky-500 absolute right-[30px] top-[30px]  text-white p-2 rounded cursor-pointer  scale-100 hover:scale-110 transition-all duration-100 ease-in-out">
                  <FaShare size={22} onClick={() => shareProfileUrl()} />
                </div>
              )}
              <h5 className="mb-1 text-2xl font-bold text-gray-600 dark:text-white ">
                {userProfileLinksDetails?.firstName}{" "}
                {userProfileLinksDetails?.lastName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400 ">
                {userProfileLinksDetails?.email}
              </span>
              <div className="flex mt-4 md:mt-4">
                <a
                  href={userProfileLinksDetails?.gitHubUrl}
                  className="inline-flex items-center justify-center md:w-72 w-60 gap-2 rounded border border-black bg-black  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  target="_blank"
                >
                  <FaGithub size={20} />
                  <span className="text-sm font-medium">
                    {" "}
                    {t("previewTitle.Github")}{" "}
                  </span>

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
                  href={userProfileLinksDetails?.linkedInUrl}
                  className="inline-flex items-center  justify-center md:w-72 w-60 gap-2 rounded border border-[#0A66C2] bg-[#0A66C2]  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  target="_blank"
                >
                  <FaLinkedin size={20} />
                  <span className="text-sm font-medium">
                    {t("previewTitle.LinkedIn")}{" "}
                  </span>

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
                  href={userProfileLinksDetails?.instaGramUrl}
                  className="inline-flex items-center justify-center md:w-72 w-60 gap-2 rounded border border-[#e4405f] bg-[#e4405f]  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  target="_blank"
                >
                  <FaInstagram size={20} />
                  <span className="text-sm font-medium">
                    {t("previewTitle.Instagram")}
                  </span>

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
                  href={userProfileLinksDetails?.faceBookUrl}
                  className="inline-flex items-center justify-center md:w-72 w-60 gap-2 rounded border border-[#1977F3] bg-[#1977F3]  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  target="_blank"
                >
                  <FaSquareFacebook size={20} />
                  <span className="text-sm font-medium">
                    {" "}
                    {t("previewTitle.Facebook")}{" "}
                  </span>

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
                  href={userProfileLinksDetails?.twitterUrl}
                  className="inline-flex items-center justify-center md:w-72 w-60 gap-2 rounded border border-[#1d9bf0] bg-[#1d9bf0]  py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  target="_blank"
                >
                  <FaSquareXTwitter size={20} />
                  <span className="text-sm font-medium">
                    {" "}
                    {t("previewTitle.Twitter")}{" "}
                  </span>

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
        )}
      </div>
    </>
  );
};

export default Preview;
