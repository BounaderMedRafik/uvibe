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
          <div className="">
            <img className=" w-96 " src="/UVIBEWORK-WhiteText.svg" alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default MyLogo;
