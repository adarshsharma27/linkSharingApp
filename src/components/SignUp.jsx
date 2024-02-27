import React, { useEffect, useState } from "react";
import {
  RiEyeOffFill,
  RiEyeFill,
  RiUser6Fill,
  RiRecordMailFill,
  RiLockPasswordFill,
} from "react-icons/ri";
import { ID, account } from "../conf/config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import conf, { databases } from "../conf/config";
import emailjs from "@emailjs/browser";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState("");
  const templateParams = {
    name,
    email,
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (password === "") {
      setShowPassword(false);
    }
  }, [password]);
  const SignUp = async () => {
    let emailRegex = /^\S+@\S+\.\S+$/;
    let nameReg = /^[A-Za-z]*$/;
    if (
      !name ||
      !nameReg.test(name) ||
      name.trim().length < 2 ||
      name.trim().length > 50
    ) {
      setNameErr(true);
      setEmailErr(false);
      setPasswordErr(false);
    } else if (!emailRegex.test(email)) {
      setEmailErr(true);
      setNameErr(false);
      setPasswordErr(false);
    } else if (!password || password.trim().length <= 8) {
      setPasswordErr(true);
      setNameErr(false);
      setEmailErr(false);
    } else {
      try {
        const response = await account.create(
          ID.unique(),
          email,
          password,
          name
        );
        setName("");
        setEmail("");
        setPassword("");
        toast.success("SignUp Successfully", {
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
        if (response) {
          await databases.createDocument(
            conf.databaseId,
            conf.usersCollectionId,
            response?.$id,
            {
              name,
              email,
            }
          );
        }
        navigate("/login");
        emailjs
          .send("service_d4wkm4p", "template_bgca1f6", templateParams, {
            publicKey: "b5RZu6ig2Ob4hSlXx",
          })
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
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2  lg:px-16 lg:py-4 p-4 font-poppins dark:bg-[#313E51]">
        <div className="rounded-lg ">
          <img
            alt="profileLinks"
            src="images/signup.avif"
            className="object-cover w-full lg:h-[450px] h-full rounded-lg "
          />
        </div>
        <div>
          <div className="p-6 rounded-lg card-shadow-custom dark:bg-[#313E51] dark:shadow-2xl">
            <div className="mx-auto max-w-lg text-left">
              <h1 className="text-2xl font-bold sm:text-2xl dark:text-white">
                Sign Up!
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-200">
                Welcome to SimpleShare!
              </p>
            </div>
            <div className="mx-auto mb-0 mt-4 max-w-lg space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Name
                </label>
                <div className="relative my-2">
                  <input
                    type="text"
                    className="w-full rounded-lg  text-gray-700 border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Please Enter Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <RiUser6Fill
                      size={20}
                      className="text-indigo-600 dark:text-white"
                    />
                  </span>
                </div>
                {nameErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-base font-semibold">
                      Please Enter Name
                    </span>
                  </div>
                )}
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Email
                </label>
                <div className="relative my-2">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Please Enter Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <RiRecordMailFill
                      size={20}
                      className="text-indigo-600 dark:text-white"
                    />
                  </span>
                </div>
                {emailErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-base font-semibold">
                      Please Enter Email
                    </span>
                  </div>
                )}
                <label
                  htmlFor="Password"
                  className="text-sm font-medium text-gray-600 dark:text-white"
                >
                  Password
                </label>
                <div className="relative my-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-lg border-gray-200 dark:bg-[#3C4D67] dark:text-white p-4 pe-12 text-sm shadow-md  outline-none focus:ring-1 focus:ring-indigo-600"
                    placeholder="Please Enter Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {!password && (
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <RiLockPasswordFill
                        size={20}
                        className="text-indigo-600 dark:text-white"
                      />
                    </span>
                  )}

                  {password && (
                    <span
                      className="absolute inset-y-0 end-0 grid place-content-center px-4 hover:cursor-pointer"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword == true ? (
                        <RiEyeOffFill
                          size={20}
                          className="text-indigo-600 dark:text-white"
                        />
                      ) : (
                        <RiEyeFill
                          size={20}
                          className="text-indigo-600 dark:text-white"
                        />
                      )}
                    </span>
                  )}
                </div>
                {passwordErr && (
                  <div className="pt-2">
                    <span className="text-red-400 text-base font-semibold">
                      Please Enter Password
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  onClick={SignUp}
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
