import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SittingLady from "../../media/sittinglady.png";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#010517" }}>
        <Navbar />
      </div>
      <div className="content-container">
        <div className="written-content-container">
          <h1>
            Get in touch with<br></br> ProYouth Club<br></br> today!
          </h1>
          <p>
            Our team is always happy to hear from young professionals and answer
            any questions you may have about our programs, courses, and career
            development services. Whether you're looking to enroll in a course,
            apply for an internship, or just want to say hello, we're here for
            you.<br></br>
            <br></br> You can contact us by filling out the contact form on our
            website or by sending an email to our support team at{" "}
            <span>support@proyouth.club.</span> If you prefer to speak to us
            over the phone, you can give us a call at{" "}
            <span>+91 6295795984,</span> and we'll be happy to assist you.
            <br></br>
            <br></br> If you're in Bangalore, you can even drop by our office
            and say hello to our amazing team. We're located at{" "}
            <span>22nd main road, Bangalore - 560102.</span> We're a friendly
            bunch, so don't be shy - come on down and let's chat over a cup of
            filter coffee!
            <br></br>
            <br></br> Thank you for considering ProYouth Club as your partner in
            professional development. We look forward to hearing from you and
            helping you achieve your career goals.
          </p>
        </div>
        <div className="image-container">
          <img src={SittingLady} alt="Sitting Lady" />
        </div>
      </div>

      <hr style={{ margin: "2rem 0" }} />
      <h1 className="contact-form-header">Get in Touch!</h1>
      <div className="contactus-form-container">
        <form>
          <div className="form-item">
            <label>Full Name</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Phone Number</label>
            <input type="number" />
          </div>
          <div className="form-item">
            <label>Enter Email Address</label>
            <input type="email" />
          </div>
          <div className="form-item">
            <label>Student/Professional</label>
            <select>
              <option value="">Please Select</option>
              <option value="Student">Student</option>
              <option value="Proffesional">Professional</option>
            </select>
          </div>
          <div className="button">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
