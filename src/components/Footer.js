import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg-gray align-items-end">
      <br></br>
      <br></br>
      <div className="container">
        <div class="row">
          <div class="col d-flex justify-content-start">
            <img
              src="/RecruitEx.png"
              alt="logo"
              style={{ width: "200px", height: "60%" }}
            />
          </div>
          <div class="col d-flex justify-content-center">            
            <Link to="/blogs" className="text-dark">Blogs</Link>
          </div>
          <div class="col d-flex justify-content-end">
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
