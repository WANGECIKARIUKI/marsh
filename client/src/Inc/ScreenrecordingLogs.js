import React from 'react';
import './ScreenRecorder.css';

// Expanded Sample Screen Recording Data
const recordingsData = [
    {
        id: 1,
        title: 'WhatsApp Chat',
        platform: 'WhatsApp',
        thumbnail: 'https://via.placeholder.com/150x100?text=WhatsApp+Recording',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    },
    {
        id: 2,
        title: 'Snapchat Stories',
        platform: 'Snapchat',
        thumbnail: 'https://via.placeholder.com/150x100?text=Snapchat+Recording',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 3,
        title: 'Messages Conversation',
        platform: 'Messages',
        thumbnail: 'https://via.placeholder.com/150x100?text=Messages+Recording',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 4,
        title: 'Instagram DMs',
        platform: 'Instagram',
        thumbnail: 'https://via.placeholder.com/150x100?text=Instagram+Recording',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 5,
        title: 'Group Chat on WhatsApp',
        platform: 'WhatsApp',
        thumbnail: 'https://via.placeholder.com/150x100?text=WhatsApp+Group+Chat',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 6,
        title: 'Snapchat Filters',
        platform: 'Snapchat',
        thumbnail: 'https://via.placeholder.com/150x100?text=Snapchat+Filters',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 7,
        title: 'TikTok Dance Challenge',
        platform: 'TikTok',
        thumbnail: 'https://via.placeholder.com/150x100?text=TikTok+Dance+Challenge',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 8,
        title: 'Facebook Story',
        platform: 'Facebook',
        thumbnail: 'https://via.placeholder.com/150x100?text=Facebook+Story',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 9,
        title: 'LinkedIn Job Interview',
        platform: 'LinkedIn',
        thumbnail: 'https://via.placeholder.com/150x100?text=LinkedIn+Interview',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 10,
        title: 'YouTube Video Editing Tutorial',
        platform: 'YouTube',
        thumbnail: 'https://via.placeholder.com/150x100?text=YouTube+Editing+Tutorial',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 11,
        title: 'Zoom Meeting Recording',
        platform: 'Zoom',
        thumbnail: 'https://via.placeholder.com/150x100?text=Zoom+Meeting+Recording',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 12,
        title: 'Skype Call',
        platform: 'Skype',
        thumbnail: 'https://via.placeholder.com/150x100?text=Skype+Call+Recording',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 13,
        title: 'Discord Game Stream',
        platform: 'Discord',
        thumbnail: 'https://via.placeholder.com/150x100?text=Discord+Game+Stream',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 14,
        title: 'Google Meet Presentation',
        platform: 'Google Meet',
        thumbnail: 'https://via.placeholder.com/150x100?text=Google+Meet+Presentation',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 15,
        title: 'Microsoft Teams Call',
        platform: 'Microsoft Teams',
        thumbnail: 'https://via.placeholder.com/150x100?text=Teams+Call+Recording',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
];

function ScreenrecordingLogs() {
    return (
        <div className="screen-recorder-container">
            <header className="recorder-header">
                <h1 style = {{color: 'black', fontSize:'2rem'}}>Screen Recordings</h1>
                <p>View your recorded screen sessions.</p>
            </header>

            <div className="recordings-list">
                {recordingsData.map(recording => (
                    <div key={recording.id} className="recording-item">
                        <img style = {{color: 'black', fontSize: '1.2rem'}}src={recording.thumbnail} alt={recording.title} className="recording-thumbnail" />
                        <div className="recording-info">
                            <h4 style = {{color: 'black', fontSize: '1.5rem'}}>{recording.title}</h4>
                            <p style = {{color: 'lightblue', fontSize: '1.2rem'}}>{recording.platform}</p>
                            <video className="recording-video" controls>
                                <source src={recording.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <a href={recording.video} download className="download-button">Download</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScreenrecordingLogs;
