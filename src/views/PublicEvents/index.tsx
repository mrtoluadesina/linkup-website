import React, { useState, useEffect } from "react";

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
    <>
      <p>This is the public events page</p>
      <div className="event_container">
        {loading
          ? "loading"
          : events.map((event, index) => {
              return (
                <div key={index} className="event_card">
                  <img
                    src={event.images[0] || `/assets/images/wedding-banner.jpg`}
                    alt="event"
                  />
                  <p>{`${event.event_date} ${event.event_time}`}</p>
                  <h3>{event.name}</h3>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default PublicEvents;
