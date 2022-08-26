import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let use = await axios.get(
      "https://6305f395dde73c0f844f7176.mockapi.io/Smartphones"
    );
    console.log(use)
    setUsers(use.data);
    setLoading(false);
  };





  let phoneDelete = async (id) => {
    try{
      let del= await axios.delete(`https://6305f395dde73c0f844f7176.mockapi.io/Smartphones/${id}`);
      console.log(del)
      loadData();

      
    }
   catch(errors){

   }

  }

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to="/portal/createproduct"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create Product
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
                  <th>Model</th>
                  <th>Brand</th>
                  <th>RAM</th>
                  <th>Processor</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>#SI</th>
                  <th>Model</th>
                  <th>Brand</th>
                  <th>RAM</th>
                  <th>Processor</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                { users.map((phone, index) => {
                  return (
                    
                    <tr key={index}> 
                      <td>{index + 1}</td>
                      <td>{phone.model}</td>
                      <td>{phone.brand}</td>
                      <td>{phone.ram}</td>
                      <td>{phone.processor}</td>
                      <td>{phone.price}</td>
                  
                      <td>
                        <Link
                          to={`/portal/products/${phone.id}`}
                          className="btn btn-sm btn-primary mr-2"
                        >
                          View
                        </Link>
                        <Link
                          to={`/portal/product/edit/${phone.id}`}
                          className="btn btn-sm btn-warning mr-2"
                        >
                          {" "}
                          Edit
                        </Link>

                        <button onClick={ () => {
                          phoneDelete(phone.id)
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


export default Products;
