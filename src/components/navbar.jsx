import React, { Component } from 'react';

//Stateless functional component
const Navbar = props => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className='badge bg-secondary m-2'>
                        {props.totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};
 
export default Navbar;