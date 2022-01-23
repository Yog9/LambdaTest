import React from "react";

const Switch = ({ toggle, setToggle }) => {
  return (
    <>
      <div className="pr-5 text-slate-900 text-black">
        {" "}
        Custom Roles and Groups
      </div>
      <div
        className={
          "md:w-14 md:h-7 w-12 h-6 flex items-center bg-emerald-400 rounded-full cursor-pointer" +
          (toggle ? " bg-emerald-400" : " bg-slate-300")
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={
            "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
            (toggle ? " transform translate-x-6" : " transform translate-2")
          }
        ></div>
      </div>
    </>
  );
};

export default Switch;
