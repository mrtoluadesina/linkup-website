import React from 'react';
import './index.scss';
import Icon from '@mdi/react';
import { mdiCalendarRange, mdiCakeLayered, mdiPartyPopper } from '@mdi/js';
import AddToCalendar from 'react-add-to-calendar';

import Wedding from '../../layout/Wedding';

const BigDay = () => {
    const traditional = {
        title: 'Traditional Wedding - ttlailai',
        description: `Wear your favourite dresses but please stick to the colour code. 
        Onion Pink/Champagne Gold for the Ladies 
        White with a touch of Onion Pink for the Men (traditional)`,
        location: 'Pinnock Beach Estate, F5 Tulip Road, Lekki, Lagos, Nigeria',
        startTime: '2020-10-10T09:00:00-00:00',
        endTime: '2020-10-10T12:00:00-00:00'
    };
    const church = {
        title: 'Church Service - ttlailai',
        description: `Wear your favourite dresses but please stick to the colour code. Hint: It's a beach wedding
        Pastel pink, peach, purple, ivory...florals.`,
        location: 'Pinnock Beach Estate, Beach side, Lekki, Lagos, Nigeria',
        startTime: '2020-10-10T14:00:00-00:00',
        endTime: '2020-10-10T12:15:20-00:00'
    };
    const cocktail = {
        title: 'Cocktail Hour - ttlailai',
        description: `You may not have time to change from the ceremony so come as you are  😊
        There will be a few bites in addition to the cocktails to prep you for the reception. Can't wait to see you!`,
        location: 'Lagos, Nigeria',
        startTime: '2020-10-10T15:30:00-00:00',
        endTime: '2020-10-10T16:20:00-00:00'
    };
    const reception = {
        title: 'Reception - ttlailai',
        description: 'Too late for outfit changes now! Get ready to welcome the newest couple in town!',
        location: 'Pinnock Beach Estate, Beach side, Lekki, Lagos, Nigeria',
        startTime: '2020-10-10T16:30:00-00:00',
        endTime: '2020-10-10T12:00:00-00:00'
    };
    const parte = {
        title: 'Parte after parte - ttlailai',
        description: `It's time to get those heels off and dance dance dance! We are so excited to turn up with you!`,
        location: 'Pinnock Beach Estate, Beach side, Lekki, Lagos, Nigeria',
        startTime: '2020-10-10T20:00:00-00:00',
        endTime: '2020-10-11T00:00:00-00:00'
    };

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
                                <h3>Engagement Ceremony</h3>
                                <p>SATURDAY, OCTOBER 10, 2020 <br /> 09:00 AM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiCalendarRange} size={1} />
                                {/* <p>Add to Calendar</p> */}
                                <AddToCalendar event={traditional} />
                            </div>
                        </div>
                        <div className="programme-item">
                            <div className="programme-item-content section-center-middle">
                                <h3>Church Service</h3>
                                <p>SATURDAY, OCTOBER 10, 2020 <br /> 02:00 PM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiCalendarRange} size={1} />
                                {/* <p>Add to Calendar</p> */}
                                <AddToCalendar event={church} />
                            </div>
                        </div>
                        <div className="programme-item">
                            <div className="programme-item-content section-center-middle">
                                <h3>Cocktail Hour</h3>
                                <p>SATURDAY, OCTOBER 10, 2020 <br /> 3:30 PM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiCakeLayered} size={1} />
                                {/* <p>Add to Calendar</p> */}
                                <AddToCalendar event={cocktail} />
                            </div>
                        </div>
                        <div className="programme-item">
                            <div className="programme-item-content section-center-middle">
                                <h3>Reception</h3>
                                <p>SATURDAY, OCTOBER 10, 2020 <br /> 4:30 PM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiCakeLayered} size={1} />
                                {/* <p>Add to Calendar</p> */}
                                <AddToCalendar event={reception} />
                            </div>
                        </div>
                        <div className="programme-item">
                            <div className="programme-item-content section-center-middle">
                                <h3>Party after party</h3>
                                <p>SATURDAY, DECEMBER 19, 2020 <br /> 8:00 PM</p>
                            </div>
                            <div className="programme-item-action section-center-middle">
                                <Icon path={mdiPartyPopper} size={1} />
                                {/* <p>Add to Calendar</p> */}
                                <AddToCalendar event={parte} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wedding>
    );
}

export default BigDay;