import React from "react";
import Image from "next/image";
import PillOne from "../../assets/contact-pill-1.jpg";
import PillTwo from "../../assets/contact-pill-2.jpg";
import { ImQuotesLeft } from "react-icons/im";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="p-10">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* Image */}
          <div className="">
            <div className="flex justify-around" style={{ gap: "-5px" }}>
              <Image
                className="py-8"
                src={PillOne}
                alt="Pill Image"
                style={{ width: "150px" }}
              />
              <Image
                src={PillTwo}
                alt="Pill Image"
                style={{ width: "150px" }}
              />
            </div>

            <div className="mt-5">
              <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <div className="">
                  <h6 className="text-black font-semibold">
                    <span className="text-[#F06021]">Operational</span> Times
                  </h6>
                  <p className="mt-5 flex justify-between text-black">
                    <span>06h30 to 17h30</span> <span>Monday</span>
                  </p>
                  <p className="mt-5 flex justify-between text-black">
                    <span>06h30 to 17h30</span> <span>Tuesday</span>
                  </p>
                  <p className="mt-5 flex justify-between text-black">
                    <span>06h30 to 17h30</span> <span>Wednesday</span>
                  </p>
                  <p className="mt-5 flex justify-between text-black">
                    <span>06h30 to 17h30</span> <span>Thursday</span>
                  </p>
                  <p className="mt-5 flex justify-between text-black">
                    <span>06h30 to 17h30</span> <span>Friday</span>
                  </p>
                  <p className="mt-5 flex justify-between text-black">
                    <span>06h30 to 17h30</span> <span>Saturday</span>
                  </p>
                  <p className="mt-5 flex justify-between text-black">
                    <span className="text-red-600">Closed</span>{" "}
                    <span>Sunday</span>
                  </p>
                </div>
                <div className=""></div>
              </div>
              <div className="mt-5">
                <h6 className="font-bold text-black text-md">Address</h6>
                <p className="mt-3 text-black font-light text-sm">
                  112 Kerk street, Johannesburg, South Africa, 2001
                </p>
                <h6 className="font-bold text-black text-md mt-5">Address</h6>
                <p className="mt-3 text-black font-light text-sm">
                  (073) 510 5520/ (010) 065 2571/ (063) 829 0906
                </p>
                <h6 className="font-bold text-black text-md mt-5">Address</h6>
                <p className="mt-3 text-black font-light text-sm">
                  hybridshools@hotmail.com/ info@hybridschools.co.za
                </p>
              </div>
            </div>
          </div>
          {/* Test */}
          <div className="">
            <h4 className="text-[#191970] text-xl">Contact Us</h4>
            <h1 className="mt-5 text-[#F06021] text-3xl font-extrabold">
              Get In Touch With Us Today!
            </h1>
            <div className="mt-10 bg-[#191970] text-white rounded-2xl shadow-lg">
              <div className="p-10">
                <div className="mt-5">
                  <h2 className="text-xl font-bold text-white">Contact Us</h2>
                </div>
                <div className="mt-5">
                  <div className="mt-3">
                    <label className="w-full text-sm mb-2">Name</label>
                    <input
                      className="p-2 w-full border bg-transparent border-white"
                      type="text"
                      name=""
                    />
                  </div>
                  <div className="mt-3">
                    <label className="w-full text-sm mb-2">Phone</label>
                    <input
                      className="p-2 w-full border bg-transparent border-white"
                      type="text"
                      name=""
                    />
                  </div>
                  <div className="mt-3">
                    <label className="w-full text-sm mb-2">Email</label>
                    <input
                      className="p-2 w-full border bg-transparent border-white"
                      type="text"
                      name=""
                    />
                  </div>
                  <div className="mt-3">
                    <label className="w-full text-sm mb-2">Message</label>
                    <textarea
                      id=""
                      className="p-2 w-full border bg-transparent border-white"
                      cols="10"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button className="bg-white text-black p-3 rounded-lg">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center text-center">
          <div className="">
            <h1 className="text-3xl">
              <ImQuotesLeft />
            </h1>
            <h6 className="mt-3">
              The most important day of a <br /> person`s education is the first
              day <br /> of school, not Graduation Day.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
