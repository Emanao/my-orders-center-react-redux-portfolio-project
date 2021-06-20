import React from 'react'
import {NavLink} from 'react-router-dom'


export const NavBar = ()=>{
    return(
        <div>
        <NavLink 
        className='nav-link text-white'
        to='/'
        exact
        >Home</NavLink>

        </div>
    )
}
