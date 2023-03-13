import axios from 'axios'
import React, { useState } from 'react'

export const UserApi = () => {

    const [users, setusers] = useState()

const getApi = ()=>{

    axios.get("http://localhost:4000/user/user").then((res)=>{

        //console.log(res.data.users)
        setusers(res.data.users)

    }).catch((err)=>{

        console.log(err)
    })


}
const deleteUser =(id)=>{
    
    axios.delete("http://localhost:4000/user/user/"+id).then((res)=>{


        getApi()
    
        

    }).catch((err)=>{

        console.log(err)
    })
}



  return (
    <div>

        <button onClick={getApi}>Get Api</button>

        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>PASSWORD</th>
                <th>AGE</th>
            </tr>
            {
                users?.map((u)=>{
                    return(<tr>
                        <td>{u._id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.password}</td>
                        <td>{u.age}</td>
                        <td>
                            <button onClick={()=>{deleteUser(u._id)}}>DELETE</button>
                        </td>
                    </tr>)
                })
            }

        </table>
    </div>
  )
}
