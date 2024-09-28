import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Demo() {
    const [activeTab, setActiveTab] = useState('messages');
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate(); // Hook for navigation

    // Dummy Data
    const messages = [
        { id: 1, sender: 'John Doe', message: 'Hey, are you there?', time: '10:00 AM' },
        { id: 2, sender: 'Jane Smith', message: 'Don’t forget our meeting!', time: '10:30 AM' },
        { id: 3, sender: 'Tom Brown', message: 'Can you send me the files?', time: '11:00 AM' },
    ];

    const calls = [
        { id: 1, caller: 'John Doe', type: 'Incoming', time: '10:15 AM' },
        { id: 2, caller: 'Jane Smith', type: 'Outgoing', time: '10:45 AM' },
        { id: 3, caller: 'Tom Brown', type: 'Missed', time: '11:30 AM' },
    ];

    const contacts = [
        { id: 1, name: 'John Doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', phone: '234-567-8901' },
        { id: 3, name: 'Tom Brown', phone: '345-678-9012' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'messages':
                return (
                    <div style={styles.content}>
                        {messages.map(msg => (
                            <div key={msg.id} style={styles.item}>
                                <strong>{msg.sender}</strong>: {msg.message} <span style={styles.time}>{msg.time}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'calls':
                return (
                    <div style={styles.content}>
                        {calls.map(call => (
                            <div key={call.id} style={styles.item}>
                                <strong>{call.caller}</strong> - {call.type} <span style={styles.time}>{call.time}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'contacts':
                return (
                    <div style={styles.content}>
                        {contacts.map(contact => (
                            <div key={contact.id} style={styles.item}>
                                <strong>{contact.name}</strong>: {contact.phone}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    const handleProceed = () => {
        setShowModal(false); // Close the modal
        // Simulate demo completion, then navigate to Pricing
        setTimeout(() => {
            navigate('/Pricing'); // Navigate to the Pricing component
        }, 1000); // Delay for demo experience (1 second)
    };

    return (
        <div style={styles.container}>
            {showModal ? (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h3>Live Demo Disclaimer</h3>
                        <p>
                            This live demo will use data from the mobile phone accessing it. 
                            Please proceed if you understand and accept this.
                        </p>
                        <div style={styles.modalButtons}>
                            <button onClick={handleProceed} style={styles.button}>Proceed to Live Demo</button>
                            <button onClick={() => navigate('/Pricing')} style={styles.button}>Leave Live Demo</button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <h2>Live Demo</h2>
                    <div style={styles.tabs}>
                        <button onClick={() => setActiveTab('messages')} style={styles.tabButton(activeTab === 'messages')}>Messages</button>
                        <button onClick={() => setActiveTab('calls')} style={styles.tabButton(activeTab === 'calls')}>Calls</button>
                        <button onClick={() => setActiveTab('contacts')} style={styles.tabButton(activeTab === 'contacts')}>Contacts</button>
                    </div>
                    {renderContent()}
                </>
            )}
        </div>
    );
}

// Inline Styles
const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    tabs: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
    },
    tabButton: (active) => ({
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: active ? '#007bff' : '#f0f0f0',
        color: active ? 'white' : '#333',
        cursor: 'pointer',
        fontWeight: active ? 'bold' : 'normal',
    }),
    content: {
        borderTop: '1px solid #ccc',
        paddingTop: '10px',
    },
    item: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #f0f0f0',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    time: {
        float: 'right',
        fontSize: '12px',
        color: 'gray',
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    modalButtons: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    },
    button: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
};

export default Demo;
