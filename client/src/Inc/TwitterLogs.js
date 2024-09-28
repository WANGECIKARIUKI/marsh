import React, { useState } from 'react';
import './Twitter.css';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';

// Sample Chat Data with additional chats
const chatData = [
    {
        id: 1,
        name: 'Jane Smith',
        messages: [
            { sender: 'me', text: 'Hey! Are we still on for lunch?', time: '10:30 AM' },
            { sender: 'John Doe', text: 'Yes! Looking forward to it.', time: '10:31 AM' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/women/81.jpg',
    },
    {
        id: 2,
        name: 'Mathew Dawson',
        messages: [
            { sender: 'me', text: 'Can you send me the report?', time: 'Yesterday' },
            { sender: 'Jane Smith', text: 'Sure, I’ll send it in a bit.', time: 'Yesterday' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/men/49.jpg',
    },
    {
        id: 3,
        name: 'Charlie Brown',
        messages: [
            { sender: 'me', text: 'Happy Birthday!', time: '2 days ago' },
            { sender: 'Charlie Brown', text: 'Thanks! Appreciate it.', time: '2 days ago' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/men/57.jpg',
    },
    {
        id: 4,
        name: 'Michael Scott',
        messages: [
            { sender: 'me', text: 'Do you need help with that project?', time: '1 hour ago' },
            { sender: 'Michael Scott', text: 'Nope, I’ve got it covered!', time: '1 hour ago' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/men/16.jpg',
    },
    {
        id: 5,
        name: 'Pam Beesly',
        messages: [
            { sender: 'me', text: 'Loved your art show, Pam!', time: '3 days ago' },
            { sender: 'Pam Beesly', text: 'Thanks! That means a lot!', time: '3 days ago' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
    {
        id: 6,
        name: 'Jim Halpert',
        messages: [
            { sender: 'me', text: 'Can we meet after work?', time: '2 hours ago' },
            { sender: 'Jim Halpert', text: 'Sure thing, see you then.', time: '2 hours ago' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/men/53.jpg',
    },
    {
        id: 7,
        name: 'Dwight Schrute',
        messages: [
            { sender: 'me', text: 'Did you finish the paperwork?', time: 'Today' },
            { sender: 'Dwight Schrute', text: 'Of course, I’m always on top of things.', time: 'Today' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
        id: 8,
        name: 'Stanley Hudson',
        messages: [
            { sender: 'me', text: 'Are you coming to the party tomorrow?', time: '4 days ago' },
            { sender: 'Stanley Hudson', text: 'Nope, I’ll pass.', time: '4 days ago' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/men/72.jpg',
    },
    {
        id: 9,
        name: 'Kelly Kapoor',
        messages: [
            { sender: 'me', text: 'You should check out this show!', time: '5 days ago' },
            { sender: 'Kelly Kapoor', text: 'OMG! Totally will!', time: '5 days ago' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/women/40.jpg',
    },
    {
        id: 10,
        name: 'Ryan Howard',
        messages: [
            { sender: 'me', text: 'Are you still working on the startup?', time: '1 week ago' },
            { sender: 'Ryan Howard', text: 'Yeah, I’m hustling hard!', time: '1 week ago' },
        ],
        profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
];

function TwitterLogs() {
    const [searchTerm, setSearchTerm] = useState('');
    const [openChatId, setOpenChatId] = useState(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredChats = chatData.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleChat = (id) => {
        setOpenChatId(prev => (prev === id ? null : id));
    };

    return (
        <div className="twitter-chats-container">
            <header className="chats-header">
                <button className="back-button">
                    <FaArrowLeft /> Back
                </button>
                <h1 style = {{color: 'black', fontSize: '2rem'}}>Twitter Messages</h1>
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

            <div className="chats-list">
                {filteredChats.length > 0 ? (
                    filteredChats.map(chat => (
                        <div key={chat.id}>
                            <div className="chat-item" onClick={() => toggleChat(chat.id)}>
                                <img src={chat.profilePic} alt={`${chat.name}'s profile`} className="profile-pic" />
                                <div className="chat-details">
                                    <h4 style = {{color: 'black', fontSize: '1.4rem'}}>{chat.name}</h4>
                                    <p style = {{color: 'black', fontSize: '0.5rem'}}>{chat.messages[chat.messages.length - 1].text}</p>
                                </div>
                                <span style = {{color: 'black', fontSize: '1rem'}}className="chat-time">{chat.messages[chat.messages.length - 1].time}</span>
                            </div>
                            {openChatId === chat.id && (
                                <div className="chat-messages">
                                    {chat.messages.map((message, index) => (
                                        <div key={index} className={`message ${message.sender}`}>
                                            <span style = {{color: 'black', fontSize: '1.2rem'}}>{message.text}</span>
                                            <span style = {{color: 'black', fontSize: '1rem'}} className="message-time">{message.time}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No chats found.</p>
                )}
            </div>
        </div>
    );
}

export default TwitterLogs;
