import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to ="/contactus/manager">MANAGER</Link>
            </li>
            <li>
                <Link to ="/director">Director</Link>
            </li>
            <li>
                <Link to ="management">Management</Link>
            </li>
        </ul>
    </div>
  )
}
