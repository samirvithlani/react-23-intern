import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DevDashBoard = () => {

    const [user, setuser] = useState('')

    const getLoggedinUserData = () =>{
        var id = localStorage.getItem("_id")
        axios.get("http://localhost:4000/user/user/"+id).then((res)=>{
            console.log(res.data.data)
            setuser(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {
      
        getLoggedinUserData()
      
    }, [])
    
  return (
    <div>
        <h1>DevDashBoard
            {user.name}
        </h1>
    </div>
  )
}
