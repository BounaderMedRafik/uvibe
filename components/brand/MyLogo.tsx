import React from "react";

const MyLogo = () => {
  return (
    <div>
      <div className="block dark:hidden">
        <img className=" md:w-8 w-7" src="/DarkU-RedTriangle.svg" alt="" />
      </div>
      <div className=" hidden dark:block">
        <img className=" md:w-8 w-7" src="/WhiteU-RedTriangle.svg" alt="" />
      </div>
    </div>
  );
};

export default MyLogo;
