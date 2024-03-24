import React from "react";

const PricingCard = () => {
  return (
    <div className="PricingCard">
      <div className="p-2 m-1 mt-5 text-center rounded-xl shadow-lg border border-[#F06021]">
        <div className="mt-10">
          <p className="text-sm text-[#F06021]">Grade R-1</p>
          <h2 className="mt-5 font-bold text-[#F06021]">R800.00</h2>
          <p className="text-sm mt-5 text-[#F06021]">Per months</p>
          <hr className="mt-5 mb-5 font-bold text-black" />
          <h6 className="mt-5 font-bold text-md">Payment Plan</h6>
          <div className="mt-5">
            <p className="flex justify-around text-[#F06021]">
              <span className="text-sm">TERMLY</span>{" "}
              <span className="font-bold">R2400.00</span>
            </p>
            <p className="flex justify-around mt-5 text-[#F06021]">
              <span className="text-sm">ANNUALLY</span>{" "}
              <span className="font-bold">R9600.00</span>
            </p>
            <hr className="mt-5 mb-5 font-bold text-black" />
            <h6 className="mt-5 font-semibold text-sm">
              Once of Payment (Before 28 February): 5% Discount
            </h6>
            <h2 className="mt-5 text-2xl font-bold text-[#F06021]">R9120.00</h2>
            <div className="mt-10 mb-10">
              <button className="bg-black text-white p-3 rounded-xl">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
