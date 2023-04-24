import "./App.css";

import attendees from "./attendee-categories.json";
import event from "./event.json";

const EventsPage = () => {
  return (
    <>
      <h1>{event.name}</h1>
      <h2>{event.date}</h2>
      <h3>{event.location}</h3>
      <p>{event.description}</p>
      <p>{event.highlights}</p>
      <p>{event.whoShouldAttend}</p>
      <p>{event.registration}</p>
    </>
  );
};

function App() {
  return <div className="App">
    <EventsPage/>    
  </div>;
}

export default App;
