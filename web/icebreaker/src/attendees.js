import attendees from "./attendee-categories.json";
import React from 'react';

const AttendeesPage = () => {
  const categories = attendees.reduce((acc, attendee) => {
    if (!acc.includes(attendee.category)) {
      acc.push(attendee.category);
    }
    return acc;
  }, []);

  return (
    <>
      {categories.map((category) => (
        <div>
          <h1>{category}</h1>
          <ul>
            {attendees.map((attendee) => {
              if (attendee.category === category) {
                return <li>{attendee.full_name}</li>;
              }
              return null;
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default AttendeesPage;