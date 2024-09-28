import React, { useState } from 'react';
import './Events.css';
import { FaSearch } from 'react-icons/fa';

// Sample Event Data
const eventsData = [
    { id: 1, name: 'Family Gathering', date: '2024-09-25', time: '10:00 AM', location: 'At Home' },
    { id: 2, name: ' Matty Birthday Party', date: '2024-09-30', time: '5:00 PM', location: 'Online' },
    { id: 3, name: 'Grace Bachelorette Party', date: '2024-10-02', time: '7:00 PM', location: 'Rome Club' },
    { id: 4, name: 'Call Mom', date: '2024-10-04', time: '9:00 AM', location: 'Phone call' },
    { id: 5, name: 'Lunch Date with Dad', date: '2024-10-07', time: '12:00 PM', location: 'Mexian Restaurant' },
    { id: 6, name: 'Girls Trip', date: '2024-10-10', time: '3:00 PM', location: 'Raffles Bali' },
    { id: 7, name: 'Nieces & Nephews Outing', date: '2024-10-15', time: '10:00 AM', location: 'Amusement Park' },
    { id: 8, name: 'Clubbing', date: '2024-10-20', time: '2:00 PM', location: 'Manhattan Club' },
    { id: 9, name: 'Sales Strategy Meeting', date: '2024-10-22', time: '11:00 AM', location: 'Conference Room' },
    { id: 10, name: 'End of Year Party', date: '2024-12-15', time: '6:00 PM', location: 'Rooftop' },
];

function Events() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEvents = eventsData.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="events-container">
            <header className="events-header">
                <h1 style = {{color: 'black', fontSize: '2rem'}}>Events</h1>
                <div className="search-bar">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search events"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </header>

            <table className="events-table">
                <thead>
                    <tr>
                        <th style = {{color: 'black', fontSize: '1rem'}}>Name</th>
                        <th style = {{color: 'black', fontSize: '1rem'}}>Date</th>
                        <th style = {{color: 'black', fontSize: '1rem'}}>Time</th>
                        <th style = {{color: 'black', fontSize: '1rem'}}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(event => (
                            <tr key={event.id}>
                                <td style = {{color: 'black', fontSize: '1rem'}}>{event.name}</td>
                                <td style = {{color: 'blue', fontSize: '1rem'}}>{event.date}</td>
                                <td style = {{color: 'black', fontSize: '1rem'}}>{event.time}</td>
                                <td style = {{color: 'blue', fontSize: '1rem'}}>{event.location}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No events found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Events;
