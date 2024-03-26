import React from "react";

const Academic = () => {
  return (
    <div className="Academic bg-white text-white">
      <div className="p-10 mt-10 ">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <h4 className="text-black font-bold">
              <span className="text-[#F06021]">Academic</span> Programs
            </h4>
            <p className="mt-5 text-sm text-black" style={{ fontSize: "11px" }}>
              Our School offers a comprehensive curriculum aligned with national
              standards, covering a wide range of subjects including
              mathematics, science, language arts, social studies, and more. We
              emphasize a well-rounded education, incorporating arts, physical
              education, and technology to provide students with a balanced
              learning experience.
            </p>
            <p className="mt-5 text-sm text-black" style={{ fontSize: "11px" }}>
              Our dedicated and qualified faculty members employ innovative
              teaching methods and utilize modern educational resources to
              ensure effective learning outcomes.
            </p>
          </div>
          <div className="py-16">
            <div className="bg-white shadow-2xl p-4 rounded-2xl">
              <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <div className="">
                  <h6 className="font-bold text-black">Sports</h6>
                  <p className="text-black mt-5" style={{ fontSize: "11px" }}>
                    School sports play a crucial role in the overall development
                    of students, fostering physical fitness, teamwork,
                    discipline, and a sense of sportsmanship.
                  </p>
                  <p className="text-black mt-5" style={{ fontSize: "11px" }}>
                    Our school places great emphasis on sports and offers a wide
                    range of athletic opportunities for students. Traditional
                    team sports such as;
                  </p>
                  <ul className="mt-5 text-black" style={{ fontSize: "11px" }}>
                    <li>Soccer</li>
                    <li>Netball </li>
                    <li>Volleyball</li>
                    <li>Athletics </li>
                  </ul>
                </div>
                <div className="">
                  <p className="text-black" style={{ fontSize: "11px" }}>
                    Our sports program caters to diverse interests and
                    abilities. Through regular training sessions, competitive
                    matches, and participation in inter-school tournaments,
                    students have the chance to showcase their skills and grow
                    both as athletes and individuals.
                  </p>
                  <p className="text-black mt-5" style={{ fontSize: "11px" }}>
                    We believe that involvement in sports not only promotes
                    physical well-being but also teaches invaluable life lessons
                    such as resilience, determination, leadership, and the
                    ability to work collaboratively towards a common goal. At
                    our school, we are proud to provide a supportive and
                    inclusive sports environment that instills a lifelong
                    appreciation for health, fitness, and the pursuit of
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
