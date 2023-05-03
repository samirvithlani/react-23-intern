import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await axios.get(
        "http://localhost:4000/user/user/643f91ca98d8a295ff84f54e"
      );
      console.log(res.data.data);
      return {
        name: res.data.data.name,
        email: res.data.data.email,
      };
    },
  });
  const submit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
          <input type="text" id="email" {...register("email")} />
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};
