import React from 'react'
import { useForm } from 'react-hook-form';

export const Student = () => {

    const {register,handleSubmit} = useForm();
    ///register its an array object
    //handleSubmit its a function

    const submit = (data)=>{
        console.log(data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>First Name</label>
                <input type="text"  placeholder="First Name" {...register("firstName")}/>
            </div>
            <div>
                <label>LAST NAME</label>
                <input type="text"  placeholder="Last Name" {...register("lname")}/>
            </div>
            <div>
                <label>GENDER</label>
                <br/>
                MALE : <input type="radio" name='gender' value="Male" {...register("gender")}></input>
                FeMALE : <input type="radio" name='gender' value="FeMale"{...register("gender")}></input>
            </div>
            <div>
                <label>HOBBIES</label>
                <br/>
                <input type="checkbox" name="hobbies" value="Read" {...register("hobbies")}></input>Reading
                <input type="checkbox" name="hobbies" value="Playing" {...register("hobbies")}></input>Playing
                <input type="checkbox" name="hobbies" value="Singing" {...register("hobbies")}></input>Singing
            </div>
            <div>
                <label>SELECT CITY</label>
                <select {...register('city')}>
                    <option value="mumbai">Mumbai</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="pune">Pune</option>

                </select>
            </div>

            <div>
                
                <input type="submit" value="SUBMIT"></input>
            </div>

        </form>
    </div>
  )
}
