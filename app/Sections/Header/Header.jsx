import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="p-10">
        <div className="lg:px-6 py-32">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* Text */}
            <div className="first-block banner apply-image">
              <h1 className="text-3xl text-white font-bold">
                You Are Welcomed!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
