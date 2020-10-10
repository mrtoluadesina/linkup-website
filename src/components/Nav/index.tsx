import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

const Nav = () => {
    return (
        <nav>
            <li><Link to="/event">Home</Link></li>
            <li><Link to="/event/big-day">The Big Day</Link></li>
            <li><Link to="/event/gifts">Gifts</Link></li>
            <li><Link to="/event/photos">Photos</Link></li>
        </nav>
    )
}

export default Nav;