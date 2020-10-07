import React from 'react';
import './index.scss';

import Wedding from '../../layout/Wedding';

const Event = () => {
    return (
        <Wedding>
            <div className="main section-center-middle">
                <div className="wedding-banner">
                    <img src="/assets/images/wedding-banner.png" alt="wedding banner" />
                </div>
                <div className="content">
                    <div className="container justify-center">
                        <div className="couple-name section-center-middle">
                            <h2>Omotola Jolade</h2>
                            <span>+</span>
                            <h2>Tunji Obajide</h2>

                            <h3 className="story-title">How we met</h3>

                            <div className="story">
                                <h3>Tola</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            </div>

                            <div className="story">
                                <h3>Tunji</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wedding>
    )
}

export default Event;