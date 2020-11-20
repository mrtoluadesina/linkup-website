import React, { useState, useEffect } from "react";
import Wedding from '../../layout/Wedding';
import "./index.scss";

import axios from 'axios';

const PublicEvents = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

  const config = {
    headers: {
      "client-id": process.env.REACT_APP_CLIENT_ID!
    }
  }

  useEffect(() => {
    setLoading(true);
    async function getPublicEvents() {
      try {
        let response = await axios.get(`https://link-event.herokuapp.com/api/v1/public-event`, config);
        let { data: { event } } = response;
        setEvents([...events, ...event]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getPublicEvents();
  }, []);

  return (
    <Wedding publicPage={true}>
      <div className="event_container">
        {loading
          ? "loading"
          : events.map((event, index) => {
            return (
              <a key={index} href={`https://app.owambe.ng/event/detail/${event.id}`}>
                <div className="event_card">
                  <div className="event-img">
                    <img
                      src={event.images[0] || `/assets/images/wedding-banner.jpg`}
                      alt="event"
                    />
                  </div>
                  <div className="event-content">
                    <p>{`${event.event_date} ${event.event_time}`}</p>
                    <h3>{event.name}</h3>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </Wedding>
  );
};

export default PublicEvents;
