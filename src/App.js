import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Updated
import Calendar from './components/Calendar';
import EventDetails from './components/EventDetails';
import { EventProvider } from './contexts/EventContext';
import './styles/App.css';

const App = () => {
  return (
    <EventProvider>
      <Router>
        <div className="App">
          <Routes> {/* Changed from Switch to Routes */}
            <Route path="/" element={<Calendar />} />
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        </div>
      </Router>
    </EventProvider>
  );
};

export default App;
