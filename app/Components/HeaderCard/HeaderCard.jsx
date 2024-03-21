import React from "react";

const HeaderCard = ({ title, text }) => {
  return (
    <div className="HeaderCard">
      <div className="p-3 bg-[#707070] border border-white text-center m-1 rounded-lg">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-sm mt-5 text-white">{text}</p>
      </div>
    </div>
  );
};

export default HeaderCard;
