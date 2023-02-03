import React from 'react';

//Stateless functional component
const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className='badge bg-secondary m-2'>
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};
 
export default Navbar;