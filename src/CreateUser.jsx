import React from 'react'
import { useFormik } from 'formik'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const navigate = useNavigate()
  const formik = useFormik({

    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: ""
    },

    validate: (values) => {
      let errors = {}
      if (values.name === "") {
        errors.name = "Please enter the name"
      }

      if(values.name.length < 4){
        errors.name = "Please enter greater than 4"
      }
      if (values.position === "") {
        errors.position = "Please enter the position"
      }
      if (values.office === "") {
        errors.office = "Please enter the office"
      }
      if (values.age === "") {
        errors.age = "Please enter the age"
      }
      if (values.startDate === "") {
        errors.startDate = "Please enter the startDate"
      }
      if (values.salary === "") {
        errors.salary = "Please enter the salary"
      }

      return errors;
    },

    onSubmit: async(values) => {
      let users = await axios.post("https://6305f395dde73c0f844f7176.mockapi.io/users/",values)

      alert("New user created")
      navigate("/portal/users")
    }
  })

  return <>

    <div className="container">

    <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='col-lg-6'>
            <label>Name</label>
            <input className= {`form-control ${formik.errors.name ? `redbox` : ``}`}
              type={"text"}
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name">
            </input>
            <span style={{color:"red"}}>{formik.errors.name}</span>
          </div>

          <div className='col-lg-6'>
            <label>Position</label>
            <input className={`form-control  ${formik.errors.position ? `redbox` : ``} `}
              type={"text"}
              value={formik.values.position}
              onChange={formik.handleChange}
              name="position">
            </input>
            <span style={{color:"red"}}>{formik.errors.position}</span>
          </div>

          <div className='col-lg-6'>
            <label>Office</label>
            <input className='form-control'
              type={"text"}
              value={formik.values.office}
              onChange={formik.handleChange}
              name="office">
            </input>
            <span style={{ color: "red" }}>{formik.errors.office}</span>
          </div>

          <div className='col-lg-6'>
            <label>Age</label>
            <input className='form-control'
              type={"number"}
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
            >
            </input>
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>


          <div className='col-lg-6'>
            <label>StartDate</label>
            <input className='form-control'
              type={"date"} value={formik.values.startDate}
              onChange={formik.handleChange}
              name="startDate">
            </input>
            <span style={{ color: "red" }}>{formik.errors.startDate}</span>
          </div>


          <div className='col-lg-6'>
            <label>Salary</label>
            <input className='form-control'
              type={"number"}
              value={formik.values.salary}
              onChange={formik.handleChange}
              name="salary"
            >
            </input>
            <span style={{ color: "red" }}>{formik.errors.salary}</span>
          </div>


          <div className='col-lg-6 my-4'>
            <input className='btn-primary'
              type={"submit"}
              value={"Submit"}
              disabled={!formik.isValid} >
            </input>
          </div>

        </div>
      </form>


    </div>
  </>
  
}

export default CreateUser;