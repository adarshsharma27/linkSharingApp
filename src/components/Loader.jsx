import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center py-4">
        <Bars
          height="150"
          width="150"
          radius="9"
          color="#4F46E5"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </>
  );
};

export default Loader;
