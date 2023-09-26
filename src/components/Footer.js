import React, { useState, useEffect } from "react";
import Logo from "../components/icons_assets/Logo.svg";
import "../components/styles/Footer.css";


const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    function goTop() {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }
    return (
      <div>
          <div className="footer-background">
              <div className="footer-container">
                  <img src={ Logo } alt="Little Lemon logo" />
                  <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                  <div className="footer-content">
                      <div className="locations">
                          <h5>LOCATIONS</h5>
                          <ul>
                              <li>Hamburg</li>
                              <li>Düsseldorf</li>
                              <li>Dortmund</li>
                              <li>Bonn</li>
                              <li>Köln</li>
                          </ul>
                      </div>
                      <div className="opening-times">
                          <h5>OPENING TIMES</h5>
                          <ul>
                              <li>Mon - Wed: 10:30AM - 12:00AM</li>
                              <li>Fri: 12:00PM - 1:00AM</li>
                              <li>Sat - Sun: 10:30AM - 12:00AM</li>
                          </ul>
                      </div>
                      <div className="contact">
                          <h5>CONTACT US</h5>
                          <ul>
                              <li>EißendorfStraße 54, Hamburg 21185</li>
                              <li>Tel: +49 123 5647 8946</li>
                              <li>Email: info@littlelemon.com</li>
                          </ul>
                      </div>
              </div>
              <div className="copyright">
                  <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
              </div>
          </div>
          </div>
      </div>
    )
  }
  
  export default Footer;