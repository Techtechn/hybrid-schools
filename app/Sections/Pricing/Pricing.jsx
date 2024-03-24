import PricingCard from "@/app/Components/PricingCard/PricingCard";
import React from "react";

const Pricing = () => {
  return (
    <div className="Pricing">
      <div className="p-10">
        <div className="p-1 mt-10 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
