import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="row">
          <div class="footer-col">
            <h4>Know Us</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Payment Terms</a>
              </li>
              <li>
                <a href="#">Security of Data</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>office Address</h4>
            <ul>
              <li>
                <a href="#">Hsr Layout,</a>
              </li>
              <li>
                <a href="#">22nd Main road,</a>
              </li>
              <li>
                <a href="#">Banglore,</a>
              </li>
              <li>
                <a href="#">560102</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact With Us</h4>
            <ul>
              <li>
                <a href="#">Number:+91 629 579 5984</a>
              </li>
              <li>
                <a href="#">Email:club.proyouth@gmail.app</a>
              </li>
              <div class="social-links">
                <li>
                  <a href="#">
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FaFacebookF />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
