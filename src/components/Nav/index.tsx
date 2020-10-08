import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

const Nav = () => {
    return (
        <nav>
            <li><Link to="/event">Home</Link></li>
            <li><Link to="/big-day">The Big Day</Link></li>
            <li><Link to="/gifts">Gifts</Link></li>
            {/* <li><Link to="/photos">Photos</Link></li> */}
            <li><a href="https://linkup-app.netlify.app" className="btn">Attend Event</a></li>
        </nav>
    )
}

export default Nav;