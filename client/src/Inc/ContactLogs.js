import React, { useEffect, useState } from 'react';
import { fetchContacts } from './api';

function ContactLogs(){
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts().then(response => setContacts(response.data));
    }, []);

    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>{contact.name}: {contact.number}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContactLogs;