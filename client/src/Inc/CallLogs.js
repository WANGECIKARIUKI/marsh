import React, { useEffect, useState } from 'react';
import { fetchCallLogs } from './api';

function CallLogs(){
    const [callLogs, setCallLogs] = useState([]);

    useEffect(() => {
        fetchCallLogs().then(response => setCallLogs(response.data));
    }, []);

    return (
        <div>
            <h1>Call Logs</h1>
            <ul>
                {callLogs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default CallLogs;
