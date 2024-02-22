import React, { useState, useEffect } from "react";
import DashBoardCharts from "./DashBoardCharts";
import DashBoardTable from "./DashBoardTable";
import { FaUsers, FaIdCardClip } from "react-icons/fa6";
import conf, { databases } from "../conf/config";
const DashBoard = () => {
  const [users, setUsers] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await databases.listDocuments(
          conf.databaseId,
          conf.usersCollectionId
        );
        setUsers(resp?.total);
        setAllUsers(resp?.documents);
      } catch (error) {}
    };
    getUsers();
  }, []);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const resp = await databases.listDocuments(
          conf.databaseId,
          conf.collectionId
        );

        setProfiles(resp?.total);
      } catch (error) {}
    };
    getBlogs();
  }, []);
  return (
    <>
      <section className="text-gray-600 font-poppins dark:bg-slate-700">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6">
              <h1 className="sm:w-2/5 text-gray-900 font-bold font-montserrat text-3xl mb-2 sm:mb-0 dark:text-white">
                DashBoard
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="py-6 sm:mb-0 mb-6 card-shadow-custom rounded-lg flex flex-wrap gap-2  items-center flex-col">
              <div className="">
                <FaUsers
                  size={50}
                  className="text-indigo-600 hover:text-green-400 hover:cursor-pointer"
                />
              </div>
              <h2 className="text-6xl  font-bold font-montserrat text-gray-900 dark:text-white capitalize">
                {users}
              </h2>

              <p className="text-xl font-bold leading-relaxed  text-gray-600  dark:text-gray-300 capitalize">
                Total Users
              </p>
            </div>
            <div className="py-6 sm:mb-0 mb-6 card-shadow-custom rounded-lg flex flex-wrap gap-2  items-center flex-col">
              <div className="">
                <FaIdCardClip
                  size={50}
                  className="text-slate-400  hover:text-green-400 hover:cursor-pointer"
                />
              </div>
              <h2 className="text-6xl font-bold font-montserrat text-gray-900 dark:text-white capitalize">
                {profiles}
              </h2>

              <p className="text-xl font-bold leading-relaxed text-gray-600 dark:text-gray-300 capitalize">
                Total Profiles
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col pt-6">
            <h1 className="sm:w-2/5 text-gray-900 font-bold font-montserrat text-3xl  sm:mb-0 dark:text-white">
              Users Details
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <DashBoardCharts users={users} profiles={profiles} />
            <DashBoardTable users={allUsers} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
