import React from 'react'
import {NavLink} from 'react-router-dom'


export const NavBar = ()=>{
    return(
        <div>
            {/* className="navbar navbar-expand-lg navbar-light   bg-dark" */}
            <ul className="navbar navbar-expand-sm bg-dark navbar-dark">
                <li className="nav-item">
                    <NavLink 
                    className='nav-link text-white'
                    to='/'
                    exact
                    >Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink 
                    className='nav-link text-white'
                    to='/orders/new'
                    exact
                    >Add Order</NavLink>
                </li>
            </ul>
        </div>
    )
}
