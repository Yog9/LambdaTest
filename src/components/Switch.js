import React from "react";

/**
 * Switch Component that renders a toggle
 * @returns JSX Element
 */
const Switch = ({ toggle, setToggle }) => {
  return (
    <>
      <div className="pr-5 text-slate-900 text-black">
        {" "}
        Custom Roles and Groups
      </div>
      <div
        className={
          "w-14 md:h-6 w-10 h-6 flex items-center bg-emerald-400 rounded-full cursor-pointer" +
          (toggle ? " bg-teal-400" : " bg-slate-300")
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={
            "bg-white md:w-5 md:h-5 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
            (toggle ? " transform translate-x-5" : " transform translate-2")
          }
        ></div>
      </div>
    </>
  );
};

export default Switch;
