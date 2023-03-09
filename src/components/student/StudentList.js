import React from "react";

export const StudentList = (props) => {
  return (
    <div>
      StudentList
      {/* {
            props.studentList.map((stu)=>{
                return(
                    <ul>
                        <li>{stu.id}</li>
                        <li>{stu.name}</li>
                        <li>{stu.age}</li>
                    </ul>
                )
            })
        } */}
      <table class="table table-success">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">ACTION</th>
            
          </tr>
        </thead>
        <tbody>
          {props.studentList.map((stu) => {
            return (
              <tr>
                <th scope="row">{stu.id}</th>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{props.del(stu.id)}}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={props.test}>TEST</button>
      <button
        onClick={() => {
          props.test("ok");
        }}
      >
        TEST
      </button>
      {props.title}
    </div>
  );
};
