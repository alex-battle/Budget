import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom'



function Nav() {
    return (
        <div className="Nav">
            <Router>
                <div className="BUDGET-LOGO">
                    
                    {/* <Link to='/' >home</Link> */}
                </div>
                <div className="Business-Rentals-Car">
                    <Link to='/business'>Business Rentals</Link>
                    <Link to='/carsales'>Car Sales</Link>
                    <Link to='/customercare'>Customer Care</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/signin'>Sign In</Link>
                </div>
                <div className="Reservations-Deals-L">
                    <Link to='/reservations'>Reservations</Link>
                    <Link to='/deals'>Deals</Link>
                    <Link to='/locations'>Locations</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/fastbreak'>Fastbreak</Link>
                </div>
            </Router>
        </div>
    )
}
export default Nav