import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { env } from "./config";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let users = await axios.get(
      `${env.api}/users`
    );
    setUsers(users.data);
    setLoading(false);
  };

  let userDelete = async (id) => {
    try{
      let del= await axios.delete(`${env.api}/users/${id}`);
      console.log(del)
      loadData();

      
    }
   catch(errors){

   }

  }

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/portal/createuser"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DateTable Examples
          </h6>
        </div>
      </div>
      {isLoading ? (
        <div className="mx-auto" style={{width: "200px"}}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div></div>
      ) : (
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>#SI</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>StartDate</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>#SI</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user, index) => {
                  return (
                    
                    <tr key={index}> 
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.position}</td>
                      <td>{user.office}</td>
                      <td>{user.age}</td>
                      <td>{user.startDate}</td>
                      <td>{user.salary}</td>
                      <td>
                        <Link
                          to={`/portal/users/${user.id}`}
                          className="btn btn-sm btn-primary mr-2"
                        >
                          View
                        </Link>
                        <Link
                          to={`/portal/user/edit/${user.id}`}
                          className="btn btn-sm btn-warning mr-2"
                        >
                          {" "}
                          Edit
                        </Link>

                        <button onClick={ () => {
                          userDelete(user.id)
                        }}
                        className="btn btn-sm btn-danger mr-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
