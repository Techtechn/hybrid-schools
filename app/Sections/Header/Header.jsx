import React from "react";
import "./Header.scss";
import HeaderCard from "@/app/Components/HeaderCard/HeaderCard";

const Header = () => {
  return (
    <div className="Header">
      <div className="p-10 mt-20">
        <div className="lg:px-6 py-32">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* Text */}
            <div className="">
              <h1 className="text-3xl text-white font-bold">
                You Are Welcomed!
              </h1>
              <h3 className="text-xl mt-5 text-[#FFA500] font-bold">
                Hybrid Schools Innercity
              </h3>
              <p className="text-sm text-white mt-5">
                We are a private, co-educational, day school serving from
                Pre-School, Primary School and High School students in grades R
                to grade 12. With an aim to educate leaders of character who
                will value and improve the world they inherit through the
                positive impacts we bring to both our staff and students. we
                also like to think of ourselves as A community with high
                expectation and high academic achievement.
              </p>
              {/* TODO: Fixed this button */}
              <button className="mt-5 bg-white text-[#FFA500] p-5">
                Apply
              </button>
            </div>
            {/* Card */}
          </div>
          <div className="">
            <div className="text-center space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 m-1">
              <div className=""></div>
              <HeaderCard
                title="Community Engagement"
                text="Schools are often at the heart of local communities, and working with them can help we establish a strong presence within the community. This leads to increased brand awareness, positive community relationships, and potential opportunities for further engagement.
                "
              />
              <HeaderCard
                title="Education"
                text="A good education foundation will help our learners hone their communication skills by learning how to read, write, speak, and listen. Education develops critical thinking. This is vital in teaching a person how to use logic when making decisions and interacting with people.s"
              />
              <HeaderCard
                title="Educational Impact"
                text="Primary and High Schools are key institutions for shaping young minds and providing education. By collaborating with Our schools, you have an opportunity to make a positive impact on students' learning experiences and contribute to their academic development."
              />
              <HeaderCard
                title="Future Workforce Development"
                text="By engaging with Our schools, you will be able to contribute to the development of future talent and the workforce. This can involve activities such as career fairs, internships, mentoring programs, or skills workshops, which help prepare students for future career opportunities."
              />
              {/* Last Card */}
              <div className="p-5 bg-[#F06021] text-center m-1 rounded-lg">
                <h2 className="text-lg font-bold text-white">
                  Become A Student Of Our Institution
                </h2>
                <button className="mt-5 rounded-2xl p-2 border border-black text-white">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
