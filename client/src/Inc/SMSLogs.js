import React, { useEffect, useState } from 'react';
import { fetchSMSLogs } from './api';

function SMSLogs(){
    const [smsLogs, setSMSLogs] = useState([]);

    useEffect(() => {
        fetchSMSLogs().then(response => setSMSLogs(response.data));
    }, []);

    return (
        <div>
            <h1>SMS Logs</h1>
            <ul>
                {smsLogs.map((sms, index) => (
                    <li key={index}>{sms.address}: {sms.body}</li>
                ))}
            </ul>
        </div>
    );
};

export default SMSLogs;
