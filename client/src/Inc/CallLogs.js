import React, { useState } from 'react';
import './CallLogs.css';
import { FaPhone, FaSearch, FaArrowLeft, FaArrowRight, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Sample Data
const contactsData = [
  { id: 1, name: 'Matt Dawson', phone: '+254756459', type: 'Incoming', lastInteraction: '2024-09-25 12:34', duration: '5 min' },
  { id: 2, name: 'Mathew Casey', phone: '+987654321', type: 'Outgoing', lastInteraction: '2024-09-25 10:12', duration: '2 min' },
  { id: 3, name: 'Molly Herman', phone: '+564738291', type: 'Missed', lastInteraction: '2024-09-24 08:45', duration: '0 min' },
  { id: 4, name: 'Manager Drew', phone: '+123456789', type: 'Incoming', lastInteraction: '2024-09-23 14:20', duration: '3 min' },
  { id: 5, name: 'Uncle Smith', phone: '+987123654', type: 'Outgoing', lastInteraction: '2024-09-22 09:30', duration: '1 min' },
  { id: 6, name: 'David Bff', phone: '+321654987', type: 'Missed', lastInteraction: '2024-09-21 11:15', duration: '0 min' },
  { id: 7, name: 'Emma Watson', phone: '+555666777', type: 'Incoming', lastInteraction: '2024-09-20 17:00', duration: '4 min' },
  { id: 8, name: 'Aunt Taylor', phone: '+444333222', type: 'Outgoing', lastInteraction: '2024-09-19 10:45', duration: '6 min' },
  { id: 9, name: 'Sis', phone: '+222333444', type: 'Missed', lastInteraction: '2024-09-18 08:30', duration: '0 min' },
  { id: 10, name: 'Mom', phone: '+888999000', type: 'Incoming', lastInteraction: '2024-09-17 12:00', duration: '2 min' },
  { id: 11, name: 'Liam Johnson', phone: '+777888999', type: 'Outgoing', lastInteraction: '2024-09-16 13:30', duration: '3 min' },
  { id: 12, name: 'Mia Brown', phone: '+666555444', type: 'Missed', lastInteraction: '2024-09-15 14:10', duration: '0 min' },
];

function CallLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Contacts per page

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtering contacts by search term
  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const currentContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="contacts-container">
      {/* Header */}
      <header className="contacts-header">
        <h1 style = {{color: 'black', fontSize: '2rem'}}>Call Logs</h1>
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search contacts"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>

      {/* Contacts Table */}
      <table className="contacts-table">
        <thead>
          <tr>
            <th >Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Last Interaction</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.length > 0 ? (
            currentContacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.type}</td>
                <td>{contact.lastInteraction}</td>
                <td>{contact.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No contacts found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          <FaArrowLeft /> Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default CallLogs;
