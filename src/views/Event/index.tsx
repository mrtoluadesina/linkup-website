import React, { useState, useEffect } from 'react';
import './index.scss';

import Wedding from '../../layout/Wedding';

interface EventProps {
    status: string,
    events: Array<{
        name: string
        description?: string
        images: Array<string>,
    }>
}

const Event = () => {
    const [event, setEvent] = useState<EventProps>({
        status: "",
        events: []
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('event')!);
        setEvent(data!);
    }, [])


    const eventData = event.events[0];

    console.log(eventData);

    return (
        <Wedding>
            {eventData ? (
                <div className="main section-center-middle">
                    <div className="wedding-banner">
                        <img src={`${eventData.images[0]}`} alt="wedding banner" />
                    </div>
                    <div className="content">
                        <div className="container justify-center">
                            <div className="couple-name section-center-middle">
                                <h2>{eventData.name}</h2>

                                <h3 className="story-title">How we met</h3>

                                <div className="story">
                                    {eventData.description ? (
                                        eventData.description
                                    ) : (
                                            <p>Our love story started in the most beautiful way! The journey to forever begins here. </p>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="main section-center-middle">
                        <div className="wedding-banner">
                            <img src="/assets/images/wedding-banner.png" alt="wedding banner" />
                        </div>
                        <div className="content">
                            <div className="container justify-center">
                                <div className="couple-name section-center-middle">
                                    <h2>Couple's Name</h2>

                                    <h3 className="story-title">How we met</h3>

                                    <div className="story">
                                        <p>Our love story started in the most beautiful way! The journey to forever begins here. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </Wedding>
    )
}

export default Event;