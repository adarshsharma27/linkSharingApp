import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../features/profileSlice";
import { useNavigate } from "react-router-dom";
import { NotificationAudio } from "../utils/NotificationAudio";
import {
  RiMailOpenFill,
  RiAccountPinCircleFill,
  RiAB,
  RiUploadCloud2Fill,
  RiCloseFill,
} from "react-icons/ri";
import toast from "react-hot-toast";
import conf from "../conf/config";
import { ID, databases, storage } from "../conf/config";
import { getFileId } from "../features/UploadFileIdSlice";
import { useTranslation } from "react-i18next";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFileId, setUploadFileId] = useState("");
  const [hideFileUpload, setHideFileUpload] = useState(true);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);
  const { t } = useTranslation();
  const userProfileDetails = useSelector((state) => state?.profileReducer);
  const userProfileLinksDetails = useSelector((state) => state?.profileReducer);
  const UploadImageId = useSelector(
    (state) => state?.UploadFileIdReducer.fileId
  );
  const { userId } = useSelector(
    (state) => state.AuthenticationReducer.userData
  );
  const updateMode = useSelector((state) => state.updateModeReducer.updateMode);
  useEffect(() => {
    setFirstName(userProfileDetails?.profileDetails?.firstName);
    setLastName(userProfileDetails?.profileDetails?.lastName);
    setEmail(userProfileDetails?.profileDetails?.email);
    setImageUrl(userProfileDetails?.profileDetails?.imageUrl);
  }, [userProfileDetails]);
  const gitHubUrl = userProfileLinksDetails?.profileLinks?.gitHubUrl;
  const linkedInUrl = userProfileLinksDetails?.profileLinks?.linkedInUrl;
  const instaGramUrl = userProfileLinksDetails?.profileLinks?.instaGramUrl;
  const faceBookUrl = userProfileLinksDetails?.profileLinks?.faceBookUrl;
  const twitterUrl = userProfileLinksDetails?.profileLinks?.twitterUrl;
  const handleImage = (e) => {
    const image = e.target.files[0];
    const imageType = image?.type.split("/")[1];
    const imageSize = image?.size;
    if (
      imageType != "jpeg" &&
      imageType != "jpg" &&
      imageType != "jpeg" &&
      imageType != "gif"
    ) {
      toast.error("Please Upload PNG, JPG or GIF  Format", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#fff",
          color: "#252525",
          padding: "20px",
          fontWeight: "700",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderBottom: "3px solid #F17171",
          borderRadius: "3px",
          fontFamily: "Poppins, sans-serif",
        },
      });
    } else if (imageSize > 2000000) {
      toast.error("Please Upload File Size less then 2MB", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#fff",
          color: "#252525",
          padding: "20px",
          fontWeight: "700",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderBottom: "3px solid #F17171",
          borderRadius: "3px",
          fontFamily: "Poppins, sans-serif",
        },
      });
    } else {
      const promise = storage.createFile(conf.bucketId, ID.unique(), image);
      promise.then(
        function (response) {
          const fileId = response.$id;
          if (fileId) {
            const imgUrl = storage.getFilePreview(conf.bucketId, fileId);
            if (imgUrl?.href) {
              setImageUrl(imgUrl?.href);
              // setCreateDisable(false);
              setUploadFileId(fileId);
              dispatch(getFileId(fileId));
              setHideFileUpload(false);
            }
          }
        },
        function (error) {
          toast.error(error.message, {
            duration: 4000,
            position: "top-right",
            style: {
              background: "#fff",
              color: "#252525",
              padding: "20px",
              fontWeight: "700",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              borderBottom: "3px solid #F17171",
              borderRadius: "3px",
              fontFamily: "Poppins, sans-serif",
            },
          }); // Failure
        }
      );
    }
  };
  const deleteImage = () => {
    setImageUrl("");
    const promise = storage.deleteFile(conf.bucketId, UploadImageId);
    promise.then(
      function () {
        toast.success("Image Removed Successfully", {
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
        setHideFileUpload(true);
        dispatch(getFileId(""));
      },
      function (error) {
        toast.error(error.message, {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#fff",
            color: "#252525",
            padding: "20px",
            fontWeight: "700",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            borderBottom: "3px solid #F17171",
            borderRadius: "3px",
            fontFamily: "Poppins, sans-serif",
          },
        }); // Failure
      }
    );
  };
  const userLinksProfileDetails = async (e) => {
    let emailRegex = /^\S+@\S+\.\S+$/;
    let nameReg = /^[A-Za-z]*$/;
    if (
      !firstName ||
      !nameReg.test(firstName) ||
      firstName.trim().length > 50
    ) {
      setFirstNameErr(true);
      setLastNameErr(false);
      setEmailErr(false);
    } else if (
      !lastName ||
      !nameReg.test(lastName) ||
      lastName.trim().length > 50
    ) {
      setLastNameErr(true);
      setFirstNameErr(false);
      setEmailErr(false);
    } else if (!emailRegex.test(email)) {
      setEmailErr(true);
      setLastNameErr(false);
      setFirstNameErr(false);
    } else if (!imageUrl) {
      setImageErr(true);
      setEmailErr(false);
      setLastNameErr(false);
      setFirstNameErr(false);
    } else {
      dispatch(addUserDetails({ firstName, lastName, email, imageUrl }));

      try {
        if (updateMode === true) {
          const profileResponse = await databases.updateDocument(
            conf.databaseId,
            conf.collectionId,
            userId,
            {
              gitHubUrl,
              linkedInUrl,
              instaGramUrl,
              faceBookUrl,
              faceBookUrl,
              twitterUrl,
              firstName,
              lastName,
              email,
              imageUrl,
              UploadImageId,
            }
          );
          toast.success("Profile Updated Successfully", {
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
          NotificationAudio();
          navigate(`/preview/${profileResponse?.$id}`);
        } else {
          const profileResponse = await databases.createDocument(
            conf.databaseId,
            conf.collectionId,
            userId,
            {
              gitHubUrl,
              linkedInUrl,
              instaGramUrl,
              faceBookUrl,
              faceBookUrl,
              twitterUrl,
              firstName,
              lastName,
              email,
              imageUrl,
              UploadImageId,
            }
          );
          toast.success("Profile Created Successfully", {
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
          NotificationAudio();
          navigate(`/preview/${profileResponse?.$id}`);
        }
      } catch (error) {
        toast.error(error.message, {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#fff",
            color: "#252525",
            padding: "20px",
            fontWeight: "700",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            borderBottom: "3px solid #F17171",
            borderRadius: "3px",
            fontFamily: "Poppins, sans-serif",
          },
        });
      }
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2  lg:px-16 lg:py-6 p-4 font-poppins dark:bg-[#313E51]">
        <div className="p-6 rounded-lg card-shadow-custom dark:shadow-2xl">
          <div className="p-16">
            <img
              alt="profileDetails"
              src="images/test.svg"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="p-6 rounded-lg card-shadow-custom dark:bg-[#313E51] dark:shadow-2xl">
            <div className="mx-auto max-w-lg text-left">
              <h1 className="text-2xl font-bold sm:text-2xl dark:text-white">
                {t("commonTitle.DetailsTitle")}
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-200">
                {t("commonTitle.DetailsHeader")}
              </p>
            </div>
            <div className="mx-auto mb-0 mt-8 max-w-lg space-y-4">
              <div>
                <label
                  for="firstName"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  {t("linksTitle.First Name")}
                </label>
                <div className="relative my-2">
                  <input
                    type="text"
                    className="w-full rounded-lg  text-gray-700 border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder={t("linksTitle.Please Enter First Name")}
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <RiAccountPinCircleFill
                      size={20}
                      className="text-indigo-600 dark:text-sky-500"
                    />
                  </span>
                </div>
                {firstNameErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      {t("linksTitle.Please Enter First Name")}
                    </span>
                  </div>
                )}
                <label
                  for="lastName"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  {t("linksTitle.Last Name")}
                </label>
                <div className="relative my-2">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder={t("linksTitle.Please Enter Last Name")}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <RiAB
                      size={20}
                      className="text-indigo-600 dark:text-sky-500"
                    />
                  </span>
                </div>
                {lastNameErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      {t("linksTitle.Please Enter Last Name")}
                    </span>
                  </div>
                )}
                <label
                  for="email"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  {t("commonTitle.Email")}
                </label>
                <div className="relative my-2">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder={t("commonTitle.Please Enter Email")}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <RiMailOpenFill
                      size={20}
                      className="text-indigo-600 dark:text-sky-500"
                    />
                  </span>
                </div>
                {emailErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      {t("commonTitle.Please Enter Email")}
                    </span>
                  </div>
                )}
                <label
                  for="email"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  {t("linksTitle.Profile Picture")}
                </label>

                {hideFileUpload && !imageUrl && (
                  <div className="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-54 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:dark:bg-[#2c3b4f]  dark:bg-[#3C4D67]  hover:bg-gray-100 hover:border-indigo-600 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <RiUploadCloud2Fill
                          size={30}
                          className="text-indigo-600 dark:text-sky-500"
                        />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            {t("linksTitle.Click to upload")}
                          </span>{" "}
                          <span className="text-indigo-600 font-bold lg:text-xl text-base dark:text-sky-500">
                            {t("linksTitle.Profile Picture")}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {t("linksTitle.SVG, PNG, JPG or GIF (MAX-2MB)")}
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleImage}
                      />
                    </label>
                  </div>
                )}
                {imageUrl && (
                  <>
                    <div className="p-2 w-full">
                      <div className="relative flex flex-col items-center justify-center p-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 bg-opacity-50 dark:hover:bg-bray-800 dark:bg-slate-700  dark:border-white">
                        <img src={imageUrl} className="relative" />
                        <RiCloseFill
                          size={40}
                          className=" bg-indigo-600 text-white p-1 hover:bg-red-400 transition hover:scale-110  hover:cursor-pointer dark:text-white absolute top-6 right-6 rounded-lg"
                          onClick={() => deleteImage()}
                        />
                      </div>
                    </div>
                  </>
                )}
                {imageErr && !imageUrl && (
                  <div className="pt-2">
                    <span className="text-red-400 text-sm font-semibold">
                      {t("linksTitle.Please Upload Profile Image")}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  onClick={userLinksProfileDetails}
                >
                  <span className="text-sm font-medium">
                    {" "}
                    {t("linksTitle.Save")}{" "}
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
