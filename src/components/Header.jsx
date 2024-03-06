import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  RiLinksFill,
  RiAccountPinCircleLine,
  RiHomeOfficeLine,
} from "react-icons/ri";
import { RiAlignLeft, RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/AuthenticationSlice";
import conf, { account } from "../conf/config";
import { useTranslation } from "react-i18next";
const Header = ({ addDarkMode, darkMode }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const userDetails = useSelector(
    (state) => state.AuthenticationReducer.userData
  );
  const dispatch = useDispatch();
  const LogOut = async () => {
    await account.deleteSession("current");
    dispatch(logOut(null));
    setOpen(!open);
  };
  const toggleNavigation = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="bg-white  font-poppins dark:bg-[#2D3949]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link
                className="flex font-bold text-indigo-600 dark:text-white"
                to="/"
              >
                <RiLinksFill size={30} /> <span>SimpleShare</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-base">
                  <li>
                    <NavLink
                      className="flex gap-2 dark:text-white hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                      to="/"
                    >
                      <RiLinksFill
                        size={20}
                        className="hover:text-indigo-600"
                      />
                      {t("navigationTitle.Links")}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="flex gap-2 dark:text-white hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                      to="/profileDetails"
                    >
                      <RiAccountPinCircleLine size={20} />
                      {t("navigationTitle.Profile Details")}
                    </NavLink>
                  </li>
                  {userDetails?.userId === conf.adminUserId &&
                    userDetails?.providerUid === conf.adminUserEmail && (
                      <li>
                        <NavLink
                          className="flex gap-2 dark:text-white hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                          to="/dashboard"
                        >
                          <RiHomeOfficeLine size={20} />
                          {t("navigationTitle.DashBoard")}
                        </NavLink>
                      </li>
                    )}
                  <li>
                    <select
                      name="languageSelector"
                      id="languageSelector"
                      className="rounded-md bg-gray-100 dark:bg-[#3C4D67] dark:text-white px-2 py-2.5 text-sm "
                      onChange={(e) => {
                        i18n.changeLanguage(e.target.value);
                      }}
                      value={i18n.language}
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="fr">Spanish</option>
                      <option value="de">German</option>
                    </select>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {userDetails ? (
                  <NavLink
                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-200 hover:text-indigo-600"
                    to="/login"
                    onClick={LogOut}
                  >
                    {t("navigationTitle.LogOut")}
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-200 hover:text-indigo-600"
                      to="/login"
                    >
                      {t("commonTitle.logInTitle")}
                    </NavLink>

                    <div className="hidden sm:flex">
                      <NavLink
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-slate-200 hover:text-indigo-600"
                        to="/signup"
                      >
                        {t("commonTitle.signUpTitle")}
                      </NavLink>
                    </div>
                  </>
                )}
                <button
                  className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none text-base mt-2 md:mt-0"
                  onClick={() => {
                    addDarkMode();
                  }}
                >
                  {darkMode ? (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-sky-400/20"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className="fill-sky-500"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className="fill-sky-500"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 block md:hidden">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link
                className="flex font-bold text-indigo-600 dark:text-white"
                to="/"
              >
                <RiLinksFill size={30} /> <span>SimpleShare</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden z-50">
                {open === true ? (
                  <RiCloseLine
                    className="text-2xl dark:text-sky-500"
                    onClick={() => toggleNavigation()}
                  />
                ) : (
                  <RiAlignLeft
                    className="text-2xl dark:text-sky-500"
                    onClick={() => toggleNavigation()}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={
              open === true
                ? "md:hidden flex flex-col fixed right-0 top-0 w-full h-screen transition-all duration-1000 ease-in-out z-40"
                : "md:hidden flex flex-col fixed right-[-450px] top-0 w-full h-screen transition-all duration-1000 ease-in-out z-40"
            }
          >
            <nav aria-label="Global">
              <div className="w-full h-screen bg-indigo-600 flex flex-col justify-center items-center gap-4 dark:bg-[#3C4D67]">
                <NavLink
                  className="flex gap-2 hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                  to="/"
                  onClick={() => toggleNavigation()}
                >
                  <RiLinksFill size={20} className="hover:text-indigo-600" />
                  {t("navigationTitle.Links")}
                </NavLink>

                <NavLink
                  className="flex gap-2 hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                  to="/profileDetails"
                  onClick={() => toggleNavigation()}
                >
                  <RiAccountPinCircleLine size={20} />
                  {t("navigationTitle.Profile Details")}
                </NavLink>
                {userDetails?.userId === conf.adminUserId &&
                  userDetails?.providerUid === conf.adminUserEmail && (
                    <li>
                      <NavLink
                        className="flex gap-2 dark:text-white hover:bg-slate-200 hover:text-indigo-600 p-2 rounded"
                        to="/dashboard"
                      >
                        <RiHomeOfficeLine size={20} />
                        {t("navigationTitle.DashBoard")}
                      </NavLink>
                    </li>
                  )}

                <select
                  name="languageSelector"
                  id="languageSelector"
                  className="rounded-md bg-gray-100 dark:bg-[#3C4D67] dark:text-white px-2 py-2.5 text-sm "
                  onChange={(e) => {
                    i18n.changeLanguage(e.target.value);
                    toggleNavigation();
                  }}
                  value={i18n.language}
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="fr">Spanish</option>
                  <option value="de">German</option>
                </select>

                {userDetails ? (
                  <div className="p-2">
                    <NavLink
                      className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-200 hover:text-indigo-600"
                      to="/login"
                      onClick={() => {
                        LogOut();
                        toggleNavigation();
                      }}
                    >
                      {t("navigationTitle.LogOut")}
                    </NavLink>
                  </div>
                ) : (
                  <>
                    <div className="p-2">
                      <NavLink
                        className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-200 hover:text-indigo-600"
                        to="/login"
                        onClick={() => toggleNavigation()}
                      >
                        {t("commonTitle.logInTitle")}
                      </NavLink>
                    </div>
                    <div className="p-2">
                      <NavLink
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-slate-200 hover:text-indigo-600"
                        to="/signup"
                        onClick={() => toggleNavigation()}
                      >
                        {t("commonTitle.signUpTitle")}
                      </NavLink>
                    </div>
                  </>
                )}
                <button
                  className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none text-base mt-2 md:mt-0"
                  onClick={() => {
                    addDarkMode();
                  }}
                >
                  {darkMode ? (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-sky-400/20"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className="fill-sky-500"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className="fill-sky-500"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
