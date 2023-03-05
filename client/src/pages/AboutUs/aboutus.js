import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import TwoGirls from "../../media/twogirls.png";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <div style={{ backgroundColor: "#010517" }}>
        <Navbar />
      </div>
      <div className="content-container">
        <div className="written-content-container">
          <h1>Welcome to ProYouth Club</h1>
          <h3>
            The coolest bunch of professionals<br></br> this side of the
            equator!
          </h3>
          <p>
            We're based in Bangalore, the land of IT and filter coffee. Our team
            is made up of a bunch of super-talented individuals, who are
            passionate about empowering the youth to achieve greatness. We offer
            a ton of programs, courses, and career development services to help
            young folks build their skills and expand their knowledge. But wait,
            there's more! We also offer access to a whole range of side job and
            internship opportunities. Because let's face it, who doesn't love a
            bit of extra cash while getting hands-on experience? With us, you'll
            not only have access to the best guidance, resources, and
            opportunities, but you'll also have a ton of fun along the way. So
            come on down and join the ProYouth Club today - we guarantee you
            won't regret it!
          </p>
        </div>
        <div>
          <img src={TwoGirls} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
