import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer class="bg-gray align-items-end">
      <br></br>
      <br></br>
      <div className="container">
        <div class="row">
          <div class="col-4 justify-content-start">
            <div class="row">
              <img
                src="/RecruitEx.png"
                alt="logo"
                style={{ width: "200px", height: "100%" }}
              />
            </div>
            <div class="row ms-1">
              <div class="col-1">
                <a href="https://www.instagram.com/recruitexindia/" class="text-dark">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div class="col-1">
                <a href="https://www.linkedin.com/company/recruitexindia/" class="text-dark">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div class="col-4 justify-content-center">
            <div class="row">
              <Link to="/blogs" className="text-dark">Blogs</Link>
            </div>
            <div class="row">
              <Link to="/terms-and-conditions" className="text-dark">Terms & Conditions</Link>
            </div>
            <div class="row">
              <Link to="/privacy-policy" className="text-dark">Privacy Policy</Link>
            </div>
          </div>
          <div class="col-4 justify-content-end">
            <div>
              careers@recruitex.in
              <br />
              Techzone IV, Noida
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </footer>
  );
}

export default Footer;
