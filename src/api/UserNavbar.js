import React from 'react'
import { Link } from 'react-router-dom'

export const UserNavbar = () => {
  return (
    <div>
        <Link to ="/userApi">User Api</Link>
        <Link to ="/userreg">User Reg</Link>
    </div>
  )
}
