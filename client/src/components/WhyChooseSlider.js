// WhyChooseSlider.js
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './WhyChooseSlider.css'; // Optional for custom styling

const WhyChooseSlider = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dummy data for reasons to choose the app
  const reasons = [
    { title: 'Fast Performance', description: 'Experience blazing fast speeds with redSpy 🚀.', emoji: '🚀' },
    { title: 'User-Friendly', description: 'Our app is designed with simplicity and ease of use in mind 😊.', emoji: '😊' },
    { title: 'Secure & Reliable', description: 'Your data is safe with our top-level security 🔒.', emoji: '🔒' },
    { title: 'Works on your favorite device', description: 'Compatible with any device, no matter what operating system you and your family use.', emoji: '🖥️' },
    { title: 'Opt for seamless monitoring', description: 'With redSpy, you can keep them safe without being detected.', emoji: '🕒' },
    { title: 'Get your money’s worth', description: '30+ advanced monitoring features and more rolling out all the time.', emoji: '💰' },
    { title: 'Stay Updated', description: 'Updates as often as every 5 minutes with bank-grade encryption.', emoji: '🔄' },
    { title: 'Enjoy Special Deals', description: 'Get an exclusive discount on your first purchase!', emoji: '🎉' },
    { title: 'Customizable', description: 'Tailor the app to your needs with endless customization ⚙️.', emoji: '⚙️' }
  ];

  // Custom Arrows for the slider
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      →
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      ←
    </div>
  );

  // Slider settings with custom arrows and number tracking
  const sliderSettings = {
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
    <section className="why-choose-section" style={{ padding: '50px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style = {{fontSize: '2rem'}}>Why Choose redSpy?</h2>

        <div className="slider-wrapper" style={{ position: 'relative' }}>
          <Slider {...sliderSettings}>
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card" style={reasonCardStyle}>
                <div className="emoji" style={emojiStyle}>{reason.emoji}</div>
                <h3 style={{ color: 'lightblue', fontSize: '1.4rem' }}>{reason.title}</h3>
                <p style={{ color: 'black', fontSize: '1.2rem' }}>{reason.description}</p>
              </div>
            ))}
          </Slider>

          {/* Slide number indicator */}
          <div className="slide-number" style={slideNumberStyle}>
            {currentSlide + 1} / {reasons.length}
          </div>
        </div>
      </div>
    </section>
  );
};

// Inline styles for quick styling
const reasonCardStyle = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  margin: '20px',
  minHeight: '200px', // Set minimum height for uniformity
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const emojiStyle = {
  fontSize: '50px',
  marginBottom: '20px',
};

// Slide number style
const slideNumberStyle = {
  position: 'absolute',
  bottom: '-30px',
  right: '50%',
  transform: 'translateX(50%)',
  fontSize: '16px',
  color: '#333',
};
export default WhyChooseSlider;
