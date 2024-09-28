import React, { useState } from 'react';
import './Instagram.css';

// Sample chat data with profile photos and additional messages
const chatData = [
    {
        id: 1,
        friendName: 'Alice',
        friendPhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
        messages: [
            { sender: 'me', text: 'Hey, Alice! How are you?', time: '09:00 AM' },
            { sender: 'friend', text: 'I’m good! How about you?', time: '09:01 AM' },
            { sender: 'me', text: 'Just working on a project.', time: '09:02 AM' },
            { sender: 'friend', text: 'That’s great! What project?', time: '09:03 AM' },
            { sender: 'friend', text: 'I hope it’s going well.', time: '09:04 AM' },
            { sender: 'me', text: 'Yes, it is! Thanks for asking.', time: '09:05 AM' },
            { sender: 'friend', text: 'Let me know if you need any help!', time: '09:06 AM' },
            { sender: 'me', text: 'Will do!', time: '09:07 AM' },
            { sender: 'friend', text: 'Also, let’s catch up this weekend!', time: '09:08 AM' },
            { sender: 'me', text: 'Sounds perfect! What time?', time: '09:09 AM' },
        ],
    },
    {
        id: 2,
        friendName: 'Bob',
        friendPhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
        messages: [
            { sender: 'me', text: 'Are we still on for the game tonight?', time: '07:00 PM' },
            { sender: 'friend', text: 'Yes! I’ll be there by 8.', time: '07:01 PM' },
            { sender: 'me', text: 'Great! Looking forward to it.', time: '07:02 PM' },
            { sender: 'friend', text: 'I’ve been practicing my shots!', time: '07:03 PM' },
            { sender: 'me', text: 'Nice! I could use some pointers.', time: '07:04 PM' },
            { sender: 'friend', text: 'I’ll teach you a few tricks.', time: '07:05 PM' },
            { sender: 'me', text: 'Awesome! Bring your A-game.', time: '07:06 PM' },
            { sender: 'friend', text: 'Always do! Haha.', time: '07:07 PM' },
        ],
    },
    {
        id: 3,
        friendName: 'Charlie',
        friendPhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
        messages: [
            { sender: 'friend', text: 'Did you see the latest episode of the show?', time: '10:15 AM' },
            { sender: 'me', text: 'Not yet! No spoilers, please!', time: '10:16 AM' },
            { sender: 'friend', text: 'Haha, I promise. It was intense!', time: '10:17 AM' },
            { sender: 'friend', text: 'You’ll love the plot twist!', time: '10:18 AM' },
            { sender: 'me', text: 'I can’t wait to watch it!', time: '10:19 AM' },
            { sender: 'friend', text: 'Let me know your thoughts after!', time: '10:20 AM' },
            { sender: 'me', text: 'Definitely! I’ll binge it tonight.', time: '10:21 AM' },
        ],
    },
    {
        id: 4,
        friendName: 'Diana',
        friendPhoto: 'https://randomuser.me/api/portraits/women/2.jpg',
        messages: [
            { sender: 'friend', text: 'Hey! Are you joining the party this weekend?', time: '06:00 PM' },
            { sender: 'me', text: 'Yes, I’ll be there!', time: '06:01 PM' },
            { sender: 'friend', text: 'Awesome! What should I bring?', time: '06:02 PM' },
            { sender: 'me', text: 'Maybe some snacks?', time: '06:03 PM' },
            { sender: 'friend', text: 'Sure! I’ll grab some chips.', time: '06:04 PM' },
            { sender: 'friend', text: 'And drinks too!', time: '06:05 PM' },
            { sender: 'me', text: 'Perfect! Looking forward to it.', time: '06:06 PM' },
        ],
    },
    {
        id: 5,
        friendName: 'Eve',
        friendPhoto: 'https://randomuser.me/api/portraits/women/3.jpg',
        messages: [
            { sender: 'me', text: 'Have you finished reading that book?', time: '05:00 PM' },
            { sender: 'friend', text: 'Not yet, I’m almost there!', time: '05:01 PM' },
            { sender: 'me', text: 'I loved the first few chapters.', time: '05:02 PM' },
            { sender: 'friend', text: 'Same here! It gets even better.', time: '05:03 PM' },
            { sender: 'me', text: 'Can’t wait to hear your thoughts!', time: '05:04 PM' },
            { sender: 'friend', text: 'Let’s discuss it once I’m done!', time: '05:05 PM' },
            { sender: 'me', text: 'Sounds good! I’ll finish it too.', time: '05:06 PM' },
        ],
    },
    {
        id: 6,
        friendName: 'Frank',
        friendPhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
        messages: [
            { sender: 'friend', text: 'What’s up? Ready for the hike tomorrow?', time: '08:00 AM' },
            { sender: 'me', text: 'Yes! I’m really excited.', time: '08:01 AM' },
            { sender: 'friend', text: 'Don’t forget to bring water.', time: '08:02 AM' },
            { sender: 'me', text: 'Got it! What time are we meeting?', time: '08:03 AM' },
            { sender: 'friend', text: 'Let’s meet at 7.', time: '08:04 AM' },
            { sender: 'friend', text: 'And pack some snacks too!', time: '08:05 AM' },
            { sender: 'me', text: 'Will do! Looking forward to it.', time: '08:06 AM' },
        ],
    },
    {
        id: 7,
        friendName: 'George',
        friendPhoto: 'https://randomuser.me/api/portraits/men/4.jpg',
        messages: [
            { sender: 'friend', text: 'Hey! Have you heard about the new café?', time: '11:00 AM' },
            { sender: 'me', text: 'No, I haven’t! What’s special about it?', time: '11:01 AM' },
            { sender: 'friend', text: 'They have amazing pastries!', time: '11:02 AM' },
            { sender: 'me', text: 'That sounds delicious! Let’s check it out.', time: '11:03 AM' },
            { sender: 'friend', text: 'How about this weekend?', time: '11:04 AM' },
            { sender: 'me', text: 'Perfect! I’m free Saturday.', time: '11:05 AM' },
        ],
    },
    {
        id: 8,
        friendName: 'Hannah',
        friendPhoto: 'https://randomuser.me/api/portraits/women/4.jpg',
        messages: [
            { sender: 'friend', text: 'Did you see the concert lineup for next month?', time: '04:00 PM' },
            { sender: 'me', text: 'Not yet! Who’s performing?', time: '04:01 PM' },
            { sender: 'friend', text: 'A lot of my favorite bands!', time: '04:02 PM' },
            { sender: 'me', text: 'Let’s go together!', time: '04:03 PM' },
            { sender: 'friend', text: 'Absolutely! I’ll get the tickets.', time: '04:04 PM' },
        ],
    },
    {
        id: 9,
        friendName: 'Ivy',
        friendPhoto: 'https://randomuser.me/api/portraits/women/5.jpg',
        messages: [
            { sender: 'friend', text: 'Hey! Are you free for a call later?', time: '03:00 PM' },
            { sender: 'me', text: 'Yes, I can talk! What time?', time: '03:01 PM' },
            { sender: 'friend', text: 'How about 5 PM?', time: '03:02 PM' },
            { sender: 'me', text: 'Works for me! See you then.', time: '03:03 PM' },
        ],
    },
    {
        id: 10,
        friendName: 'Jack',
        friendPhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
        messages: [
            { sender: 'me', text: 'Are you going to the meetup next week?', time: '12:00 PM' },
            { sender: 'friend', text: 'Yes! I’m looking forward to it.', time: '12:01 PM' },
            { sender: 'me', text: 'Same here! Let’s go together.', time: '12:02 PM' },
            { sender: 'friend', text: 'Sounds like a plan!', time: '12:03 PM' },
        ],
    },
];

function InstagramLogs() {
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
        <div className="instagram-chat-container">
            <div className="chat-header">
                <h2 style = {{color: 'black', fontSize:'2rem'}}>Chats</h2>
            </div>
            <div className="chat-list">
                {chatData.map((chat) => (
                    <div key={chat.id} className="chat-item" onClick={() => toggleChat(chat)}>
                        <img src={chat.friendPhoto} alt={`${chat.friendName}'s profile`} className="profile-photo" />
                        <div className="chat-info">
                            <span style = {{color: 'black', fontSize:'1.4rem'}}className="friend-name">{chat.friendName}</span>
                            {activeChat === chat && messages.length > 0 && (
                                <span className="last-message">{messages[messages.length - 1].text}</span>
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
                                <span style = {{color: 'black', fontSize:'1.2rem'}}>{msg.text}</span>
                                <span style = {{color: 'black', fontSize:'1rem'}} className="message-time">{msg.time}</span>
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

export default InstagramLogs;
