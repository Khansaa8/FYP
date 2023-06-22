import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-1 px-4 font-poppins font-semibold animate-pulse text-[18px] text-gradient  border-sky-500 rounded-full border-solid border-2 ${styles}`}>
    Sign Out
  </button>
);

export default Button;