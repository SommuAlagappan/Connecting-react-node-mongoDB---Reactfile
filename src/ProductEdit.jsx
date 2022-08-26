import React, { useEffect } from 'react'
import { useNavigate, useParams,  } from "react-router-dom"
import { useFormik } from 'formik'
import axios from 'axios'

function ProductEdit() {

   const params = useParams()
   const navigate = useNavigate()

  const formik = useFormik({

    initialValues: {
      model: "",
      brand: "",
      ram: "",
      processor: "",
      price: "",
      
    },

    validate: (values) =>{
      let errors =  {}
      
       if (values.model === ""){
        errors.model = "Please enter the model"
       } 

       if(values.model.length < 4){
        errors.model = "Please enter grater than 4"
       }

       if(values.batch === ""){
        errors.batch = "Please enter the Brand"
       }
       if(values.ram === ""){
        errors.ram = "Please enter the ram"
       }
       if(values.processor === ""){
        errors.processor = "Please enter the processor"
       }
       if(values.price === ""){
        errors.price = "Please enter the price"
       }
       

      return errors;
    },

    onSubmit: async (values) => {
      let data = await axios.put(`https://6305f395dde73c0f844f7176.mockapi.io/Smartphones/${params.id}`, values)
      alert("Product details updated")
      navigate("/portal/products")
    }
  })

  useEffect(() => {
    loadProduct()
  },[])

    let loadProduct = async() => {
      try{

        let phone = await axios.get(`https://6305f395dde73c0f844f7176.mockapi.io/Smartphones/${params.id}`)
        
        formik.setValues({
          model: phone.data.model,
          brand: phone.data.brand,
          ram: phone.data.ram,
          processor:  phone.data.processor,
          price: phone.data.price,

        })

      }
      catch(errors){

      }
    }


  return (<div>
    <div className="container">
      

        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='col-lg-6'>
            <label>Model</label>
            <input className={`form-control ${formik.errors.model ? `redbox` : ``} `}
              type={"text"}
              value={formik.values.model}
              onChange={formik.handleChange}
              name="model">
            </input>
              <span style={{color:"red"}}>{formik.errors.model}</span>
        
          </div>
          

          <div className='col-lg-6'>
            <label>Brand</label>
            <input className={`form-control  ${formik.errors.brand ? `redbox` : ``} `}
              type={"text"}
              value={formik.values.brand}
              onChange={formik.handleChange}
              name="brand">
            </input>
            <span style={{color:"red"}}>{formik.errors.brand}</span>
          </div>
          </div>


          <div className='row'>
          <div className='col-lg-6'>
            <label>Ram</label>
            <input className='form-control'
              type={"number"}
              value={formik.values.ram}
              onChange={formik.handleChange}
              name="ram">
            </input>
            <span style={{color:"red"}}>{formik.errors.ram}</span>
          </div>


          <div className='col-lg-6'>
            <label>Processor</label>
            <input className='form-control'
              type={"text"}
              value={formik.values.processor}
              onChange={formik.handleChange}
              name="processor"
              >
            </input>
            <span style={{color:"red"}}>{formik.errors.processor}</span>
          </div></div>

          <div className='row'>
          <div className='col-lg-6'>
            <label>price</label>
            <input className='form-control'
              type={"number"} value={formik.values.price}
              onChange={formik.handleChange}
              name="price">
            </input>
            <span style={{color:"red"}}>{formik.errors.price}</span>
          </div>

          <div className='col-lg-6 my-4'>
            <input className='btn-primary'
             type={"submit"} 
             value={"Submit"}
             disabled={!formik.isValid}>
            </input>
          </div></div>
          </form>
          </div>
</div>

      
    
  )
}

export default ProductEdit;