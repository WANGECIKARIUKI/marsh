import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Sample Data
const websiteData = [
    { name: 'Google', date: '2024-09-01', value: 3 },
    { name: 'Facebook', date: '2024-09-01', value: 2 },
    { name: 'YouTube', date: '2024-09-02', value: 4 },
];

const messagingData = [
    { name: 'Alice', date: '2024-09-01', value: 2 },
    { name: 'Bob', date: '2024-09-01', value: 3 },
    { name: 'Charlie', date: '2024-09-02', value: 4 },
];

const callingData = [
    { name: 'John', date: '2024-09-01', value: 2 },
    { name: 'Mary', date: '2024-09-01', value: 3 },
    { name: 'Tom', date: '2024-09-02', value: 1 },
    
];

const browsingHistoryData = [
    { name: 'Page A', date: '2024-09-01', value: 3 },
    { name: 'Page B', date: '2024-09-01', value: 2 },
    { name: 'Page C', date: '2024-09-02', value: 4 },
];

const gpsData = [
    { name: 'Location A', date: '2024-09-01', value: 2 },
    { name: 'Location B', date: '2024-09-01', value: 3 },
    { name: 'Location C', date: '2024-09-02', value: 4 },
];

const textMessageData = [
    { name: 'Message A', date: '2024-09-01', value: 3 },
    { name: 'Message B', date: '2024-09-01', value: 1 },
    { name: 'Message C', date: '2024-09-02', value: 4 },
];

const whatsappData = [
    { name: 'WhatsApp A', date: '2024-09-01', value: 2 },
    { name: 'WhatsApp B', date: '2024-09-01', value: 1 },
    { name: 'WhatsApp C', date: '2024-09-02', value: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042'];
const customIcon = new L.Icon({
    iconUrl: "https://static.vecteezy.com/system/resources/thumbnails/003/520/480/small/location-icon-pin-point-map-outline-isolated-on-white-background-illustration-vector.jpg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <h4>{label}</h4>
                {payload.map((data, index) => (
                    <p key={`data-${index}`}>{`${data.name}: ${data.value}`}</p>
                ))}
            </div>
        );
    }
    return null;
};

function Dashboard() {

    // State for sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to navigate to the sign-up page
    const addNewDevice = () => {
        navigate('/Signup'); //sign-up route
    };

    const navigate = useNavigate();

    // State for last known locations
    const [lastLocations, setLastLocations] = useState([
        { id: 1, name: "316 N Washington St, Watertown, WI, 54801 - Apr 9, 2020 6:59 PM", coordinates: [43.1951, -88.7306] },
        { id: 2, name: "134 Coolidge Ave, Watertown, WI, 54801 - Apr 8, 2020 6:49 PM", coordinates: [43.1975, -88.7323] },
        { id: 3, name: "813 Scribner St, Spooner, WI, 54801 - Apr 10, 2020 6:36 PM", coordinates: [45.8274, -91.8866] },
        { id: 4, name: "709 Deer Trl, Watertown, WI, 53094 - Apr 9, 2020 6:25 PM", coordinates: [43.1836, -88.7269] },
        { id: 5, name: "316 N Washington St, Watertown, WI, 54801 - Apr 9, 2020 6:14 PM", coordinates: [43.1951, -88.7306] },
    ]);

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
                <div className="sidebar-logo">
                    <h2 style={{ color: 'white' }}>Dashboard</h2>
                </div>
                {/* Target Device Section */}
                <div className="nav-section">
                        <h4>Target Device</h4>
                        <button className="add-device-button" onClick={addNewDevice}>Add New Device</button>
                 </div>
                <nav className="nav-links">
                    <a href="/" className="nav-item active"><FaHome /> Home</a>
                    <a href="/profile" className="nav-item"><FaUser /> Profile</a>
                    <a href="/logout" className="nav-item"><FaSignOutAlt /> Logout</a>

                    {/* Other Navbar Links */}
                    <div className="nav-section">
                        <h4>General Features</h4>
                        <a href="/BrowserLogs" className="nav-item">Browser Logs</a>
                        <a href="/ContactLogs" className="nav-item">Contact Logs</a>
                        <a href="/SMSLogs" className="nav-item">SMS</a>
                        <a href="/CallLogs" className="nav-item">Call Logs</a>
                        <a href="/LocationLogs" className="nav-item">Location Log</a>
                        <a href="/ScreenrecordingLogs" className="nav-item">Screenrecorder Logs</a>
                        <a href="/AudioRecordings" className="nav-item">Audio Recordings</a>
                        <a href="/PhotosLogs" className="nav-item">Photos Log</a>
                        <a href="/TwitterLogs" className="nav-item">Twitter Logs</a>
                        <a href="/WhatsappLogs" className="nav-item">Whatsapp Logs</a>
                        <a href="/SnapchatLogs" className="nav-item">Snapchat Logs</a>
                        <a href="/InstagramLogs" className="nav-item">Instagram Logs</a>
                        <a href="/Events" className="nav-item">Events</a>
                    </div>

                    
                </nav>
            </aside>

            {/* Main Dashboard Area */}
            <div className="dashboard-main">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-user" onClick={() => navigate('/profile')}>
                        <span style={{ color: 'white' }}>Hello, User</span>
                        <img src="user-avatar.jpg" alt="User Avatar" className="user-avatar" />
                    </div>
                    <button id="toggle-sidebar" className="toggle-button" onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}
                    </button>
                </header>

                {/* Main Content Area */}
                <div className="dashboard-content">
                    {/* Your existing content here */}
                    {/* Most Visited Websites, Messaging Contacts, and Calling Numbers Chart */}
                    <div className="content-panel">
                        <h3 style={{ color: 'black' }}>Most Visited Websites, Messaging Contacts, and Calling Numbers</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={[...websiteData, ...messagingData, ...callingData]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar dataKey="value" fill="#0088FE" name="Websites" />
                                <Bar dataKey="value" fill="#00C49F" name="Messaging" />
                                <Bar dataKey="value" fill="#FFBB28" name="Calls" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Browsing History, GPS Location, Text Messages, and WhatsApp Chart */}
                    <div className="content-panel">
                        <h3 style={{ color: 'black' }}>Browsing History, GPS Location, Text Messages, and WhatsApp</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={[...browsingHistoryData, ...gpsData, ...textMessageData, ...whatsappData]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar dataKey="value" fill="#FF8042" name="Browsing History" />
                                <Bar dataKey="value" fill="#A52A2A" name="GPS" />
                                <Bar dataKey="value" fill="#5F9EA0" name="Text Messages" />
                                <Bar dataKey="value" fill="#4682B4" name="WhatsApp" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Last Location Map */}
                    <div className="content-panel map-section">
                        <h3 className="chart-title">Last Known Location</h3>
                        <div className="map-and-locations">
                            {/* Map Container */}
                            <MapContainer
                                center={[40.7128, -74.0060]} // Default New York coordinates
                                zoom={13}
                                style={{ height: "400px", width: "100%" }} // 100% width for mobile view
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {lastLocations.map(location => (
                                    <Marker key={location.id} position={location.coordinates} icon={customIcon}>
                                        <Popup>
                                            Last known location: {location.name} <br /> Coordinates: {location.coordinates[0]}° N, {location.coordinates[1]}° W
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>

                            {/* Locations List */}
                            <div className="last-locations-list">
                                <h4 style={{ color: 'black' }}>Last Known Locations:</h4>
                                <ul>
                                    {lastLocations.map(location => (
                                        <li key={location.id}>
                                            {location.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;



/* for real time data use 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [websiteData, setWebsiteData] = useState([]);
    const [messagingData, setMessagingData] = useState([]);
    const [callingData, setCallingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const websiteResponse = await axios.get('http://127.0.0.1:5000/api/website_data');
                setWebsiteData(websiteResponse.data);

                const messagingResponse = await axios.get('http://127.0.0.1:5000/api/messaging_data');
                setMessagingData(messagingResponse.data);

                const callingResponse = await axios.get('http://127.0.0.1:5000/api/calling_data');
                setCallingData(callingResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Render your charts and data here using websiteData, messagingData, and callingData */
           {/* </div>
        );
    };
    
    export default Dashboard;
    */}
