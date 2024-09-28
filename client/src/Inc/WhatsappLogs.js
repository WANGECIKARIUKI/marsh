import React, { useState } from 'react';
import './WhatsappLogs.css';

// Sample Data
const contactsData = [
    { id: 1, name: 'Alice', phone: '+123456789', email: 'alice@example.com' },
    { id: 2, name: 'Bob', phone: '+987654321', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', phone: '+564738291', email: 'charlie@example.com' },
    { id: 4, name: 'David', phone: '+345678912', email: 'david@example.com' },
    { id: 5, name: 'Eva', phone: '+456789123', email: 'eva@example.com' },
    { id: 6, name: 'Frank', phone: '+678912345', email: 'frank@example.com' },
    { id: 7, name: 'Grace', phone: '+765432109', email: 'grace@example.com' },
    { id: 8, name: 'Hannah', phone: '+897654321', email: 'hannah@example.com' },
];

const chatsData = [
    {
        id: 1,
        messages: [
            { sender: 'me', text: 'Hey Alice! How are you?', time: '2024-09-26 09:00' },
            { sender: 'Alice', text: 'I’m good, thanks! How about you?', time: '2024-09-26 09:01' },
            { sender: 'me', text: 'Doing well! Just working on some projects.', time: '2024-09-26 09:02' },
            { sender: 'Alice', text: 'That’s great! Let’s catch up soon.', time: '2024-09-26 09:03' },
            { sender: 'me', text: 'Definitely! How about this weekend?', time: '2024-09-26 09:04' },
            { sender: 'Alice', text: 'Perfect! I’ll message you later.', time: '2024-09-26 09:05' },
        ],
    },
    {
        id: 2,
        messages: [
            { sender: 'me', text: 'Hey Bob! Ready for the meeting?', time: '2024-09-26 10:00' },
            { sender: 'Bob', text: 'Yes! I’ll join in 5 minutes.', time: '2024-09-26 10:01' },
            { sender: 'me', text: 'Awesome, see you then!', time: '2024-09-26 10:02' },
            { sender: 'Bob', text: 'By the way, did you send the agenda?', time: '2024-09-26 10:03' },
            { sender: 'me', text: 'Just sent it to you.', time: '2024-09-26 10:04' },
        ],
    },
    {
        id: 3,
        messages: [
            { sender: 'me', text: 'Hey Charlie! What’s up?', time: '2024-09-26 11:00' },
            { sender: 'Charlie', text: 'Not much, just chilling. You?', time: '2024-09-26 11:01' },
            { sender: 'me', text: 'Same here. Want to grab lunch later?', time: '2024-09-26 11:02' },
            { sender: 'Charlie', text: 'Sure! Where do you want to go?', time: '2024-09-26 11:03' },
            { sender: 'me', text: 'How about that new place downtown?', time: '2024-09-26 11:04' },
        ],
    },
    {
        id: 4,
        messages: [
            { sender: 'me', text: 'Hey David! Did you finish the report?', time: '2024-09-26 12:00' },
            { sender: 'David', text: 'Almost done! Just need a few more details.', time: '2024-09-26 12:01' },
            { sender: 'me', text: 'Let me know if you need help.', time: '2024-09-26 12:02' },
            { sender: 'David', text: 'Thanks! I’ll send it over shortly.', time: '2024-09-26 12:03' },
        ],
    },
    {
        id: 5,
        messages: [
            { sender: 'me', text: 'Hi Eva! Are you coming to the party?', time: '2024-09-26 13:00' },
            { sender: 'Eva', text: 'Of course! I wouldn’t miss it.', time: '2024-09-26 13:01' },
            { sender: 'me', text: 'Great! Let’s meet up before.', time: '2024-09-26 13:02' },
            { sender: 'Eva', text: 'Sounds like a plan!', time: '2024-09-26 13:03' },
        ],
    },
    {
        id: 6,
        messages: [
            { sender: 'me', text: 'Hey Frank! Did you check the report I sent?', time: '2024-09-26 14:00' },
            { sender: 'Frank', text: 'Yes, I’ll send my feedback by EOD.', time: '2024-09-26 14:01' },
            { sender: 'me', text: 'Perfect, thanks!', time: '2024-09-26 14:02' },
        ],
    },
    {
        id: 7,
        messages: [
            { sender: 'me', text: 'Hi Grace! Are you available for a call later?', time: '2024-09-26 15:00' },
            { sender: 'Grace', text: 'Yes, I’ll call you at 4 PM.', time: '2024-09-26 15:01' },
            { sender: 'me', text: 'Great, talk soon!', time: '2024-09-26 15:02' },
        ],
    },
];

const callsData = [
    { id: 1, name: 'Alice', type: 'Incoming', duration: '5 min', time: '2024-09-25 12:34' },
    { id: 2, name: 'Bob', type: 'Outgoing', duration: '2 min', time: '2024-09-25 10:12' },
    { id: 3, name: 'Charlie', type: 'Incoming', duration: '3 min', time: '2024-09-25 14:20' },
    { id: 4, name: 'David', type: 'Missed', duration: 'N/A', time: '2024-09-25 15:00' },
    { id: 5, name: 'Eva', type: 'Outgoing', duration: '4 min', time: '2024-09-25 16:15' },
    { id: 6, name: 'Frank', type: 'Incoming', duration: '6 min', time: '2024-09-25 17:00' },
    { id: 7, name: 'Grace', type: 'Missed', duration: 'N/A', time: '2024-09-25 18:00' },
];

function WhatsappLogs() {
    const [activeSection, setActiveSection] = useState('contacts');
    const [openContacts, setOpenContacts] = useState([]);
    const [openChats, setOpenChats] = useState([]);

    const toggleContact = (id) => {
        setOpenContacts(prev => prev.includes(id) ? prev.filter(contactId => contactId !== id) : [...prev, id]);
    };

    const toggleChat = (id) => {
        setOpenChats(prev => prev.includes(id) ? prev.filter(chatId => chatId !== id) : [...prev, id]);
    };

    const renderContacts = () => (
        <div style = {{color: 'black', fontSize: '1.4rem'}}className="contacts-list">
            {contactsData.map(contact => (
                <div key={contact.id} className="contact-item" onClick={() => toggleContact(contact.id)}>
                    <div style = {{color: 'blue', fontSize: '1.4rem'}} className="contact-name">{contact.name}</div>
                    {openContacts.includes(contact.id) && (
                        <div className="contact-details">
                            <span style = {{color: 'black', fontSize: '1.4rem'}}>Phone: {contact.phone}</span><br />
                            <span style = {{color: 'black', fontSize: '1.4rem'}}>Email: {contact.email}</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    const renderChats = () => (
        <div className="chats-list">
            {chatsData.map(chat => (
                <div key={chat.id}>
                    <div className="chat-header" onClick={() => toggleChat(chat.id)}>
                        <h4 style = {{color: 'blue', fontSize: '1.4rem'}}>Chat with {contactsData[chat.id - 1].name}</h4>
                    </div>
                    {openChats.includes(chat.id) && (
                        <div className="chat-messages">
                            {chat.messages.map((message, index) => (
                                <div style = {{color: 'black', fontSize: '1.4rem'}} key={index} className={`message ${message.sender}`}>
                                    <span style = {{color: 'black', fontSize: '1.2rem'}}>{message.text}</span>
                                    <span style = {{color: 'black', fontSize: '1rem'}} className="message-time">{message.time}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    const renderCalls = () => (
        <div className="calls-table">
            <table>
                <thead>
                    <tr>
                        <th style = {{color: 'black', fontSize: '1.4rem'}}>Name</th>
                        <th style = {{color: 'black', fontSize: '1.4rem'}}>Type</th>
                        <th style = {{color: 'black', fontSize: '1.4rem'}}>Duration</th>
                        <th style = {{color: 'black', fontSize: '1.4rem'}}>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {callsData.map(call => (
                        <tr key={call.id}>
                            <td style = {{color: 'black', fontSize: '1.4rem'}}>{call.name}</td>
                            <td style = {{color: 'black', fontSize: '1.4rem'}}>{call.type}</td>
                            <td style = {{color: 'black', fontSize: '1.4rem'}}>{call.duration}</td>
                            <td style = {{color: 'black', fontSize: '1.4rem'}}>{call.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="whatsapp-container">
            <button className="back-button" onClick={() => setActiveSection('contacts')}>
                Back to Contacts
            </button>
            <div className="sections">
                <div style = {{color: 'black', fontSize: '1.4rem'}}className="section" onClick={() => setActiveSection('contacts')}>
                    Contacts
                </div>
                <div style = {{color: 'black', fontSize: '1.4rem'}} className="section" onClick={() => setActiveSection('chats')}>
                    Chats
                </div>
                <div style = {{color: 'black', fontSize: '1.4rem'}} className="section" onClick={() => setActiveSection('calls')}>
                    Calls
                </div>
            </div>

            {activeSection === 'contacts' && renderContacts()}
            {activeSection === 'chats' && renderChats()}
            {activeSection === 'calls' && renderCalls()}
        </div>
    );
}

export default WhatsappLogs;
