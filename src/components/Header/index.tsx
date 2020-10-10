import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const Header: React.FC<ComponentProps> = (props) => {
    return (
        <header className="home section-center-middle">
            <div className="container justify-space">
                <div className="logo-item">
                    <Link to="/"><img src="/assets/images/logo-alt.png" alt="brand" /></Link>
                </div>
                <div className="menu">
                    {/* <Link to="/">Join Event</Link> */}
                    {/* <a href="https://linkup-app.netlify.app" className="btn">Create Event</a> */}
                    <a href="https://app.owambe.ng" className="btn">Create Event</a>
                </div>
            </div>
        </header>
    )
}

export default Header;