import React from 'react'
import { useState, useEffect }  from 'react'


function Demo() {
    
    const [timer,setTimer] = useState(0)

    useEffect(() => {
        fetch("https://6305f395dde73c0f844f7176.mockapi.io/Users").then(() => {
            console.log("fetch")
        })
        console.log("Hello")

    }, [])

    useEffect(() => {
        return () => {
            console.log("Destroyed")
        }
        
       }, [])

    useEffect(() => {
        console.log("Timer updated" )
       }, [timer])
    

    

  return (<div>
    <button onClick={() => setTimer (timer+1)}><h1>+</h1></button>
    {timer}
    <button onClick={() => setTimer (timer-1)}><h1>-</h1></button>
    </div>
  )
}

export default Demo;