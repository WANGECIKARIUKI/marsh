import React, { useEffect, useState } from 'react';
import { fetchCameraCaptures } from './api';

function CameraCapture(){
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchCameraCaptures().then(response => setPhotos(response.data));
    }, []);

    return (
        <div>
            <h1>Camera Captures</h1>
            <ul>
                {photos.map((photo, index) => (
                    <li key={index}>
                        <img src={`data:image/jpeg;base64,${photo}`} alt={`Capture ${index}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CameraCapture;
