import React, { useState, useEffect } from 'react';

const PublicEvents = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    const data = localStorage.getItem('events');
    setEvents(JSON.parse(data!));
    setLoading(false);
  }, [])

  return (
    <>
      <p>This is the public events page</p>
      {loading ? 'loading' : (
        events.map((event, index) => {
          return (
            <div key={index}>
              <img src={event.images[0] || `/assets/images/wedding-banner.jpg`} alt="event image" />
              <p>{`${event.event_date} ${event.event_time}`}</p>
              <h3>{event.name}</h3>
            </div>
          )
        })
      )}
    </>
  );
}

export default PublicEvents;