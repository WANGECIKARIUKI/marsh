import React, { useEffect, useState } from 'react';
import { fetchLocationLogs } from './api';

function LocationLogs(){
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocationLogs().then(response => setLocations(response.data));
    }, []);

    return (
        <div>
            <h1>Location Logs</h1>
            <ul>
                {locations.map((location, index) => (
                    <li key={index}>{location.latitude}, {location.longitude} at {location.timestamp}</li>
                ))}
            </ul>
        </div>
    );
};

export default LocationLogs;
