import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css'; // Optional for custom styling
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons
//import {useNavigate} from "react-router-dom";

const reviews = [
    {
        name: "John Doe",
        date: "September 22, 2024",
        content: "This app has completely changed how I monitor my children's online activities. Highly recommend!",
        rating: 5,
    },
    {
        name: "Jane Smith",
        date: "September 20, 2024",
        content: "Great features and easy to use. It gives me peace of mind as a parent.",
        rating: 4,
    },
    {
        name: "Emily Johnson",
        date: "September 18, 2024",
        content: "Very useful tool! The GPS tracking is especially helpful.",
        rating: 4,
    },
    {
        name: "Michael Brown",
        date: "September 15, 2024",
        content: "I love the interface and the functionality. It’s a must-have app for parents!",
        rating: 5,
    },
    {
        name: "Sarah Davis",
        date: "September 12, 2024",
        content: "I found this app very helpful, but I wish there were more customization options.",
        rating: 3,
    },
    {
        name: "David Lee",
        date: "September 10, 2024",
        content: "The customer support is top-notch! They helped me resolve my issues quickly.",
        rating: 5,
    },
    {
        name: "Anna Taylor",
        date: "September 5, 2024",
        content: "I appreciate the transparency this app offers. I can finally feel secure.",
        rating: 4,
    },
    {
        name: "Chris Evans",
        date: "August 30, 2024",
        content: "The app works well, but the setup process was a bit tricky.",
        rating: 4,
    },
    {
        name: "Linda Johnson",
        date: "August 25, 2024",
        content: "Fantastic app! It really helps keep track of my kids online.",
        rating: 5,
    },
    {
        name: "Tom Hardy",
        date: "August 20, 2024",
        content: "Not bad! Some features could use improvement, but overall a good experience.",
        rating: 3,
    },
];

// Custom arrow components for the slider
const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <FaChevronRight />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        <FaChevronLeft />
    </div>
);

function Reviews() {
    // Track current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    //navigate to the sign up

  //const navigate = useNavigate();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: (current) => setCurrentSlide(current),
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="faq-section">
        <div className="review-slider-container" style={{ padding: '50px 0', textAlign: 'center' }}>
            <h2 style = {{color: 'white', fontSize: '2rem'}}>What Our Users Are Saying</h2>

            <div className="slider-wrapper" style={{ position: 'relative' }}>
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card" style={reviewCardStyle}>
                            <h3 style = {{color: 'black', fontSize: '1.4rem'}}>{review.name}</h3>
                            <p style = {{color:'lightblue', fontSize: '1.2rem'}}className="review-date">{review.date}</p>
                            <p style = {{color:'black', fontSize: '1.2rem'}} className="review-content">"{review.content}"</p>
                            <p className="review-rating">Rating: {review.rating} ⭐</p>
                        </div>
                    ))}
                </Slider>

                {/* Slide number indicator */}
                <div className="slide-number" style={slideNumberStyle}>
                    {currentSlide + 1} / {reviews.length}
                </div>
            </div>
            
        </div>
    </div>    
    
    );
}

// Inline styles for the review cards and other elements
const reviewCardStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '20px',
    minHeight: '200px', // Ensure uniform height for review cards
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

// Style for the slide number display
const slideNumberStyle = {
    position: 'absolute',
    bottom: '-30px',
    right: '50%',
    transform: 'translateX(50%)',
    fontSize: '16px',
    color: '#333',
};


export default Reviews;
