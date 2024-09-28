import React, { useState } from 'react';
import './Contact.css';
import { FaSearch, FaArrowLeft, FaArrowRight, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// Sample Data (Sorted Alphabetically by Name)
const contactsData = [
  {
    id: 1,
    name: 'Charlie Brown',
    email: 'charliebrown@gmail.com',
    phone: '+564738291',
  },
  {
    id: 2,
    name: 'Daniel Thompson',
    email: 'danielthompson@gmail.com',
    phone: '+963852741',
  },
  {
    id: 3,
    name: 'David Miller',
    email: 'davidmiller@gmail.com',
    phone: '+456123789',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    email: 'emilyj@gmail.com',
    phone: '+159753864',
  },
  {
    id: 5,
    name: 'James Brown',
    email: 'jamesbrown@gmail.com',
    phone: '+852963741',
  },
  {
    id: 6,
    name: 'Jane Smith',
    email: 'janesmith@yahoo.com',
    phone: '+987654321',
  },
  {
    id: 7,
    name: 'Jessica Davis',
    email: 'jessicadavis@yahoo.com',
    phone: '+852147963',
  },
  {
    id: 8,
    name: 'Laura Martinez',
    email: 'laura06@gmail.com',
    phone: '+147258369',
  },
  {
    id: 9,
    name: 'Linda Green',
    email: 'lindagreen@gmail.com',
    phone: '+753951486',
  },
  {
    id: 10,
    name: 'Mathew Dawson',
    email: 'mattdaw@gmail.com',
    phone: '+254756459',
  },
  {
    id: 11,
    name: 'Michael White',
    email: 'michaelwhite@outlook.com',
    phone: '+321654987',
  },
  {
    id: 12,
    name: 'Sarah Wilson',
    email: 'sarahwil@gmail.com',
    phone: '+951753864',
  },
];

function ContactLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedContactId, setExpandedContactId] = useState(null); // Tracks which contact is expanded
  const itemsPerPage = 5; // Contacts per page

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtering contacts by search term
  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  // Toggle expanded contact
  const toggleContactDetails = (id) => {
    setExpandedContactId(expandedContactId === id ? null : id);
  };

  return (
    <div className="contacts-container">
      {/* Header */}
      <header className="contacts-header">
        <h1 style = {{color: 'black', fontSize: '2rem'}}>Contacts</h1>
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

      {/* Contacts List */}
      <table className="contacts-table">
        <thead>
          <tr>
            <th style = {{color: 'black', fontSize: '1.6rem'}}>Name</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.length > 0 ? (
            currentContacts.map(contact => (
              <React.Fragment key={contact.id}>
                <tr onClick={() => toggleContactDetails(contact.id)} className="contact-name-row">
                  <td style = {{color: 'black', fontSize: '1.4rem'}}>{contact.name}</td>
                </tr>
                {/* Show contact details if clicked */}
                {expandedContactId === contact.id && (
                  <tr className="contact-details-row">
                    <td style = {{color: 'black', fontSize: '1.2rem'}}>
                      <FaEnvelope /> {contact.email} <br />
                      <FaPhoneAlt /> {contact.phone}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td style = {{color: 'black', fontSize: '1.2rem'}} colSpan="1">No contacts found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button style = {{color: 'black', fontSize: '1.2rem'}} onClick={goToPreviousPage} disabled={currentPage === 1}>
          <FaArrowLeft /> Previous
        </button>
        <span style = {{color: 'black', fontSize: '1rem'}}>
          Page {currentPage} of {totalPages}
        </span>
        <button style = {{color: 'black', fontSize: '1.2rem'}} onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ContactLogs;
