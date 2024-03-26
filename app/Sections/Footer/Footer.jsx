import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo_otc.png";
import Arrow from "../../assets/arrow.jpg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="p-5 bg-[#141243] text-white">
        <div className="space-y-2 lg:grid lg:grid-cols-5 lg:gap-x-6 lg:space-y-0">
          {/* Details */}
          <div className="">
            <div className="">
              <Image className="w-32" src={Logo} alt="Img" />
              <p className="text-white text-lg">Hybrid Schools Innercity</p>
              <p
                className="text-sm font-light text-white mt-5"
                style={{ fontSize: "10px" }}
              >
                We are a private, co-educational, day school serving from
                Pre-School, Primary School and High School students in grades R
                to grade 12. With an aim to educate leaders of character who
                will value and improve the world they inherit through the
                positive impacts we bring to both our staff and students. we
                also like to think of ourselves as A community with high
                expectation and high academic achievement.
              </p>
              <div className="mt-5">
                {/* <Image src={Arrow} alt="Arrow" /> */}
              </div>
            </div>
          </div>
          {/* Link */}
          <div className="py-32">
            <h6 className="font-bold text-white text-lg">School Project</h6>
            <ul className="text-sm text-white">
              <li className="mt-2">
                <Link href="/">Home</Link>
              </li>
              <li className="mt-2">
                <Link href="/">About Us</Link>
              </li>
              <li className="mt-2">
                <Link href="/">Administration</Link>
              </li>
              <li className="mt-2">
                <Link href="/">Institution</Link>
              </li>
            </ul>
          </div>
          {/* Link */}
          <div className="py-32">
            <h6 className="font-bold text-white text-lg">Academics</h6>
            <ul className="text-sm text-white">
              <li className="mt-2">
                <Link href="/">Sciences</Link>
              </li>
              <li className="mt-2">
                <Link href="/">Commercials</Link>
              </li>
              <li className="mt-2">
                <Link href="/">Humanities</Link>
              </li>
            </ul>
          </div>
          {/* Link */}
          <div className="py-32">
            <h6 className="font-bold text-white text-lg">Support</h6>
            <ul className="text-sm text-white">
              <li className="mt-2">
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li className="mt-2">
                <Link href="/">Latest News & Events</Link>
              </li>
              <li className="mt-2">
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Details */}
          <div className="py-32">
            <h1 className="text-white text-3xl font-extrabold">
              Stay Connect With Us!
            </h1>
            <p className="mt-5 text-sm text-white" style={{ fontSize: "11px" }}>
              Finding Interest In Us, Stay Connected With Us From Today By
              Signing Up To Receive All The Latest News, Promotions & Updates
            </p>
            <div className="mt-5">
              <input
                className="w-full p-1 bg-white rounded-xl text-sm outline"
                type="text"
                placeholder="Enter Valid Email"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0047AB] text-white p-5">
        <div className="flex justify-between">
          <p className="text-white">
            Designed by Outcloud © 2024/2025 | Copyright Hybrid Schools
            Innercity | All rights reserved.
          </p>
          <p className="text-white font-extrabold text-lg">OTC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
