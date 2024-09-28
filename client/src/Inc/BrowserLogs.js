import React, { useState } from 'react';
import './Browser.css'; // Ensure you create this CSS file
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Sample Data
const browserHistoryData = [
  {
    id: 1,
    title: 'BARNES & NOBLE',
    url: 'https://www.barnesandnoble.com/b/celebrity-gossip-magazines/_/N-2llp',
    date: '2024-09-25',
    duration: '5 min',
  },
  {
    id: 2,
    title: 'Page Six',
    url: 'https://pagesix.com/',
    date: '2024-09-24',
    duration: '3 min',
  },
  {
    id: 3,
    title: 'PaperToilet',
    url: 'https://papertoilet.com/',
    date: '2024-09-23',
    duration: '10 min',
  },
  {
    id: 4,
    title: 'WhatsApp',
    url: 'https://www.whatsapp.com/',
    date: '2024-09-25',
    duration: '50 min',
  },
  {
    id: 5,
    title: 'Netflix',
    url: 'https://www.netflix.com/ke/',
    date: '2024-09-24',
    duration: '1hr 30 min',
  },
  {
    id: 6,
    title: 'LifeWire',
    url: 'https://www.lifewire.com/watch-free-movies-online-1356647',
    date: '2024-09-23',
    duration: '10 min',
  },
  {
    id: 7,
    title: 'Starlink',
    url: 'https://www.starlink.com/',
    date: '2024-09-25',
    duration: '5 min',
  },
  {
    id: 8,
    title: 'Taste',
    url: 'https://www.taste.com.au/quick-easy/galleries/top-100-easy-dinner-recipes/biccuul7',
    date: '2024-09-24',
    duration: '15 min',
  },
  {
    id: 9,
    title: 'MuscleWiki',
    url: 'https://musclewiki.com/',
    date: '2024-09-23',
    duration: '30 min',
  },
];

function BrowserLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // History entries per page

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtering browser history by search term
  const filteredHistory = browserHistoryData.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.url.includes(searchTerm)
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const currentHistory = filteredHistory.slice(
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
    <div className="browser-history-container">
      {/* Header */}
      <header className="browser-history-header">
        <h1 style={{ color: 'black', fontSize: '2rem' }}>Browser History</h1>
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>

      {/* Scrollable History Table */}
      <div className="scrollable-history">
        <table className="browser-history-table">
          <thead>
            <tr>
              <th style={{ color: 'black', fontSize: '1.5rem' }}>Title</th>
              <th style={{ color: 'black', fontSize: '1.5rem' }}>URL</th>
              <th style={{ color: 'black', fontSize: '1.5rem' }}>Date</th>
              <th style={{ color: 'black', fontSize: '1.5rem' }}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {currentHistory.length > 0 ? (
              currentHistory.map(entry => (
                <tr key={entry.id}>
                  <td style={{ color: 'black', fontSize: '1.2rem' }}>{entry.title}</td>
                  <td style={{ color: 'blue', fontSize: '1.2rem' }}>
                    <a href={entry.url} target="_blank" rel="noopener noreferrer">{entry.url}</a>
                  </td>
                  <td style={{ color: 'black', fontSize: '1.2rem' }}>{entry.date}</td>
                  <td style={{ color: 'black', fontSize: '1.2rem' }}>{entry.duration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={{ color: 'black', fontSize: '1.2rem' }} colSpan="4">No history found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button style={{ color: 'red', fontSize: '1.2rem' }} onClick={goToPreviousPage} disabled={currentPage === 1}>
          <FaArrowLeft /> Previous
        </button>
        <span style={{ color: 'black', fontSize: '1rem' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button style={{ color: 'white', fontSize: '1.2rem' }} onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default BrowserLogs;
