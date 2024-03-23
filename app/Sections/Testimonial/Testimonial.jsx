import React from "react";
import "./Testimonial.scss"
import Image from "next/image";
import quote from "../../assets/quote.svg"


const Testimonial = () => {
    return(
        <>
    <h1 className="test">Testimonials</h1>
    <div className="boxt">
        <h2 className="people">What Do <br /> People Have <br /> To Say  <br /> Us!</h2>
        <p>
            <bold>Hybrid Schools Innercity</bold> is a leading educational institution dedicated to providing 
            high_quality educatio for students from kindergarden through high school.
        </p>
        <p>
            With arich history of academic excellence and a commitment to fostering holistic development, our school has been serving
            the community for over 10 years.
        </p>
    </div>
    <div className="boxtt">
        <h2>Bright Dube <div ckassName="student">Student</div></h2>
        <p>
        <Image src={quote} alt="quotation mark" width={50} />
        This is by far the best private school i ever attendend. It has the best and most passionate teachers ever. They push you to exceed 
        your limits and excel. I'm so blessed to have matriculated under such prestigeous teachers. It will akways be a second home. 
        </p>
    </div>
    <div className="boxtt">
        <h2>Njabulo S.Nkosi <div ckassName="student">Parent</div></h2>
        <p>
        <Image src={quote} alt="quotation mark" width={50} />
       One of the best private schools situated at the heart of Johannesburg. You will definately not regret sending your child there.
        Impressive matric pass rate and administration.
        </p>
    </div>
    <div className="boxtt">
        <h2>Thandi Miya <div ckassName="student">Student</div></h2>
        <p>
        <Image src={quote} alt="quotation mark" width={50} />
        I am  a learner of the school and i can surely say the school provides a safe learning enviroment for its students.
        Another thing that i like is the efforts our teachers put in order for us to produce pleasing results. 
        </p>
    </div>
   
    </>
    )
}
export default Testimonial;