import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {

  const { register, handleSubmit } = useForm();
  var navigate = useNavigate()
  const submit = (data)=>{
    
    axios.post('http://localhost:4000/user/user/login',data).then((res)=>{
        if(res.data.data){
            console.log("user found....")
            //console.log(res.data.data[0].role.name)
            console.log(res.data.data[0]?._id)
            localStorage.setItem("_id",res.data.data[0]?._id)
            console.log(res.data.data[0]?.role.name)
            if(res.data.data[0]?.role.name ==="USER"){

                navigate("/userdashboard")
            }
            else if(res.data.data[0]?.role.name==="DEV"){
              navigate("/devdashboard")
            }
            //role...
            
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
