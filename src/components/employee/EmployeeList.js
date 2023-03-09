import React from 'react'

export const EmployeeList = (props) => {
  return (
    <div>
        <h2>EMPLOYEE LIST....</h2>
        {
            props.employees.map((emp)=>{
                return(
                    <ul>
                        <li>{emp.id}</li>
                        <li>{emp.name}</li>
                        <li>{emp.email}</li>
                        <li>
                            <button onClick={()=>props.del(emp.id)}>Delete</button>
                        </li>
                    </ul>
                )
            })
        }
        <button onClick={props.t}>TEST</button>
    </div>
  )
}
