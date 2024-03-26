import React from "react";
import "./News.scss";
import Image from "next/image";
import NewsImgOne from "../../assets/news-1.jpg";
import NewsImgTwo from "../../assets/news-2.jpg";
import NewsImgThree from "../../assets/news-3.jpg";
import school from "../../assets/school.jpg";

const News = () => {
  return (
    <div className="News bg-[#EAEAEA]">
      <div className="p-10">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="text-center">
            <h6 className="text-lg font-semibold text-black">
              <span className="text-lg font-semibold text-[#F06021]">
                Latest
              </span>{" "}
              News & Events{" "}
            </h6>
            <p className="mt-5 text-black">
              Take a look at our latest articles & resources
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="mt-10">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {/* Cards */}
            <div className="">
              <Image src={NewsImgOne} alt="Img" />
              <div className="mt-5">
                <button className="p-3 bg-white text-black rounded-xl">
                  Enrollment
                </button>
              </div>
              <div className="mt-5">
                <p className="text-sm text-black">
                  {" "}
                  Attention all parents and students! School Enrollment 2024 is
                  now open at our esteemed institution!{" "}
                </p>
              </div>
              <hr className="mt-5 mb-5 bg-black" style={{ height: "2px" }} />
              <div className="mt-5">
                <p className="text-right text-sm text-black">July 18 2023</p>
              </div>
            </div>
            {/* Cards */}
            <div className="">
              <Image src={NewsImgTwo} alt="Img" />
              <div className="mt-5">
                <button className="p-3 bg-white text-black rounded-xl">
                  Enrollment
                </button>
              </div>
              <div className="mt-5">
                <p className="text-sm text-black">
                  {" "}
                  Attention all parents and students! School Enrollment 2024 is
                  now open at our esteemed institution!{" "}
                </p>
              </div>
              <hr className="mt-5 mb-5 bg-black" style={{ height: "2px" }} />
              <div className="mt-5">
                <p className="text-right text-sm text-black">July 18 2023</p>
              </div>
            </div>
            {/* Cards */}
            <div className="">
              <Image src={NewsImgThree} alt="Img" />
              <div className="mt-5">
                <button className="p-3 bg-white text-black rounded-xl">
                  Enrollment
                </button>
              </div>
              <div className="mt-5">
                <p className="text-sm text-black">
                  {" "}
                  Attention all parents and students! School Enrollment 2024 is
                  now open at our esteemed institution!{" "}
                </p>
              </div>
              <hr className="mt-5 mb-5  bg-black" style={{ height: "2px" }} />
              <div className="mt-5">
                <p className="text-right text-sm text-black">July 18 2023</p>
              </div>
            </div>
          </div>
          {/* <div className="p-3 mt-10 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <h4 className="text-lg font-light text-black">Our Schhol</h4>
            </div>
            <div className="">
              <Image src={school} alt="Image" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default News;
