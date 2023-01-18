import React from "react";

function ApplicationTable() {
  const data = [
    {
      name: "techbud",
      role: "full stack",
      apply_by: "12th December 2022",
      data2: "2",
      status: "Pending",
    },
    // {
    //   name: "techbud",
    //   role: "full stack",
    //   apply_by: "12th December 2022",
    //   data2: "2",
    //   status: "Pending",
    // },
    // {
    //   name: "techbud",
    //   role: "full stack",
    //   apply_by: "12th December 2022",
    //   data2: "2",
    //   status: "Pending",
    // },
    // {
    //   name: "techbud",
    //   role: "full stack",
    //   apply_by: "12th December 2022",
    //   data2: "2",
    //   status: "Pending",
    // },
    // {
    //   name: "techbud",
    //   role: "full stack",
    //   apply_by: "12th December 2022",
    //   data2: "2",
    //   status: "Pending",
    // },
    // {
    //   name: "techbud",
    //   role: "full stack",
    //   apply_by: "12th December 2022",
    //   data2: "2",
    //   status: "Pending",
    // },
  ];
  return (
    <div>
      <br />
      <center>
        <h3 class="fw-bolder text-dark">My Applications</h3>
      </center>
      <br />
      <br />
      {data.length === 0 ? (
        <>
          <div class="container">
            We have sent your profile to recruiters according to your profile.
            <br />
            <br /> You can also apply to some open jobs.
            <br />
            <center>
              <button class="btn btn-sm btn-primary">Check Jobs</button>
            </center>
            <br />
          </div>
        </>
      ) : (
        <div class="px-5">
          <table class="table table-striped px-5 py-2">
            <thead>
              <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Role</th>
                <th scope="col">Application Date</th>
                <th scope="col">Number of Applicants</th>
                <th scope="col">Application Status</th>
              </tr>
            </thead>
            <br />
            <tbody>
              {data.map((datas) => (
                <tr>
                  <td class="py-4">{datas.name}</td>
                  <td class="py-4">{datas.role}</td>
                  <td class="py-4">{datas.apply_by}</td>
                  <td class="py-4">{datas.data2}</td>
                  <td class="py-4">
                    <h5>
                      <span class="badge bg-primary">{datas.status}</span>
                    </h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      )}
    </div>
  );
}

export default ApplicationTable;
