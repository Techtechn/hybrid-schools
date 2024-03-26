import React from "react";
import Image from "next/image";
import Img from "../../assets/pill-image-3.png";
import { ImQuotesLeft } from "react-icons/im";

const Administration = () => {
  return (
    <div className="Administration">
      <div className="p-10">
        <div className="">
          {/* <div className="border border-b h-16 border-black"></div> */}
          <h2 className="text-[#191970]  ml-5 text-2xl">Administration</h2>
        </div>
        <div className="mt-5">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-[#F06021]">
                The Future Is Bright. <br /> Register Your Child Now.
              </h1>
            </div>
            {/* Details */}
            <div className="">
              <h6 className="text-xl font-bold text-black">
                <span className="text-[#F06021]">Ad</span>missions
              </h6>
              <p className="mt-5 text-sm font-light text-black">
                Our School welcomes students from diverse backgrounds and
                ensures equal opportunities for all. Our admissions process is
                transparent, and we consider each applicant based on their
                potential and willingness to learn. <br /> <br />
                We provide guidance and support to parents and students
                throughout the admissions process, assisting them in making
                informed decisions about their education.
              </p>
              <div className="text-center">
                <button className="mt-5 p-3 text-md text-[#191970]  bg-transparent outline border border-[#191970] rounded-2xl">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 mt-10 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="text-center">
            <div className="text-3xl text-black flex justify-center">
              <ImQuotesLeft />
            </div>
            <h2 className="mt-3 text-black">
              The roots of education are bitter, but the fruit is sweet.
            </h2>
          </div>
        </div>
        <div className="mt-5">
          <div className="p-3 mt-10 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {/* text-1 */}
            <div className="">
              <h6 className="text-black font-bold">
                <span className="text-[#F06021]">School</span> Fees
              </h6>
              <p className="mt-5 text-sm text-black">
                At our school, we believe in providing a high-quality education
                that prepares students for a successful future. As with any
                educational institution, there are costs associated with running
                our programs and maintaining our facilities to ensure an optimal
                learning environment. Our school fees are designed to cover
                these expenses and support the various resources and
                opportunities we provide to our students. <br /> <br />
                While specific fees may vary depending on grade level, programs,
                and additional services, we are committed to transparency and
                ensuring that our fees are reasonable and competitive within the
                educational landscape. We understand that investing in your
                child`s education is an important decision, and we strive to
                deliver value for the fees paid.
              </p>
            </div>
            {/* text-2 */}
            <div className="">
              <p className="mt-5 text-sm text-black">
                We encourage you to reach out to our admissions office for
                detailed information on school fees, including any available
                payment plans, scholarships, or financial aid options. We are
                dedicated to working with families to find a suitable solution
                that meets their financial needs while providing an enriching
                educational experience for their children.
              </p>
            </div>
            {/* img */}
            <div className="">
              <Image src={Img} alt="Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
