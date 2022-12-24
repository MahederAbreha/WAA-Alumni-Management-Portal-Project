import React from "react";
import { useState } from "react";
import job from "../../service/job";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const JobsDetailPage = () => {
  const param = useParams();
  const [jobState, setJobState] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const ApplyJob = ()=>{
    console.log("Sucessfully Applied");
    navigate("/applyJob");
  }

  useEffect(() => {
    if (param.id) {
      job
        .findById(param.id)
        .then((resp) => {
          setJobState(resp.data);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="container mt-5">
      {/* we are adding functionality here */}
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Benefit</th>
            <th scope="col">Description</th>
            <th scope="col">Posted</th>
            <th scope="col">Salary</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{jobState.company}</th>
            <td> {jobState.states}</td>
            <td>{jobState.city}</td>
            <td>{jobState.benefit}</td>
            <td>{jobState.description}</td>
            <td>{jobState.posted}</td>
            <td> {jobState.salary}</td>
            <td>{jobState.title}</td>
          </tr>
        </tbody>
      </table>

      {/* we are adding functionality here */}
      <div> <button onClick={ApplyJob}>Apply</button></div>
    </div>
  );
};

export { JobsDetailPage };
