import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const Header: React.FC<ComponentProps> = (props) => {
    return (
        <header className="home section-center-middle">
            <div className="container justify-space">
                <div className="logo-item">
                    <p>Owambe.ng</p>
                </div>
                <div className="menu">
                    <Link to="/">Join Event</Link>
                    <Link to="/" className="btn">Create Event</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;