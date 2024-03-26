import PricingCard from "@/app/Components/PricingCard/PricingCard";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

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
        <div className="mt-10">
          <div className="p-3 mt-10 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <div>
                <h6 className="font-bold text-lg text-center text-black">
                  <span className="text-[#F06021]">School</span> Uniform
                </h6>
                <p className="mt-5 font-extralight text-sm text-black">
                  At our school, we believe in the importance of a school
                  uniform as it fosters a sense of identity, unity, and equality
                  among our students. The school uniform serves as a visual
                  representation of our school community and promotes a sense of
                  belonging and pride. It eliminates distractions related to
                  clothing choices and promotes a focused and inclusive learning
                  environment. <br /> <br />
                  Our school uniform also instills a sense of discipline,
                  professionalism, and respect for rules and regulations. By
                  wearing the same attire, students are able to express
                  themselves based on their character, achievements, and
                  contributions rather than their outward appearance. We believe
                  that a school uniform contributes to a positive school culture
                  and prepares students for their future roles in society where
                  appropriate dress and presentation are often expected.
                </p>
                <div className="text-right">
                  <div className="mt-5">
                    <button className="p-3 text-[#F06021] border border-1 border-[#F06021] rounded-2xl">
                      School Uniform
                    </button>
                  </div>
                  <div className="mt-5">
                    <button className="p-3 text-[#F06021] border border-1 border-[#F06021] rounded-2xl">
                      School Uniform
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl flex justify-center">
                  <ImQuotesLeft />
                </h1>
                <p className="mt-5 text-md font-light">
                  The roots of education are bitter, but the fruit is sweet.
                </p>
              </div>
              <div className="mt-10 p-5">
                <div className="bg-white shadow-2xl rounded-lg text-center pt-10 p-5">
                  <h2 className="text-3xl text-black">Application Form</h2>
                  <div className="mt-10">
                    <div className="">
                      <button className="p-5 border border-1 border-[#191970] text-[#191970] rounded-2xl">
                        Online Application Form
                      </button>
                    </div>

                    <div className="mt-5 mb-10">
                      <button className="p-5 border border-1 border-[#191970] text-[#191970] rounded-2xl">
                        Download Application Form for All Grades
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
