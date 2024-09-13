import React, { useEffect, useState } from 'react';
import { fetchAudioRecordings } from './api';

function AudioRecordings(){
    const [audioFiles, setAudioFiles] = useState([]);

    useEffect(() => {
        fetchAudioRecordings().then(response => setAudioFiles(response.data));
    }, []);

    return (
        <div>
            <h1>Audio Recordings</h1>
            <ul>
                {audioFiles.map((audio, index) => (
                    <li key={index}>
                        <audio controls>
                            <source src={`data:audio/3gp;base64,${audio}`} type="audio/3gp" />
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AudioRecordings;