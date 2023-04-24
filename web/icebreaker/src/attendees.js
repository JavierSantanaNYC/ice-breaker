import attendees from "./attendee-categories.json";
import React from "react";

const AttendeesPage = () => {
  const [selected, setSelected] = React.useState([]);
  const [checkboxes, setCheckboxes] = React.useState(
    attendees.map((attendee) => {
      return { id: attendee.id, checked: false, label: attendee.full_name, category: attendee.category };
    })
  );
  const categories = attendees.reduce((acc, attendee) => {
    if (!acc.includes(attendee.category)) {
      acc.push(attendee.category);
    }
    return acc;
  }, []);

  const handleCheckboxChange = React.useCallback((id) => {
    setCheckboxes((prevState) => {
      const newState = prevState.map((checkbox) => {
        console.log(checkbox.id, id)
        if (checkbox.id === id) {
          // If the current checkbox is already checked, toggle it
          if (checkbox.checked) {
            return { ...checkbox, checked: !checkbox.checked };
          }

          // Count the number of checked checkboxes
          const checkedCount = prevState.filter((cb) => cb.checked).length;

          // If the limit of two checked checkboxes is not reached, toggle the current checkbox
          if (checkedCount < 2) {
            return{ ...checkbox, checked: !checkbox.checked };
          }
        }
        return checkbox;
      });

      return newState;
    });
  }, []);

  return (
    <>
      {checkboxes.filter((cb) => cb.checked).length === 2 ? (
        <button>Compare</button>
      ) : (
        <p>select two attendees to view interaction question.</p>
      )}
      {categories.map((category) => (
        <div>
          <h1>{category}</h1>

          {checkboxes.map((checkbox) => (
            checkbox.category === category && (
            <div key={checkbox.id}>
              <input
                type="checkbox"
                id={`checkbox-${checkbox.id}`}
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(checkbox.id)}
              />
              <label htmlFor={`checkbox-${checkbox.id}`}>
                {checkbox.label}
              </label>
            </div>
            )
          ))}
        </div>
      ))}
    </>
  );
};

export default AttendeesPage;
