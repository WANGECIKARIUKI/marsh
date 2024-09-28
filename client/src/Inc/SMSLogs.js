import React, { useState } from 'react';
import './SMS.css';

// Sample chat data without profile photos
const chatData = [
    {
        id: 1,
        friendName: 'Alice',
        messages: [
            { sender: 'me', text: 'Hey, Alice! How are you?', time: '09:00 AM' },
            { sender: 'friend', text: 'I’m good! How about you?', time: '09:01 AM' },
            { sender: 'me', text: 'Just working on a project.', time: '09:02 AM' },
            { sender: 'friend', text: 'That’s great! What project?', time: '09:03 AM' },
            { sender: 'friend', text: 'I hope it’s going well.', time: '09:04 AM' },
            { sender: 'me', text: 'Yes, it is! Thanks for asking.', time: '09:05 AM' },
        ],
    },
    {
        id: 2,
        friendName: 'Bob',
        messages: [
            { sender: 'me', text: 'Are we still on for the game tonight?', time: '07:00 PM' },
            { sender: 'friend', text: 'Yes! I’ll be there by 8.', time: '07:01 PM' },
            { sender: 'me', text: 'Great! Looking forward to it.', time: '07:02 PM' },
        ],
    },
    {
        id: 3,
        friendName: 'Charlie',
        messages: [
            { sender: 'friend', text: 'Did you see the latest episode of the show?', time: '10:15 AM' },
            { sender: 'me', text: 'Not yet! No spoilers, please!', time: '10:16 AM' },
            { sender: 'friend', text: 'Haha, I promise. It was intense!', time: '10:17 AM' },
            { sender: 'friend', text: 'You’ll love the plot twist!', time: '10:18 AM' },
            { sender: 'me', text: 'I can’t wait to watch it!', time: '10:19 AM' },
        ],
    },
    {
        id: 4,
        friendName: 'Diana',
        messages: [
            { sender: 'friend', text: 'Hey! Are you joining the party this weekend?', time: '06:00 PM' },
            { sender: 'me', text: 'Yes, I’ll be there!', time: '06:01 PM' },
            { sender: 'friend', text: 'Awesome! What should I bring?', time: '06:02 PM' },
            { sender: 'me', text: 'Maybe some snacks?', time: '06:03 PM' },
            { sender: 'friend', text: 'Sure! I’ll grab some chips.', time: '06:04 PM' },
        ],
    },
    {
        id: 5,
        friendName: 'Eve',
        messages: [
            { sender: 'me', text: 'Have you finished reading that book?', time: '05:00 PM' },
            { sender: 'friend', text: 'Not yet, I’m almost there!', time: '05:01 PM' },
            { sender: 'me', text: 'I loved the first few chapters.', time: '05:02 PM' },
            { sender: 'friend', text: 'Same here! It gets even better.', time: '05:03 PM' },
            { sender: 'me', text: 'Can’t wait to hear your thoughts!', time: '05:04 PM' },
        ],
    },
    {
        id: 6,
        friendName: 'Frank',
        messages: [
            { sender: 'friend', text: 'What’s up? Ready for the hike tomorrow?', time: '08:00 AM' },
            { sender: 'me', text: 'Yes! I’m really excited.', time: '08:01 AM' },
            { sender: 'friend', text: 'Don’t forget to bring water.', time: '08:02 AM' },
            { sender: 'me', text: 'Got it! What time are we meeting?', time: '08:03 AM' },
            { sender: 'friend', text: 'Let’s meet at 7.', time: '08:04 AM' },
        ],
    },
];

function SMSLogs() {
    const [message, setMessage] = useState('');
    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState([]);

    const toggleChat = (chat) => {
        if (activeChat === chat) {
            setActiveChat(null);
            setMessages([]); // Clear messages when closing the chat
        } else {
            setActiveChat(chat);
            setMessages(chat.messages); // Load messages when opening the chat
        }
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                sender: 'me',
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    return (
        <div className="sms-container">
            <div className="chat-header">
                <h2 style = {{color: 'black', fontSize: '2rem'}}>Text Messages</h2>
            </div>
            <div className="chat-list">
                {chatData.map((chat) => (
                    <div key={chat.id} className="chat-item" onClick={() => toggleChat(chat)}>
                        <div className="chat-info">
                            <span style = {{color: 'black', fontSize: '1.4rem'}} className="friend-name">{chat.friendName}</span>
                            {activeChat === chat && messages.length > 0 && (
                                <span style = {{color: 'black', fontSize: '1.4rem'}} className="last-message">{messages[messages.length - 1].text}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {activeChat && (
                <>
                    <div className="messages-area">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <span style = {{color: 'black', fontSize: '1.2rem'}}className="message-text">{msg.text}</span>
                                <span style = {{color: 'black', fontSize: '1rem'}} className="message-time">{msg.time}</span>
                            </div>
                        ))}
                    </div>
                    <form className="message-input" onSubmit={sendMessage}>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default SMSLogs;
