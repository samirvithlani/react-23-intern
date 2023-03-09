import React, { useState } from "react";
import { EmployeeList } from "./EmployeeList";

export const Employee = (props) => {
  var [employees, setemployees] = useState(
    [
      {
        id: 101,
        name: "Raj",
        email: "raj@gmail.com",
      },
      {
        id: 102,
        name: "Ram",
        email: "ram@gmail.com",
      },
      {
        id: 103,
        name: "Parth",
        email: "parth@gmail.com",
      },
    ]
  )
  


  const deleteEmp = (id) => {

    employees = employees.filter((emp) => {
        return emp.id !== id
    })
    setemployees(employees)

  }
  const test =()=>{
    alert("test")
  }

  return (
    <div>
      <h1>Employee Component</h1>
      

        {/* {
            props.n
        }
        {
            props.user.name
        } */}

      <EmployeeList employees ={employees} t ={test} del = {deleteEmp}/>
      {/* {employees.map((emp) => {
        return (
          <ul>
            <li>{emp.id}</li>
            <li>{emp.name}</li>
            <li>{emp.email}</li>
          </ul>
        );
      })} */}
    </div>
  );
};
