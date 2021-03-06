import React from 'react'
import {NavLink} from 'react-router-dom'


export const NavBar = ()=>{
    return(
        <div>
            <ul className="navbar navbar-expand-sm bg-dark navbar-dark">
                <li className="nav-item">
                    <NavLink 
                    className='nav-link text-white'
                    to='/'
                    exact
                    >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                    className='nav-link text-white'
                    to='/orders/new'
                    exact
                    >Add Order</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                    className='nav-link text-white'
                    to='/orders'
                    exact
                    >My Orders</NavLink>
                </li>
            </ul>
        </div>
    )
}
