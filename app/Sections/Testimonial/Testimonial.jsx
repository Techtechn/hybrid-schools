import React from "react";
import "./Testimonial.scss";
import Image from "next/image";
import quote from "../../assets/quote.svg";
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = () => {
  return (
    <>
      <div className="Testimonial" id="Testimonial">
        <div className="p-10 bg-white text-black">
          <div className="mt-5 text-center">
            <h1 className="text-3xl font-semibold text-black">Testimonials</h1>
          </div>
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/* text */}
              <div className="">
                <h1
                  className="text-[#F06021] font-extrabold"
                  style={{ fontSize: "3em" }}
                >
                  What Do People Have To Say About Us!
                </h1>
                <p className="mt-5 text-sm">
                  <span className="font-semibold">
                    {" "}
                    Hybrid Schools Innercity{" "}
                  </span>
                  is a leading educational institution dedicated to providing
                  high-quality education for students from kindergarten through
                  high school. <br />
                  <br />
                  With a rich history of academic excellence and a commitment to
                  fostering holistic development, Our School has been serving
                  the community for over 10 years.
                </p>
              </div>
              {/* card 1 */}
              <div className="">
                <div className="bg-white card text-black p-3 shadow-2xl">
                  <h2 className="mt-10 text-md font-semibold">Bright Dube</h2>
                  <div className="mt-5 text-right">
                    <ImQuotesLeft />
                  </div>
                  <p className="mt-5 text-sm">Student</p>
                  <p className="mt-5 text-sm">
                    This is by far the best private school I ever attended. It
                    has the best and most passionate teachers ever. They push
                    you to exceed your limit and to excel. I`m so blessed to
                    have matriculated under such prestigious teachers. It will
                    always be a second home.
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="">
                <div className="bg-white card text-black p-3 shadow-2xl">
                  <h2 className="mt-10 text-md font-semibold">Bright Dube</h2>
                  <div className="mt-5 text-right">
                    <ImQuotesLeft />
                  </div>
                  <p className="mt-5 text-sm">Student</p>
                  <p className="mt-5 text-sm">
                    This is by far the best private school I ever attended. It
                    has the best and most passionate teachers ever. They push
                    you to exceed your limit and to excel. I`m so blessed to
                    have matriculated under such prestigious teachers. It will
                    always be a second home.
                  </p>
                </div>
              </div>
              {/* card 3 */}
              <div className="">
                <div className="bg-white card text-black p-3 shadow-2xl">
                  <h2 className="mt-10 text-md font-semibold">Bright Dube</h2>
                  <div className="mt-5 text-right">
                    <ImQuotesLeft />
                  </div>
                  <p className="mt-5 text-sm">Student</p>
                  <p className="mt-5 text-sm">
                    This is by far the best private school I ever attended. It
                    has the best and most passionate teachers ever. They push
                    you to exceed your limit and to excel. I`m so blessed to
                    have matriculated under such prestigious teachers. It will
                    always be a second home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Apply Section */}
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/* card one */}
              <div className="">
                <div className="p-5 bg-[#F06021] border-r-c text-white  text-center">
                  <div className="">
                    <h2 className="text-2xl font-semibold">
                      Become A Student Of Our Institution
                    </h2>
                  </div>
                </div>
              </div>
              {/* card two */}
              <div className="">
                <div className="bg-white text-black shadow-2xl p-5 rounded-3xl">
                  <h4 className="text-lg text-[#F06021] text-center">
                    Community Engagement
                  </h4>
                  <p className="mt-5 text-sm">
                    We value community engagement and believe in fostering
                    strong partnerships with parents, guardians, and the wider
                    community. We encourage open communication and active
                    involvement of parents in their child`s education through
                    regular parent-teacher meetings, workshops, and volunteering
                    opportunities. <br /> <br />
                    We also organize community events, educational seminars, and
                    social initiatives to contribute positively to society.
                  </p>
                </div>
              </div>
              {/* card three */}
              <div className="">
                <div className="bg-white text-black shadow-2xl p-5 rounded-3xl">
                  <h4 className="text-lg text-[#F06021] text-center">
                    School`s Values
                  </h4>
                  <p className="mt-5 text-sm">
                    <span className="text-[#FFA500]">Excellence.</span>
                    We strive for excellence in all aspects of education. We
                    encourage our students to set high standards for themselves
                    and continuously push their boundaries to achieve their full
                    potential. <br />
                    <span className="text-[#FFA500]">Integrity. </span>
                    We value honesty, trustworthiness, and ethical conduct. We
                    foster an environment where integrity is upheld, promoting
                    responsible behavior and integrity in academic pursuits,
                    relationships, and personal choices.
                    <br />
                    <span className="text-[#FFA500]">Respect.</span>
                    We cultivate an atmosphere of mutual respect and
                    appreciation for diverse perspectives, cultures, and
                    backgrounds. We encourage empathy, open-mindedness, and
                    acceptance, creating a welcoming and inclusive community.{" "}
                    <br />
                    <span className="text-[#FFA500]">Collaboration. </span>
                    We believe in the power of collaboration and teamwork. We
                    encourage students to work together, respecting each other`s
                    ideas and contributions, to achieve shared goals and solve
                    problems collectively. <br />
                    <span className="text-[#FFA500]">
                      Lifelong Learning & Continuous Improvement.{" "}
                    </span>
                    We foster a love for learning and promote a growth mindset.
                    We encourage intellectual curiosity, critical thinking, and
                    a thirst for knowledge that extends beyond the classroom,
                    nurturing lifelong learners.
                  </p>
                </div>
              </div>
              {/* card four */}
              <div className="">
                <div className="bg-white text-black shadow-2xl p-5 rounded-3xl">
                  <h4 className="text-lg text-[#F06021] text-center">
                    Accreditations and Affiliations
                  </h4>
                  <p className="mt-5 text-sm">
                    <span className="font-bold">Hybrid Schools Innercity</span>
                    is accredited by the Gauteng Department of Education and is
                    incorporated as a Non-Profit Organisation with a vision of
                    contributing to bridging the persistent socioeconomic gap in
                    education for disadvantaged parents and learners from
                    neighboring communities where many children fall out of the
                    automatic acceptance criteria of the public education system
                    due to being over-age or sometimes due to financial
                    constraints and other challenges. <br /> <br />
                    These accreditations and affiliations validate our
                    commitment to maintaining high educational standards and
                    following best practices in the field of education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
