import React from 'react';
// import {Link} from 'react-router-dom';
import './index.scss';
import Nav from '../Nav';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const EventHeader: React.FC<ComponentProps> = (props) => {
    return (
        <header className="section-center-middle">
            <div className="container section-center-middle">
                <div className="top-header justify-space">
                    <div className="logo-item">
                    <a href="/"><img src="/assets/images/logo.png" alt="brand" /></a>
                    </div>
                    <div className="wedding-logo">
                        <img src="/assets/images/wedding-logo.png" alt="wedding" />
                    </div>
                    <div className="side-item">
                        <a href="https://app.owambe.ng/event/detail/5f819776dfe9b500251ba716" className="btn">Attend #ttlailai</a>
                    </div>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default EventHeader;