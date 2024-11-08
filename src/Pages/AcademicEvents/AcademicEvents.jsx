import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AcademicEvents.css';

// Moment.js localizer for the calendar
const localizer = momentLocalizer(moment);

const eventsData = [
  { title: 'AI Symposium', start: new Date(2024, 9, 15), end: new Date(2024, 9, 15), location: 'Auditorium A' },
  { title: 'Quantum Computing Workshop', start: new Date(2024, 9, 22), end: new Date(2024, 9, 22), location: 'Room 305' },
  { title: 'Cybersecurity Conference', start: new Date(2024, 10, 5), end: new Date(2024, 10, 5), location: 'Main Hall' },
  { title: 'Data Science Meetup', start: new Date(2024, 10, 10), end: new Date(2024, 10, 10), location: 'Room 102' },
  { title: 'Publishing Workshop', start: new Date(2024, 10, 20), end: new Date(2024, 10, 20), location: 'Conference Room' },
];

const AcademicEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <Navbar />
      <div className="events-container">
        <h1 className="events-title">Upcoming Academic Events</h1>
        
        {/* Calendar Section */}
        <div className="calendar-section">
          <Calendar
            localizer={localizer}
            events={eventsData}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleEventSelect}
          />
        </div>

        {/* Selected Event Details */}
        {selectedEvent && (
          <div className="event-details">
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {moment(selectedEvent.start).format('MMMM Do YYYY')}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AcademicEvents;
