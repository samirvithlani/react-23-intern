import React, { useState } from 'react'
import { StudentList } from './StudentList'

export const Student = (props) => {

    var [students, setstudent] = useState(
        [
        {
            id: 1,
            name: "Parth",
            age:25
        },
        {
            id: 2,
            name: "Raj",
            age:27
        },
        {
            id: 3,
            name: "jay",
            age:28
        },
    ]
)


    
    const test =(na)=>{

        console.log(na)
    }
    
    const deleteStudent = (id)=>{

        students = students.filter((stu)=>{
            return stu.id !== id
        })
        console.log(students)
        setstudent(students)
    }


  return (
    <div>
        <h1>STUDENT component {props.title}</h1>
        <StudentList studentList ={students} test = {test} title ={props.title} del ={deleteStudent}/>
    </div>
  )
}
