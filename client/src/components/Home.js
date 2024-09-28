import React, { useState } from 'react';
import WhyChooseSlider from './WhyChooseSlider';
import Footer from './Footer';
//import { FaKeyboard, FaMapMarkerAlt, FaPhone, FaSearch, FaComments, FaTrash, FaImage } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; // Optional for additional custom styling
import FAQ from './FAQ';
import StepsToInstall from './StepstoInstall';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Reviews from './Reviews';
import {useNavigate} from "react-router-dom";


function Home(){
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  //navigate to the sign up

  const navigate = useNavigate();

  // data for features
  const features = [
    {
      title: 'Photo Viewer',
      description: 'Are they sending and receiving controversial photos? redSpy can show you what’s on their camera roll, complete with a time & date stamp to help you understand everything a little better.',
      icon: '📷',
    },
    {
      title: 'Text Message Monitoring',
      description: 'Are they constantly texting? Discover who they’re texting and what they’re saying. Every text. Every pic and video. It’s all there.',
      icon: '💬',
    },
    {
      title: 'GPS Locations Tracker',
      description: 'They deserve the freedom to explore. But you deserve to remain calm. That’s why redSpy lets you find their location on a map. You can even check their route history, so you’ll know where they’ve been in the past, too.',
      icon: '📍',
    },
    {
      title: 'Geofencing Alerts',
      description: 'Worried about where they’re going? redSpy lets you know if they enter an area you don’t approve of. Just set your safe zones on a map and get alerted when they come and go.',
      icon: '🚧',
    },
    {
      title: 'Screen Recorder',
      description: 'Now you can visually see exactly what they’re saying on their phone, in pretty much any app. redSpy regularly takes screenshots of their activity and uploads them to your Control Panel. It’s visual proof like you’ve never seen it before.',
      icon: '🎥',
    },
    {
      title: 'Browser History Monitoring',
      description: 'The Internet is huge. That’s why redSpy is designed to help guide you to where they’ve been. Just log in to your Control Panel to find out which sites they’ve visited and when they’ve visited them. And it’s just as easy to filter web content.',
      icon: '🌐',
    },
    {
      title: 'Website Bookmark Monitoring',
      description: 'Ever wonder what their favorite sites are? redSpy can show you. In one click, it’s easy to find out which sites they’ve got bookmarked in their browser.',
      icon: '🔖',
    },
    {
      title: 'Instagram Monitoring',
      description: 'The app that’s great for sharing photos is also great for chatting with strangers. With redSpy, you can find out who they’re connecting with. Now that’s a good reason to smile.',
      icon: '📸',
    },
    {
      title: 'Keylogger',
      description: 'Imagine being able to see every keystroke they type on their phone. It’s not magic. It’s redSpy. And with the included Keylogger, it’s easy to know exactly what they’re saying.',
      icon: '⌨️',
    },
    {
      title: 'Call Monitoring',
      description: 'Wondering what they’re up to when their phone rings? redSpy can help with a detailed call log, including timestamps, duration, and more.',
      icon: '📞',
    },
    {
      title: 'iMessage Monitoring',
      description: 'Do they use an iPhone? You can see the iMessages they’ve sent and received with ease. Everything’s sent right to your Control Panel, so you’ll always be in the know.',
      icon: '📱',
    },
    {
      title: 'Video Viewer',
      description: 'People love sending and receiving videos. Now you can take a look at them whenever you please. It’s a great way to make sure they aren’t saving anything controversial on their device, like violent or pornographic content.',
      icon: '🎬',
    },
    {
      title: 'Snapchat Monitoring',
      description: 'With photos that disappear, Snapchat is every person dream. And every parent’s nightmare. Find out what pics they’re sending and receiving with redSpy.',
      icon: '👻',
    },
    {
      title: 'Tinder Monitoring',
      description: 'Are they using the popular dating app to meet strangers? And are they doing it right under your nose? Find out with redSpy.',
      icon: '❤️',
    },
    {
      title: 'Contacts Viewer',
      description: 'You may know all their friends, but do you know who’s on their Contacts list? redSpy can fill you in, helping you paint a clearer picture of who they chat with on a regular basis.',
      icon: '👥',
    },
    {
      title: 'WhatsApp Monitoring',
      description: 'The popular cross-platform app makes it easy for them to text and call anyone around the world. And with redSpy, it’s even easier to know what they’re saying. Every message. Every picture. It’s all available to see with redSpy.',
      icon: '💬',
    },
    {
      title: 'Facebook Messenger Monitoring',
      description: 'Do you know all their friends on Facebook? And do you know who they’re chatting with regularly? redSpy can show you everything.',
      icon: '📘',
    },
    {
      title: 'App Viewer',
      description: 'Wondering what apps they have installed on their phone? Now you can find out without having to physically grab their device. Just log in to your Control Panel and you’ll know everything.',
      icon: '📲',
    },
    {
      title: 'Calendar Viewer',
      description: 'Are they planning something without your knowledge? Take a peek into their calendar and find out. redSpy makes it possible, all through your Control Panel.',
      icon: '📅',
    },
    {
      title: 'Remote Camera',
      description: 'Want to be there when you can’t? Activate their Android’s camera remotely and watch everything.',
      icon: '📸',
    },
    {
      title: 'Twitter Connection',
      description: 'Connect their Twitter account to your redSpy Control Panel and monitor DMs.',
      icon: '🐦',
    },
    {
      title: 'YouTube Connection',
      description: 'Concerned about what they’re watching? Check their YouTube watch history and see the truth.',
      icon: '📺',
    },
    {
      title: 'Gmail Connection',
      description: 'It’s easy to access their Gmail account. Just connect it to your Control Panel and you’ll see everything.',
      icon: '✉️',
    },
    {
      title: 'Skype Monitoring',
      description: 'The popular app is used by people all over the world. Now you can discover what they’re chatting about without standing over their shoulder.',
      icon: '🖥️',
    },
    {
      title: 'Audio Recording',
      description: 'Listen in on their real-world conversations. One click is all it takes to activate their Android’s mic remotely.',
      icon: '🎤',
    },
  ];
  
  

  // Custom Arrow components
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

  // Slider settings with custom arrows
  const featureSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
                <div className="hero-content">
                    <h1 style={{ color: 'white' }}>Welcome to RedSpy</h1>
                    <p>Your all-in-one monitoring solution.<br />
                        Know more. Worry less. That’s the power of RedSpy, <br />
                        the app that lets you find out what they’re up to on their phone and online. <br />
                        And they won’t even know you’re using it.
                    </p>
                    <button className="hero-button" onClick={() => navigate("/Signup")}>Get Started</button>
                </div>
            </section>

      {/* Add the "Why Choose Our App" slider here */}
      <WhyChooseSlider />

      <section class="truth-section">
  <h2 style={{ color: 'white', fontSize: '2rem' }}>Stop relying on a hunch. Find out the truth.</h2>
  <div class="truth-cards-container">
    <div class="truth-card">
      <span class="truth-emoji">⌨️</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>Monitor every keystroke & every tap</p>
    </div>
    <div class="truth-card">
      <span class="truth-emoji">📍</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>See where they’ve been and where they’re going</p>
    </div>
    <div class="truth-card">
      <span class="truth-emoji">📞</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>Find out who they’ve called</p>
    </div>
    <div class="truth-card">
      <span class="truth-emoji">🔍</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>See what they’ve searched for</p>
    </div>
    <div class="truth-card">
      <span class="truth-emoji">💬</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>Read their social media chats</p>
    </div>
    <div class="truth-card">
      <span class="truth-emoji">✉️</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>Review their texts (including deleted messages)</p>
    </div>
    <div class="truth-card">
      <span class="truth-emoji">📸</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>See the pics they share and receive</p>
    </div>
    <div class="truth-card">
      <span class="truth-emoji">🕵️</span>
      <p style={{ color: 'black', fontSize: '1.2rem' }}>Do it all without being detected</p>
    </div>
    <button className="hero-button" onClick={() => navigate("/Signup")}>Get Started</button>
  </div>
</section>

      {/* Features Section with Slider */}
      <section className="features-section" style={sectionStyle}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2rem' }}>Dozens of Features. One App</h2>
          <p style = {{fontSize: '1.4rem'}}>redSpy is more than an app. It's the key to the internet, and it's yours to help you unlock their digital world, find out the truth, and rest a little easier.</p>
          <div className="slider-wrapper" style={{ position: 'relative' }}>
            <Slider {...featureSliderSettings}>
              {features.map((feature, index) => (
                <div key={index} className="feature-card" style={cardStyle}>
                  <div className="feature-icon" style={featureIconStyle}>
                    {feature.icon}
                  </div>
                  <h3 style={{ color: 'lightblue', fontSize: '1.4rem' }}>{feature.title}</h3>
                  <p style = {{color: 'black', fontSize: '1.2rem'}}>{feature.description}</p>
                </div>
              ))}
            </Slider>

            {/* Slide Number Indicator */}
            <div className="slide-number">
              {currentSlide + 1} / {features.length}
            </div>
          </div>
        </div>
      </section>

      {/* Steps to install Section */}

      <StepsToInstall/>

      {/* Suited Section */}
      <section className="about-section" style={{ ...sectionStyle, backgroundColor: '#f9f9f9' }}>
      <div className="suited-section">
      <h2 style={{ color: 'white', fontSize: '2rem' }}>redSpy Is Suited for Any Device</h2>
      <div className="devices-container">
        {/* Android Card */}
        <div className="device-card">
          <span role="img" aria-label="Android" className="device-icon">🤖</span>
          <h3 style={{ color: 'black' }}>Android</h3>
          <div className="features">
            <p style={{ color: 'black', fontSize: '1.2rem' }}><span role="img" aria-label="phone">📱</span> Physical access required</p>
            <p style={{ color: 'black', fontSize: '1.2rem' }}><span role="img" aria-label="wrench">🔧</span> Installs directly on the phone</p>
            <p style={{ color: 'black', fontSize: '1.2rem' }}><span role="img" aria-label="chat">💬</span> Social media monitoring without rooting</p>
            <p style={{ color: 'black', fontSize: '1.2rem' }}><span role="img" aria-label="toolbox">🛠</span> Works in the background</p>
          </div>
        </div>

        {/* iPhone Card */}
        <div className="device-card">
          <span role="img" aria-label="iPhone" className="device-icon">📱</span>
          <h3 style={{ color: 'black' }}>iPhone</h3>
          <div className="features">
            <p><span role="img" aria-label="key">🔑</span> Physical access or iCloud credentials required</p>
            <p><span role="img" aria-label="rocket">🚀</span> More mSpy features for jailbroken devices</p>
            <p><span role="img" aria-label="shopping">🛍</span> Lite version available on the App Store</p>
            <p><span role="img" aria-label="toolbox">🛠</span> Works in the background</p>
          </div>
        </div>
      </div>
      <button className="hero-button" onClick={() => navigate("/Signup")}>Get Started</button>
    </div>
      </section>

      {/* reviews section */}
      <Reviews />

      {/* faq section */}
      <FAQ />

      {/*Footer section */}
      <Footer />
      
    </div>
  );
};

// Inline styles for quick styling
const heroContentStyle = {
  textAlign: 'center',
};

const ctaButtonStyle = {
  backgroundColor: '#0000ff',
  border: 'none',
  padding: '10px 20px',
  color: '#fff',
  fontSize: '18px',
  cursor: 'pointer',
  borderRadius: '5px'
};

const sectionStyle = {
  padding: '50px 0',
  textAlign: 'center',
  fontFamily: 'sans-serif', 
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px',
  textAlign: 'center'
};

const featureIconStyle = {
  fontSize: '40px',
  marginBottom: '10px',
};

export default Home;
