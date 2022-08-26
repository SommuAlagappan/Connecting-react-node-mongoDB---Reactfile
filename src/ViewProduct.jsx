import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function ViewProduct() {
  const params = useParams()
  const [phoneData,setPhoneData] = useState({})

  const [searchParams,setSearchParams] = useSearchParams()
  console.log(...searchParams);

  useEffect(() => {
   loadUser()
  }, [])
  
 
  let loadUser = async() => {
    try{
     let phone = await axios.get(`https://6305f395dde73c0f844f7176.mockapi.io/Smartphones/${params.id}`)
      setPhoneData(phone.data)
    }
    catch(error){

    }

  }

  return (
    <>
    <h1 style={{color:"red"}}>{phoneData.model}</h1>
    <h1>{phoneData.brand}</h1>
    <h1>{phoneData.ram}</h1>
    <h1>{phoneData.processor}</h1>
    <h1>{phoneData.price}</h1>
    </>
  )
}

export default ViewProduct;