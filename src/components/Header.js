import React, { useEffect, useState } from "react";

function Header() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-gray">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/recruitEx.png" alt="logo" style={{ width: "200px" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="row collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
              <li class="nav-item me-5 mb-2">
                <div className="col">
                  {token ? (
                    <a href="/jobs">
                      <div className=" btn btn-sm btn-primary">Apply Now</div>
                    </a>
                  ) : (
                    <a href="/signup">
                      <div className=" btn btn-sm btn-primary">Apply Now</div>
                    </a>
                  )}
                </div>
              </li>
              <li class="nav-item">
                <div className="col">
                  <div className=" btn btn-sm btn-primary">Hire Now</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
