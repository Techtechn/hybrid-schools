import React from "react";
import "./AboutSection.scss";
import Image from "next/image";
import PillOne from "../../assets/about-pill-img-1.jpg";
import PillTwo from "../../assets/about-pill-img-2.jpg";
import quote from "../../assets/quote.svg";
import { ImQuotesLeft } from "react-icons/im";

const AboutSection = () => {
  return (
    <div className="AboutSection" id="AboutSection">
      <div className="p-5 bg-white text-black">
        <div className="mt-5">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            <div className="text-center">
              <p className=" quo text-[21] text-[#707070]">
                <Image src={quote} alt="quotation mark" width={50} />
                Education is our passport to the future, for tomorrow belongs to
                the people who prepare for it today.
              </p>
            </div>
            <div className=""></div>
          </div>
          <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {/* img */}
            <div className="flex justify-around" style={{ gap: "-5px" }}>
              <Image
                className="py-8"
                src={PillOne}
                alt="Pill Image"
                style={{ width: "100px", height: "200px" }}
              />
              <Image
                src={PillTwo}
                alt="Pill Image"
                style={{ width: "100px", height: "200px" }}
              />
            </div>

            {/* text-1 */}
            <div className="">
              {/* */}
              <div className="">
                {/* <div className="border border-b h-16 border-black"></div> */}
                <h2 className="text-[#191970]  ml-5 text-2xl">About Us</h2>
              </div>

              <p className="text-sm mt-5">
                Welcome to Hybrid Schools Innercity! We are a vibrant and
                inclusive educational institution dedicated to providing a
                nurturing and stimulating learning environment for all students.
                To empower our students with knowledge, skills, and values that
                will enable them to thrive in a rapidly changing world. <br />{" "}
                <br />
                At our school, we believe in fostering a love for learning and
                encouraging intellectual curiosity. We strive to create a safe
                and supportive atmosphere where students can explore their
                interests, challenge themselves, and reach their full potential.
                We value diversity and celebrate the unique backgrounds,
                perspectives, and talents that each student brings to our
                community.
              </p>
              <p className="mt-5 text-sm">
                Our dedicated team of highly qualified educators is committed to
                delivering a high-quality education that combines academic
                excellence with holistic development. We offer a comprehensive
                curriculum that integrates rigorous academics, critical
                thinking, creativity, and real-world application. Through
                innovative teaching methodologies, interactive classroom
                experiences, and hands-on learning opportunities, we aim to
                inspire a lifelong love for learning. <br /> <br />
                Beyond academics, we recognize the importance of nurturing the
                social, emotional, and physical well-being of our students. We
                provide a range of extracurricular activities, clubs, and sports
                programs that allow students to explore their passions, develop
                leadership skills, and build strong friendships. We believe in
                instilling values such as respect, integrity, compassion, and
                responsibility, preparing our students to become well-rounded
                global citizens.
              </p>
            </div>
            {/* text-2 */}
            <div className="">
              <p className="text-sm mt-5">
                Our school also emphasizes the importance of community
                engagement and encourages students to actively participate in
                service projects and initiatives. We believe that by
                contributing to the betterment of society, students develop
                empathy, a sense of social responsibility, and a deeper
                understanding of the world around them. <br /> <br />
                We value open communication and collaboration among students,
                parents, teachers, and the wider community. We actively involve
                parents in their child`s education through regular
                communication, parent-teacher meetings, and workshops. We also
                foster partnerships with local organizations and institutions to
                enrich the learning experiences of our students and provide them
                with a broader perspective.
              </p>
              <p className="mt-5 text-sm">
                We are proud of our school`s commitment to excellence, its
                nurturing environment, and its emphasis on holistic development.
                We look forward to partnering with you in your child`s
                educational journey, as we work together to shape their future
                and inspire them to become confident, compassionate, and
                successful individuals.
              </p>
              <div className="mt-5 text-center">
                <button
                  className="p-5 border border-b-2 border-[#191970] text-[#191970] rounded-xl"
                  style={{ borderBlockColor: "#191970" }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          {/* MISSION AND VISION SECTION */}
          <div className="p-3 mt-20 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {/* Text */}
            <div className="flex justify-around">
              <h2 className="text-4xl text-[#191970] font-extrabold">
                Let`s Build <br /> Something Great Together!
              </h2>
              {/* <div className="border border-b border-[#F06021]"></div> */}
            </div>
            {/* Card one */}
            <div className="">
              <div className="p-5 bg-white shadow-2xl rounded-2xl text-center">
                <h6 className="text-[#191970] font-semibold text-lg">
                  Mission
                </h6>
                <p className="mt-5 text-sm">
                  Our Mission is to create an environment that provides
                  meaningful opportunities for our learners contributing
                  positively towards a personal growth and community
                  development. <br /> <br />
                  To empower students with knowledge, skills, and values that
                  will enable them to become lifelong learners, critical
                  thinkers, and responsible global citizens. We aim to empower
                  students with knowledge, skills, and values that will enable
                  them to become lifelong learners, critical thinkers, and
                  responsible global citizens.{" "}
                </p>
              </div>
            </div>
            {/* Card Two */}
            <div className="">
              <div className="p-5 bg-white shadow-2xl rounded-2xl text-center">
                <h6 className="text-[#191970] font-semibold text-lg">Vision</h6>
                <p className="mt-5 text-sm">
                  Our Vision is to ensure that every learner acquires quality
                  education for a successful adult life.
                  <br /> <br />
                  To empower and inspire students to become compassionate,
                  innovative, and responsible global citizens. We strive to
                  create a dynamic and inclusive learning community that
                  nurtures the unique talents and potential of each individual.
                  Our commitment to excellence extends beyond academics, as we
                  emphasize character development, ethical values, and social
                  responsibility. We aim to shape future leaders who will make
                  positive contributions to the world.
                </p>
              </div>
            </div>
          </div>
          {/* Schools History Section */}
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <h6 className="text-center text-lg font-bold text-black">
                <span className="text-[#F06021]">School`s</span> History
              </h6>
            </div>
            <div className="p-3 mt-10 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {/* Text 1 */}
              <div className="">
                <p className="text-sm">
                  Hybrid Schools Innercity has a rich and storied history that
                  spans several decades. Founded with a vision to provide
                  quality education, it started as a small educational
                  institution with humble beginnings. Over the years, our school
                  has grown and evolved, adapting to the changing needs and
                  demands of the educational landscape. We have witnessed
                  countless students pass through our hallways, each leaving
                  their unique mark on our school`s legacy. <br /> <br />
                  Throughout our history, our school has been dedicated to
                  academic excellence, nurturing students` intellectual
                  curiosity, and fostering a love for learning. We take pride in
                  our committed and experienced educators who have played a
                  pivotal role in shaping young minds and preparing students for
                  a successful future. <br /> <br />
                  Along this journey, our school has continuously embraced
                  innovation, incorporating new technologies and teaching
                  methodologies to enhance the learning experience. We have
                  expanded our curriculum, offering a wide range of academic,
                  artistic, and extracurricular programs to cater to the diverse
                  interests and talents of our students. <br /> <br />
                  Our school`s history is also marked by a strong sense of
                  community and inclusivity. We value and celebrate the
                  diversity of our student body, promoting a safe and supportive
                  environment where everyone feels respected and valued.
                </p>
              </div>
              {/* Text 2 */}
              <div className="">
                <p className="text-sm">
                  Looking back on our accomplishments and milestones, we are
                  grateful for the dedicated staff, supportive families, and
                  passionate students who have contributed to our school`s
                  growth and success. As we continue to move forward, we remain
                  committed to upholding the values and traditions that have
                  shaped our school`s identity, while embracing new
                  opportunities for growth and development. <br /> <br />
                  Hybrid Schools Innercity`s history is a testament to our
                  unwavering commitment to providing a high-quality education
                  and preparing our students to excel in an ever-changing world.
                  We look forward to the future and the continued impact we will
                  make as an institution dedicated to shaping the lives of
                  generations to come.
                </p>
              </div>
              {/* Quote */}
              <div className="">
                <p className="">
                  <div className="mt-5 text-3xl text-right">
                    <ImQuotesLeft />
                  </div>
                  One day middle school will end and become high school and
                  after that it just becomes life. All those things you think
                  are important now won`t be anymore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
