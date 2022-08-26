import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Userview() {
  const params = useParams()
  const [userData,setUserData] = useState({})

  const [searchParams,setSearchParams] = useSearchParams()
  console.log(...searchParams);

  useEffect(() => {
   loadUser()
  }, [])
  
 
  let loadUser = async() => {
    try{
     let user = await axios.get(`https://6305f395dde73c0f844f7176.mockapi.io/users/${params.id}`)
      setUserData(user.data)
    }
    catch(error){

    }

  }

  return (
    <>
    <h1 style={{color:"red"}}>{userData.name}</h1>
    <h1 className='text-muted'>{userData.position}</h1>
    <h1>{userData.office}</h1>
    <h1>{userData.age}</h1>
    <h1 className='text-muted'>{userData.startDate}</h1>
    <h1 style={{color:"green"}}>{userData.salary}</h1>

    </>
  )
}

export default Userview;