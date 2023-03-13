import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const UserReg = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {

      console.log(data)
      axios.post("http://localhost:4000/user/user",data).then((res)=>{
          console.log(res)
      }).catch((err)=>{
          console.log(err)
      })


  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>age</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <label>password</label>
          <input type="text" {...register("password")} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
