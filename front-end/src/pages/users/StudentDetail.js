import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCollapse from "react-collapsed";
import { useSelector } from "react-redux";
import student from "../../service/student";
import { useNavigate } from "react-router-dom";

const StudentDetailPage = () => {
    const navigate= useNavigate();
  const currentUser = useSelector((state) => state.user);
  const [userStudent, setStudent] = useState({});
  const [post, setPost] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const param = useParams();

  // console.log("user student"+JSON.stringify(userStudent));
  useEffect(() => {
    if (param.id) {
      //console.log("current user id"+param.id);
      student
        .findById(param.id)
        .then((resp) => {
          setStudent(resp.data);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handlePost = (e) => {
    e.preventDefault();

    if (param?.id) {
      const newPost = { comment: post, commenter: param.username };
      student
        .postComment(newPost, param.id)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    navigate("/home")
    
  };

  if (!isLoaded) {
    return (
      <div className="container mt-5">
        <div>Loading...</div>
      </div>
    );
  } else if (isLoaded) {
    return (
      <div className="container">
        <div className="pt-5">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-6">
                  <h3>
                    <u>Student Details:</u>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* we are adding functionality here */}

              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Major</th>
                    <th scope="col">City</th>
                    <th scope="col">Street</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{userStudent.firstName ?? ""}</th>
                    <td> {userStudent.lastName ?? ""}</td>
                    <td>{userStudent.email ?? ""}</td>
                    <td>{userStudent.major ?? ""}</td>
                    <td>{userStudent.address.city ?? ""}</td>
                    <td>{userStudent.address.street ?? ""}</td>
                    <td> {userStudent.address.state ?? ""}</td>
                    <td>{userStudent.address.zip ?? ""}</td>
                  </tr>
                </tbody>
              </table>

              {/* we are adding functionality here */}
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <h3>
                    <u>Faculty Comments:</u>
                  </h3>
                </div>
                <div className="col-3">
                  <button {...getToggleProps()} className="btn btn-info">
                    {isExpanded ? "Hide comment" : "Write comment"}
                  </button>
                </div>
                <br />
                <form>
                  <div {...getCollapseProps()} className="mt-2">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            onChange={(e) => setPost(e.target.value)}
                            className="form-control"
                          ></textarea>
                          <label htmlFor="">Comments</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {isExpanded ? (
                        <button
                          onClick={(e) => {
                            handlePost(e);
                          }}
                          className="btn btn-success mt-2"
                        >
                          Add
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  {userStudent.student.comments.map((item, ind) => (
                    <div className="card-header mb-2" key={item.id ?? ""}>
                      <h6>
                        <u>{item.commenter ?? ""}</u>
                      </h6>
                      <span>{item.comment ?? ""}</span>
                      <br />
                      <span>{item.postTime ?? ""}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { StudentDetailPage };
