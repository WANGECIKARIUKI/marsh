import React, { useState } from 'react';
import './Photos.css';
import { FaArrowLeft } from 'react-icons/fa';

// Sample Photo Data without titles
const photoData = [
    { id: 1, url: 'https://i.pinimg.com/236x/5a/d2/9c/5ad29c409321841e773c9747c1f9e1ef.jpg' },
    { id: 2, url: 'https://i.pinimg.com/564x/3d/c9/b0/3dc9b00844b0baef08f816acc307b2e2.jpg' },
    { id: 3, url: 'https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5cdafeb7fe020c048fdb24f3_05_pinterest_longpress_pin.png' },
    { id: 4, url: 'https://www.shutterstock.com/image-photo/adults-partake-tug-war-contest-600nw-2459087245.jpg' },
    { id: 5, url: 'https://images.squarespace-cdn.com/content/v1/51e7ab7de4b0cfebaa144bcf/e9041c3b-2d19-434f-a5ad-8b81f4a79d27/SC0023Web.jpg' },
    { id: 6, url: 'https://cdn.greenvelope.com/blog/wp-content/uploads/group-of-women-having-a-picnic-at-a-beach.jpeg' },
    { id: 7, url: 'https://hunterpremo.com/wp-content/uploads/2021/05/fam2.jpg.webp' },
    { id: 8, url: 'https://i.pinimg.com/736x/8d/5f/01/8d5f01df879c23796ddb76ddba88a185.jpg' },
    { id: 9, url: 'https://t3.ftcdn.net/jpg/04/92/47/92/360_F_492479287_LnwG377C8CoYpQ6vxnSj09Ulzs7VBXPN.jpg' },
    { id: 10, url: 'https://i.pinimg.com/736x/16/c1/44/16c144b5bcae551d8e6819ffab3fa436.jpg' },
    { id: 11, url: 'https://i.pinimg.com/474x/60/24/b5/6024b5f63af1ba0b170db2f2737e27f0.jpg' },
    { id: 12, url: 'https://i.pinimg.com/736x/fc/bd/e1/fcbde13ef211e2da549df69d30e2fb9e.jpg' },
    { id: 13, url: 'https://i.pinimg.com/564x/3e/81/95/3e8195f1b38fcde5c36b90b5810c5481.jpg' },
    { id: 14, url: 'https://i.pinimg.com/736x/40/14/3f/40143f81e17332e35acc6c02cdf5b08c.jpg' },
    { id: 15, url: 'https://worldadventurists.com/wp-content/uploads/2022/07/cultus-lake-adventure-park-pinterest--867x1300.png' },
    { id: 16, url: 'https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1280,q_auto:eco/v1433545038/rmjdwgjhfjw10fhqjmuh.jpg' },
    { id: 17, url: 'https://i.pinimg.com/736x/8a/39/e3/8a39e33f416f5e186e5c48a8bea1fd69.jpg' },
    { id: 18, url: 'https://www.shutterstock.com/image-photo/backview-supporting-cheering-soccer-fans-260nw-2333613615.jpg' },
    { id: 19, url: 'https://img.freepik.com/premium-photo/visually-enticing-shot-art-exhibition-with-various-creative-works-display_933496-14828.jpg' },
    { id: 20, url: 'https://www.shutterstock.com/image-photo/summer-festival-crowd-view-girl-600nw-622013237.jpg' },
];

function PhotosLogs() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [timestamp, setTimestamp] = useState('');

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
        // Set the timestamp when a photo is clicked
        const currentTimestamp = new Date().toLocaleString();
        setTimestamp(currentTimestamp);
    };

    const handleBackToList = () => {
        setSelectedPhoto(null);
        setTimestamp('');  // Reset timestamp
    };

    return (
        <div className="photo-gallery-container">
            {selectedPhoto ? (
                <div className="photo-detail">
                    <button className="back-button" onClick={handleBackToList}>
                        <FaArrowLeft /> Back to List
                    </button>
                    <img
                        src={selectedPhoto.url}
                        alt={`Photo ${selectedPhoto.id}`}
                        className="photo-detail-image"
                    />
                    <div className="photo-options">
                        <a href={selectedPhoto.url} download={`photo-${selectedPhoto.id}`}>
                            <button className="download-button">Download Photo</button>
                        </a>
                        <p className="timestamp">Viewed on: {timestamp}</p>
                    </div>
                </div>
            ) : (
                <div className="photo-list">
                    <h1 style = {{color: 'black', fontSize: '2rem'}}>Photo Gallery</h1>
                    <div className="photo-grid">
                        {photoData.map(photo => (
                            <div key={photo.id} className="photo-item" onClick={() => handlePhotoClick(photo)}>
                                <img
                                    src={photo.url}
                                    alt={`Photo ${photo.id}`}
                                    className="photo-thumbnail"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PhotosLogs;
