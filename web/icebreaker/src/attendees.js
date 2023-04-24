import attendees from "./attendee-categories.json";
import React from "react";

const AttendeesPage = () => {
  const [selected, setSelected] = React.useState([]);
  const categories = attendees.reduce((acc, attendee) => {
    if (!acc.includes(attendee.category)) {
      acc.push(attendee.category);
    }
    return acc;
  }, []);

  const handleClick = (e) => {
    if (!selected.has(e.target.value)) {
      // Add item to selection
      selected.add(e.target.value);
    } else {
      // Remove item from selection
      selected.delete(e.target.value);
    }
  };

  return (
    <>
      {selected.length === 2 ? (
        <button>Compare</button>
      ) : (
        <p>select two attendees to view interaction question.</p>
      )}
      {categories.map((category) => (
        <div>
          <h1>{category}</h1>

          {attendees.map((attendee) => {
            if (attendee.category === category) {
              return (
                <select onClick={handleClick}>{attendee.full_name}</select>
              );
            }
            return null;
          })}
        </div>
      ))}
    </>
  );
};

export default AttendeesPage;
