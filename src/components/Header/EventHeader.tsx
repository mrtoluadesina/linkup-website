import React from 'react';
import './index.scss';
import Nav from '../Nav';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const EventHeader: React.FC<ComponentProps> = (props) => {
    return (
        <header className="section-center-middle">
            <div className="container section-center-middle">
                <div className="top-header justify-space">
                    <div className="side-item">
                        <p>Link Up</p>
                    </div>
                    <div className="wedding-logo">
                        <img src="/assets/images/wedding-logo.png" alt="wedding" />
                    </div>
                    <div className="side-item">
                        <p>#jolatunji2020</p>
                    </div>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default EventHeader;