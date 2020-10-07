import React from 'react';
import './index.scss';
import Icon from '@mdi/react';
import { mdiCalendarRange, mdiCakeLayered, mdiPartyPopper } from '@mdi/js';

import Wedding from '../../layout/Wedding';

const BigDay = () => {
    return (
        <Wedding>
            <div className="main section-center-middle">
                <div className="big-day-banner">
                    <img src="/assets/images/big-day-banner.png" alt="wedding banner" />
                </div>
                <div className="content">
                    <div className="container justify-center">
                        <div className="programme-item">
                            <div className="programme-item-content section-center-middle">
                                <h3>Traditional Wedding</h3>
                                <p>SATURDAY, DECEMBER 19, 2020 <br /> 10:00 AM - 1:00 PM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiCalendarRange} size={1} />
                                <p>Add to Calendar</p>
                            </div>
                        </div>
                        <div className="programme-item">
                            <div className="programme-item-content section-center-middle">
                                <h3>Reception</h3>
                                <p>SATURDAY, DECEMBER 19, 2020 <br /> 1:00 PM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiCakeLayered} size={1} />
                                <p>Add to Calendar</p>
                            </div>
                        </div>
                        <div className="programme-item">
                            <div className="programme-item-content section-center-middle">
                                <h3>Party after party</h3>
                                <p>SATURDAY, DECEMBER 19, 2020 <br /> 6:00 PM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiPartyPopper} size={1} />
                                <p>Add to Calendar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wedding>
    );
}

export default BigDay;