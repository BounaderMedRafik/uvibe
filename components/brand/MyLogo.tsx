import React from "react";

const MyLogo = ({ big }: { big: boolean }) => {
  return (
    <div>
      {!big ? (
        <>
          <div className="block dark:hidden">
            <img className=" md:w-8 w-7" src="/DarkU-RedTriangle.svg" alt="" />
          </div>
          <div className=" hidden dark:block">
            <img className=" md:w-8 w-7" src="/WhiteU-RedTriangle.svg" alt="" />
          </div>
        </>
      ) : (
        <>
          <div className=" dark:block hidden">
            <img className=" w-24 " src="/UVIBEWORK-WhiteText.svg" alt="" />
          </div>
          <div className=" dark:hidden block">
            <img className=" w-24 " src="/UVIBEWORK-BlackText.svg" alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default MyLogo;
