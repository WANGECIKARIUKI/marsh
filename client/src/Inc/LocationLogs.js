import React, { useState } from 'react';
import './Location.css';
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Sample Location Data
const locationData = [
    {
        id: 1,
        name: '316 N Washington St, Watertown, WI, 54801',
        coordinates: [43.1951, -88.7306],
        date: '2024-09-01',
        time: '6:59 PM',
    },
    {
        id: 2,
        name: '134 Coolidge Ave, Watertown, WI, 54801',
        coordinates: [43.1975, -88.7323],
        date: '2024-09-01',
        time: '6:49 PM',
    },
    {
        id: 3,
        name: '813 Scribner St, Spooner, WI, 54801',
        coordinates: [45.8274, -91.8866],
        date: '2024-09-02',
        time: '6:36 PM',
    },
    {
        id: 4,
        name: '709 Deer Trl, Watertown, WI, 53094',
        coordinates: [43.1836, -88.7269],
        date: '2024-09-03',
        time: '6:25 PM',
    },
    {
        id: 5,
        name: '316 N Washington St, Watertown, WI, 54801',
        coordinates: [43.1951, -88.7306],
        date: '2024-09-04',
        time: '6:14 PM',
    },
    {
        id: 6,
        name: '50 N Main St, Watertown, WI, 53094',
        coordinates: [43.1930, -88.7324],
        date: '2024-09-05',
        time: '6:45 PM',
    },
    {
        id: 7,
        name: '124 E Main St, Watertown, WI, 53094',
        coordinates: [43.1940, -88.7335],
        date: '2024-09-06',
        time: '5:30 PM',
    },
    {
        id: 8,
        name: '890 S 3rd St, Watertown, WI, 53094',
        coordinates: [43.1895, -88.7320],
        date: '2024-09-07',
        time: '7:15 PM',
    },
    {
        id: 9,
        name: '2 S 1st St, Watertown, WI, 53094',
        coordinates: [43.1955, -88.7330],
        date: '2024-09-08',
        time: '4:55 PM',
    },
    {
        id: 10,
        name: '410 W Main St, Watertown, WI, 53094',
        coordinates: [43.1920, -88.7315],
        date: '2024-09-09',
        time: '6:00 PM',
    },
];

const customIcon = new L.Icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/003/520/480/small/location-icon-pin-point-map-outline-isolated-on-white-background-illustration-vector.jpg',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function LocationLogs() {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    const handleBackToList = () => {
        setSelectedLocation(null);
    };

    return (
        <div className="location-history-container">
            {selectedLocation ? (
                <div className="location-detail">
                    <button className="back-button" onClick={handleBackToList}>
                        <FaArrowLeft /> Back to List
                    </button>
                    <h2 style = {{color: 'black', fontSize: '1.4rem'}}>{selectedLocation.name}</h2>
                    <p style = {{color: 'black', fontSize: '2rem'}}>Date: {selectedLocation.date}</p>
                    <p style = {{color: 'black', fontSize: '2rem'}}>Time: {selectedLocation.time}</p>
                    <MapContainer
                        center={selectedLocation.coordinates}
                        zoom={13}
                        style={{ height: '300px', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={selectedLocation.coordinates} icon={customIcon}>
                            <Popup>
                                {selectedLocation.name}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            ) : (
                <div className="location-list">
                    <h1 style = {{color: 'black', fontSize: '2rem'}}>Location History</h1>
                    <ul>
                        {locationData.map((location) => (
                            <li style = {{color: 'blue', fontSize: '1.2rem'}} key={location.id} onClick={() => handleLocationClick(location)}>
                                <FaMapMarkerAlt /> {location.name} - {location.date} {location.time}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default LocationLogs;
