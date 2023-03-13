import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  var id = 101;
  var data = [
    {
      id: 101,
      name: "Parth",
    },
    {
      id: 102,
      name: "Rajavi",
    },
    {
      id: 103,
      name: "Raj",
    },
  ];
  return (
    <div>
      <ul>
        
        <li>
          <Link to="/addstudent">ADD STUDENT</Link>
        </li>
        <li>
          <Link to="/aboutus">ABOUT US</Link>
        </li>

        <li>
          <Link to="/contactus">CONTACT US</Link>
        </li>
        <li>
          <Link to ="/userNavbar">USER NAVBAR</Link>
        </li>

        <li>
          {data.map((d) => {
            return (
              <ul>
                <li>
                  <Link to={`feedback/${d.id}`}>{d.name}</Link>
                </li>
              </ul>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
