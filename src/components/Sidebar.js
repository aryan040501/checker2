import React from "react";

function Sidebar() {
  return (
    <div class="container border border-3">
      <div class="d-flex justify-content-center text-dark fs-5 f5-bolder">
        Filters
      </div>
      <form class="d-flex flex-column" role="search">
        <label class="form-label text-dark f2-bolder">Category</label>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <br />
        <label class="form-label text-dark f2-bolder">Location</label>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <br />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Work From Home
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
          Part Time
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
          Full Time
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
