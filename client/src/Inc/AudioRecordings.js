import React from 'react';
import './AudioRecordings.css';

// Sample Data for Phone Recordings
const audioData = [
    { id: 1, name: 'Call with Alice', file: '/path/to/phone_recording1.mp3', duration: '3:15', date: '2024-09-26' },
    { id: 2, name: 'Meeting Notes', file: '/path/to/phone_recording2.mp3', duration: '5:42', date: '2024-09-25' },
    { id: 3, name: 'Voice Memo', file: '/path/to/phone_recording3.mp3', duration: '2:10', date: '2024-09-24' },
    { id: 4, name: 'Call with Sis', file: '/path/to/phone_recording4.mp3', duration: '4:05', date: '2024-09-23' },
    { id: 5, name: 'Feedback from Customer', file: '/path/to/phone_recording5.mp3', duration: '3:30', date: '2024-09-22' },
    { id: 6, name: 'Family Gathering', file: '/path/to/phone_recording6.mp3', duration: '7:15', date: '2024-09-21' },
    { id: 7, name: 'Work Meeting', file: '/path/to/phone_recording7.mp3', duration: '6:05', date: '2024-09-20' },
    { id: 8, name: 'Call with Wife', file: '/path/to/phone_recording8.mp3', duration: '4:45', date: '2024-09-19' },
    { id: 9, name: 'Voice Memo on Project', file: '/path/to/phone_recording9.mp3', duration: '2:55', date: '2024-09-18' },
    { id: 10, name: 'Interview Recording', file: '/path/to/phone_recording10.mp3', duration: '8:20', date: '2024-09-17' },
];

function AudioRecordings() {
    return (
        <div className="audio-recordings-container">
            <h1 style = {{color: 'black', fontSize: '2rem'}}>Audio Recordings</h1>
            <div className="recordings-list">
                {audioData.map(recording => (
                    <div key={recording.id} className="recording-item">
                        <h4 style = {{color: 'blue', fontSize: '1.2rem'}}>{recording.name}</h4>
                        <audio controls>
                            <source src={recording.file} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
                        <div className="recording-details">
                            <span style = {{color: 'black', fontSize: '1rem'}}>Duration: {recording.duration}</span>
                            <span style = {{color: 'black', fontSize: '1rem'}}>Date: {recording.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AudioRecordings;
