import React from "react";

function Sidebar(props) {
  return (
    <div class="container border border-3">
      <div class="d-flex justify-content-center text-dark fs-5 f5-bolder mt-3">
        Filters
      </div>
      <form class="d-flex flex-column" role="search">
        <label class="form-label text-dark f2-bolder">Company</label>
        <input
          class="form-control me-2 text-dark"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.company}
          onChange={(e)=>{props.setCompany(e.target.value)}}
        />
        <br />
        <label class="form-label text-dark f2-bolder">Job Role</label>
        <input
          class="form-control me-2 text-dark"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.jobRole}
          onChange={(e)=>{props.setJobRole(e.target.value)}}
        />
        <br />
        <label class="form-label text-dark f2-bolder">Skills</label>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.skills}
          onChange={(e)=>{props.setSkills(e.target.value)}}
        />
        <br/>
        <label class="form-label text-dark f2-bolder">Location</label>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.location}
          onChange={(e)=>{props.setLocation(e.target.value)}}
        />
        <br/>
      </form>
      <br />
      {/* <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Senior
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label class="form-check-label" for="flexCheckChecked">
          Experienced
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked1"
        />
        <label class="form-check-label" for="flexCheckChecked1">
          Entry Level
        </label>
      </div> */}
    </div>
  );
}

export default Sidebar;
