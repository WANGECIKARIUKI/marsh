import React from 'react';
import { useParams } from 'react-router-dom';
import './Chats.css'; // Ensure this CSS file is created

function Chats() {
    const { id } = useParams();

    // Dummy chat details based on id (for demonstration purposes)
    const chatDetails = {
        1: { name: 'Alice', messages: ['Hey! How are you?', 'Let’s meet up tomorrow.'] },
        2: { name: 'Bob', messages: ['Can you send me the report?', 'Thanks!'] },
        3: { name: 'Charlie', messages: ['What time are we meeting?', 'Looking forward to it.'] },
    };

    const chat = chatDetails[id];

    return (
        <div className="chat-container">
            <h1>Chat with {chat ? chat.name : 'Unknown'}</h1>
            {chat ? (
                <ul className="messages">
                    {chat.messages.map((msg, index) => (
                        <li key={index} className="message">{msg}</li>
                    ))}
                </ul>
            ) : (
                <p>No chat found.</p>
            )}
        </div>
    );
}

export default Chats;
