import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const UserLogin = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data)=>{
    
    axios.post('http://localhost:4000/user/user/login',data).then((res)=>{
        if(res.data.data){
            console.log("user found....")
            console.log(res.data.data[0].role.name)
            
        }
        
    }).catch((err)=>{
        console.log("user not found....")
        alert("user not found....")
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" {...register("password")} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
