import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AttendeesPage from "./attendees";
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
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* Navigation */}
          <nav>
            <ul>
              <li>
                <Link to="/">Main Event</Link>
              </li>
              <li>
                <Link to="/attendees">Attendees</Link>
              </li>
            </ul>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<EventsPage />} />
            <Route path="/attendees" element={<AttendeesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
