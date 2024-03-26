import React from "react";
import Image from "next/image";
import Img from "../../assets/inst-4.jpg";
import Img2 from "../../assets/news-1.jpg";
import Img3 from "../../assets/news-2.jpg";
import Img4 from "../../assets/news-3.jpg";
import Img5 from "../../assets/inst-6.jpg";
import { ImQuotesLeft } from "react-icons/im";

const Institution = () => {
  return (
    <div className="Institution">
      <div className="p-10">
        <div className="p-3 mt-10 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {/* Images */}
          <div className="">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-3">
                <Image className="w-full h-64" src={Img3} alt="Ins" />
              </div>
              <div class="col-span-2">
                <Image src={Img} alt="Ins" />
              </div>
              <div class="row-span-2 col-span-2">
                <Image src={Img2} alt="Ins" />
              </div>
            </div>
          </div>
          {/* Text 1 */}
          <div className="">
            <div className="">
              <h1 className="text-3xl">
                <ImQuotesLeft />
              </h1>
              <p className="mt-5 text-lg text-black">
                Learn as much as you can while you are young, since life becomes
                too busy later.
              </p>
              <div className="mt-10">
                <p className="text-sm text-black font-light">
                  Our school institution is a respected and well-established
                  educational organization dedicated to providing high-quality
                  education to students. With a rich history and a strong
                  reputation for academic excellence, we have been shaping young
                  minds and preparing them for future success for many years.{" "}
                  <br /> <br />
                  Our institution prides itself on its experienced and dedicated
                  faculty who are passionate about teaching and guiding
                  students. We offer a comprehensive curriculum,
                  state-of-the-art facilities, and a supportive learning
                  environment that fosters the intellectual, social, and
                  emotional growth of our students.
                </p>
              </div>
            </div>
          </div>
          {/* Text 2 */}
          <div className="">
            <p className="text-sm text-black font-light">
              Through our commitment to innovation, inclusivity, and holistic
              development, we strive to empower our students to become
              confident, lifelong learners and responsible global citizens.
            </p>
            <div className="mt-10 text-center">
              <button className="text-[#191970] border border-[#191970] p-5 rounded-xl">
                Apply
              </button>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="mt-5">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {/* text  */}
            <div className="text-center">
              <h6 className="font-bold text-2xl text-black">
                <span className="text-[#F06021]">Our</span> Institution
              </h6>
            </div>
            {/* cards */}
            <div className="bg-white shadow-xl rounded-2xl p-3 text-center">
              <h3 className="mt-3 text-lg font-light text-[#F06021]">
                Pre School
              </h3>
              <p
                className="mt-5 text-sm font-extralight text-black text-left mb-5"
                style={{ fontSize: "11px" }}
              >
                Our preschool is a nurturing and engaging early childhood
                education program designed to provide a strong foundation for
                young learners. At our preschool, we understand the importance
                of early childhood development and strive to create a safe and
                stimulating environment where children can explore, discover,
                and grow. Our dedicated and caring teachers are trained in early
                childhood education and are passionate about fostering the
                social, emotional, cognitive, and physical development of each
                child.
              </p>
              <div className="mt-5 mb-5">
                <button className="bg-black text-white p-3 rounded-xl">
                  Apply
                </button>
              </div>
            </div>
            {/* cards */}
            <div className="bg-white shadow-xl rounded-2xl p-3 text-center">
              <h3 className="mt-3 text-lg font-light text-[#F06021]">
                Primary School
              </h3>
              <p
                className="mt-5 text-sm font-extralight text-black text-left mb-5"
                style={{ fontSize: "11px" }}
              >
                Our primary school is a vibrant and dynamic learning community
                dedicated to providing a solid educational foundation for
                students in their early years of schooling. With a curriculum
                that is both rigorous and engaging, we strive to instill a love
                for learning and foster intellectual curiosity among our
                students. Our experienced and passionate teachers create a
                nurturing and inclusive environment where every child feels
                valued and supported.
              </p>
              <div className="mt-5 mb-5">
                <button className="bg-black text-white p-3 rounded-xl">
                  Apply
                </button>
              </div>
            </div>
            {/* cards */}
            <div className="bg-white shadow-xl rounded-2xl p-3 text-center">
              <h3 className="mt-3 text-lg font-light text-[#F06021]">
                High School
              </h3>
              <p
                className="mt-5 text-sm font-extralight text-black text-left mb-5"
                style={{ fontSize: "11px" }}
              >
                Our high school is an exciting and transformative phase in a
                student`s academic journey. We provide a dynamic and supportive
                learning environment where students can further develop their
                knowledge, skills, and personal growth. With a comprehensive
                curriculum that encompasses a wide range of subjects, we prepare
                our students for higher education and future career paths. Our
                experienced and dedicated teachers foster a challenging yet
                nurturing atmosphere, encouraging critical thinking, independent
                inquiry, and a passion for lifelong learning.
              </p>
              <div className="mt-5 mb-5">
                <button className="bg-black text-white p-3 rounded-xl">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-5">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* Images */}
            <div className="">
              <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <Image className="mt-3 mb-3" src={Img} alt="img" />
                <Image className="mt-3 mb-3" src={Img5} alt="img" />
                <Image className="mt-3 mb-3" src={Img3} alt="img" />
                <Image className="mt-3 mb-3" src={Img4} alt="img" />
              </div>
            </div>
            {/* Text */}
            <div className="">
              <div className="text-center">
                <h6 className="font-bold text-2xl">
                  <span className="text-[#F06021]">Our</span> Institution
                </h6>
                <p
                  className="mt-5 text-sm text-black text-left font-light"
                  style={{ fontSize: "11px" }}
                >
                  We encourage you to through our dedicated gallery section
                  showcasing various images and moments from our school,
                  providing you with a live school gallery experience and
                  memories we keep dear to our heart. <br />
                  Here we provide a visual representation of our school
                  facilities, events, activities, and the vibrant community
                  within. <br />
                  By exploring our Gallery section, you will be able to get a
                  glimpse of our school`s environment, infrastructure,
                  classrooms, sports facilities, cultural events, and the
                  achievements of our students. It`s an excellent way to get a
                  feel for the vibrant atmosphere and the engaging experiences
                  our school has to offer.
                  <br />
                  We appreciate your interest and encourage you to connect with
                  our online platforms to discover more about our school and the
                  exciting happenings within our community.
                </p>
                <div className="mt-10 text-center">
                  <button className="text-[#191970] border border-[#191970] p-3 rounded-xl">
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institution;
