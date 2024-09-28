import React, { useState } from 'react';
import './SnapChat.css';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

// Sample Data with more messages
const chatData = [
    {
        id: 1,
        friend: { name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/72.jpg' },
        messages: [
            { sender: 'me', text: 'Hey Alice!', time: '2024-09-26 09:00' },
            { sender: 'Alice', text: 'Hi! How are you?', time: '2024-09-26 09:01' },
            { sender: 'me', text: 'I am good, thanks! What about you?', time: '2024-09-26 09:02' },
            { sender: 'Alice', text: 'Just working on a project. You?', time: '2024-09-26 09:03' },
            { sender: 'me', text: 'Same here, just wrapping up some tasks.', time: '2024-09-26 09:04' },
            { sender: 'Alice', text: 'Let’s catch up later!', time: '2024-09-26 09:05' },
        ],
    },
    {
        id: 2,
        friend: { name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
        messages: [
            { sender: 'Bob', text: 'Are you coming to the party?', time: '2024-09-26 10:00' },
            { sender: 'me', text: 'Of course! Wouldn’t miss it.', time: '2024-09-26 10:01' },
            { sender: 'Bob', text: 'Awesome! I’ll be there at 8.', time: '2024-09-26 10:02' },
            { sender: 'me', text: 'Sounds great! See you then!', time: '2024-09-26 10:03' },
            { sender: 'Bob', text: 'Can’t wait to catch up!', time: '2024-09-26 10:04' },
        ],
    },
    {
        id: 3,
        friend: { name: 'Charlie', avatar: 'https://randomuser.me/api/portraits/men/88.jpg' },
        messages: [
            { sender: 'Charlie', text: 'Did you see the new movie?', time: '2024-09-26 11:00' },
            { sender: 'me', text: 'Not yet! How was it?', time: '2024-09-26 11:01' },
            { sender: 'Charlie', text: 'It was fantastic! You have to watch it.', time: '2024-09-26 11:02' },
            { sender: 'me', text: 'I’ll definitely check it out this weekend.', time: '2024-09-26 11:03' },
            { sender: 'Charlie', text: 'Let’s watch it together!', time: '2024-09-26 11:04' },
            { sender: 'me', text: 'Sounds good! I’m in.', time: '2024-09-26 11:05' },
        ],
    },
    {
        id: 4,
        friend: { name: 'Diana', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
        messages: [
            { sender: 'Diana', text: 'Have you finished the report?', time: '2024-09-26 12:00' },
            { sender: 'me', text: 'Almost done! Just need to finalize a few details.', time: '2024-09-26 12:01' },
            { sender: 'Diana', text: 'Great! Let me know if you need any help.', time: '2024-09-26 12:02' },
            { sender: 'me', text: 'Thanks! I appreciate it.', time: '2024-09-26 12:03' },
            { sender: 'Diana', text: 'No problem! Looking forward to seeing it.', time: '2024-09-26 12:04' },
        ],
    },
    {
        id: 5,
        friend: { name: 'Emma', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
        messages: [
            { sender: 'me', text: 'Hey Emma! How’s it going?', time: '2024-09-26 13:00' },
            { sender: 'Emma', text: 'I’m good! Just relaxing at home. You?', time: '2024-09-26 13:01' },
            { sender: 'me', text: 'Just finished some work. Thinking about going for a walk.', time: '2024-09-26 13:02' },
            { sender: 'Emma', text: 'That sounds nice! Enjoy the fresh air.', time: '2024-09-26 13:03' },
            { sender: 'me', text: 'Thanks! Maybe we can hang out later?', time: '2024-09-26 13:04' },
            { sender: 'Emma', text: 'I’d love that! Just let me know when.', time: '2024-09-26 13:05' },
        ],
    },
    {
        id: 6,
        friend: { name: 'Frank', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
        messages: [
            { sender: 'Frank', text: 'Did you finish the presentation?', time: '2024-09-26 14:00' },
            { sender: 'me', text: 'Not yet, still working on it.', time: '2024-09-26 14:01' },
            { sender: 'Frank', text: 'Need any help?', time: '2024-09-26 14:02' },
            { sender: 'me', text: 'Sure, that would be great!', time: '2024-09-26 14:03' },
            { sender: 'Frank', text: 'Let’s meet up later!', time: '2024-09-26 14:04' },
        ],
    },
    {
        id: 7,
        friend: { name: 'Grace', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
        messages: [
            { sender: 'me', text: 'Hey Grace! Any plans for the weekend?', time: '2024-09-26 15:00' },
            { sender: 'Grace', text: 'Thinking of going hiking. You?', time: '2024-09-26 15:01' },
            { sender: 'me', text: 'I might join! Where are you going?', time: '2024-09-26 15:02' },
            { sender: 'Grace', text: 'To the state park! Want to carpool?', time: '2024-09-26 15:03' },
            { sender: 'me', text: 'Sure, sounds fun!', time: '2024-09-26 15:04' },
        ],
    },
    {
        id: 8,
        friend: { name: 'Henry', avatar: 'https://randomuser.me/api/portraits/men/34.jpg' },
        messages: [
            { sender: 'Henry', text: 'Have you heard back from the interview?', time: '2024-09-26 16:00' },
            { sender: 'me', text: 'Not yet, but I’m hopeful!', time: '2024-09-26 16:01' },
            { sender: 'Henry', text: 'I’m sure you’ll do great!', time: '2024-09-26 16:02' },
            { sender: 'me', text: 'Thanks for the support!', time: '2024-09-26 16:03' },
        ],
    },
    {
        id: 9,
        friend: { name: 'Isabella', avatar: 'https://randomuser.me/api/portraits/women/26.jpg' },
        messages: [
            { sender: 'me', text: 'How’s your new job going, Isabella?', time: '2024-09-26 17:00' },
            { sender: 'Isabella', text: 'It’s going really well! Learning a lot.', time: '2024-09-26 17:01' },
            { sender: 'me', text: 'That’s awesome to hear!', time: '2024-09-26 17:02' },
            { sender: 'Isabella', text: 'Yeah, I’m really enjoying it.', time: '2024-09-26 17:03' },
        ],
    },
    {
        id: 10,
        friend: { name: 'Jack', avatar: 'https://randomuser.me/api/portraits/men/78.jpg' },
        messages: [
            { sender: 'Jack', text: 'Are we still on for the game tomorrow?', time: '2024-09-26 18:00' },
            { sender: 'me', text: 'Absolutely! Looking forward to it.', time: '2024-09-26 18:01' },
            { sender: 'Jack', text: 'Great! What time should we meet?', time: '2024-09-26 18:02' },
            { sender: 'me', text: 'Let’s say 3 PM at my place?', time: '2024-09-26 18:03' },
        ],
    },
];

function SnapchatLogs() {
    const [openChatId, setOpenChatId] = useState(null);

    const toggleChat = (id) => {
        setOpenChatId(openChatId === id ? null : id);
    };

    return (
        <div className="snapchat-chat-container">
            <header className="chat-header">
                <button className="back-button" onClick={() => console.log('Back')}>
                    <FaArrowLeft />
                </button>
                <h1 style={{ color: 'black', fontSize: '2rem' }}>Snapchat Chats</h1>
            </header>

            <div className="chat-list">
                {chatData.map(chat => (
                    <div key={chat.id} className="chat-item" onClick={() => toggleChat(chat.id)}>
                        <img src={chat.friend.avatar} alt={chat.friend.name} className="avatar" />
                        <div className="chat-info">
                            <h4 style={{ color: 'black', fontSize: '1.4rem' }}>{chat.friend.name}</h4>
                            {openChatId === chat.id && (
                                <div className="chat-messages">
                                    {chat.messages.map((message, index) => (
                                        <div key={index} className={`message ${message.sender}`}>
                                            <span style={{ color: 'black', fontSize: '1.2rem' }}>{message.text}</span>
                                            <span style={{ color: 'black', fontSize: '1rem' }} className="message-time">{message.time}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SnapchatLogs;
