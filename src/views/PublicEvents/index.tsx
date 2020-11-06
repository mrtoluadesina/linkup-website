import React, { useState, useEffect } from "react";
import Wedding from '../../layout/Wedding';
import "./index.scss";

const PublicEvents = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    const data = localStorage.getItem("events");
    setEvents(JSON.parse(data!));
    setLoading(false);
  }, []);

  return (
    <Wedding publicPage={true}>
      <div className="event_container">
        {loading
          ? "loading"
          : events.map((event, index) => {
            return (
              <a href={`https://app.owambe.ng/event/detail/${event.id}`}>
                <div key={index} className="event_card">
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
