import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

export const FileUpload = () => {
    const {register, handleSubmit} = useForm();
    const submit = (data) =>{
        
        var formData = new FormData();
        
        formData.append("file", data.file[0]);
        formData.append("userName", data.userName);

        axios.post("http://localhost:4000/upload/upload", formData).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })


    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>

            USER NAME:<input type="text" {...register("userName")}/>
            SELECT FILE :<input type="file" {...register("file")} multiple/>
            <input type="submit" value="upload"/>
        </form>
    </div>
  )
}
