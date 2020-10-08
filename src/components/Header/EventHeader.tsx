import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Nav from '../Nav';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const EventHeader: React.FC<ComponentProps> = (props) => {
    return (
        <header className="section-center-middle">
            <div className="container section-center-middle">
                <div className="top-header justify-space">
                    <div className="logo-item">
                        <Link to="/"><p>Owambe.ng</p></Link>
                    </div>
                    <div className="wedding-logo">
                        <img src="/assets/images/wedding-logo.png" alt="wedding" />
                    </div>
                    <div className="side-item">
                        <p>#ttlailai</p>
                    </div>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default EventHeader;