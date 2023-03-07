import React from 'react'
import './header.css'

export const Header = () => {

    const title = "ROYAL TECHNOSOFT"
    const style1 = {
        color: 'red',
    }
  return (
    <div className = "header">
        <h1 style={style1}>{title}</h1> 
    </div>
  )
}
