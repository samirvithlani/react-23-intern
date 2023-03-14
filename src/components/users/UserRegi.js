import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export const UserRegi = () => {

    const {register,handleSubmit} = useForm();
    const [roles, setroles] = useState()

    const submit  = (data)=>{

            axios.post("http://localhost:4000/user/user",data).then((res)=>{
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
    }
    useEffect(() => {
        getRoles();
    }, [])
    
    const getRoles = ()=>{

        axios.get("http://localhost:4000/role/get").then((res)=>{
            //console.log(res.data.data)
            setroles(res.data.data)
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>Name</label>
                <input type = "text" {...register("name")}/>
            </div>
            <div>
                <label>Email</label>
                <input type = "text" {...register("email")}/>
            </div>
            <div>
                <label>Password</label>
                <input type = "text" {...register("password")}/>
            </div>
            <div>
                <label>Age</label>
                <input type = "text" {...register("age")}/>
            </div>

            <div>
                <label>Role</label>
                {
                    roles?.map((role)=>{
                        return(
                            <div>
                                <input type="radio" value={role._id} {...register("role")}/>
                                <label>{role.name}</label>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div>
                <label>Role</label>
                <select {...register('role')}>
                    {
                        roles?.map((role)=>{
                            return(
                                <option value={role._id}>{role.name}</option>
                            )
                        })
                    }


                </select>
            </div> */}
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    </div>
  )
}
