import React, {useState, useRef,useEffect} from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 import './Dashboard.css';
 import image20 from './images/image20.png';
 import './Home.css';
 import styled from 'styled-components';
 import Card from './Card';
 import Footer from './Footer';



function Dashboard() {

    const data = [
        {
          name: '11-05-2024',
          Texts: 4000,
          Gps: 2400,
          Browser: 2400,
          Whatsapp: 3500,
        },
        {
          name: '13-07-2024',
          Texts: 3000,
          Gps: 1398,
          Browser: 2210,
          Whatsapp: 1900,
        },
        {
          name: '20-07-2024',
          Texts: 2000,
          Gps: 9800,
          Browser: 2290,
          Whatsapp: 2290,
        },
        {
          name: '13-08-2024',
          Texts: 2780,
          Gps: 3908,
          Browser: 2000,
          Whatsapp: 2000,
        },
        {
          name: '17-08-2024',
          Texts: 1890,
          Gps: 4800,
          Browser: 2181,
          Whatsapp: 1290,
        },
        {
          name: '03-09-2024',
          Texts: 2390,
          Gps: 3800,
          Browser: 2500,
          Whatsapp: 2700,
        },
        {
          name: '11-09-2024',
          Texts: 3490,
          Gps: 4300,
          Browser: 2100,
          Whatsapp: 3490,
        },
      ];

      const [zoomLevel, setZoomLevel] = useState(1);
  const imageRef = useRef(null);

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => prevZoom + 3);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => prevZoom - 3);
  };

  const handleResetZoom = () => {
    setZoomLevel(3);
  };

  const handleImageLoad = () => {
    // Adjust zoom level based on image dimensions and container size
    const image = imageRef.current;
    const containerWidth = image.parentNode.clientWidth;
    const containerHeight = image.parentNode.clientHeight;
    const imageWidth = image.width;
    const imageHeight = image.height;

    if (imageWidth > containerWidth || imageHeight > containerHeight) {
      const scaleX = containerWidth / imageWidth;
      const scaleY = containerHeight / imageHeight;
      setZoomLevel(Math.min(scaleX, scaleY));
    }
  };
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.style.top = '50px';
    textRef.current.style.left = '100px';
  }, []);

     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3 style = {{color:"red", fontSize: "2rem"}}>Device Dashboard</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Number of Contacts</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>50</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Average Number of Calls Daily </h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Number of Events Pending</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Social Media Apps</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>8</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Texts" fill="#8884d8" />
                <Bar dataKey="Gps" fill="#82ca9d" />
                <Bar dataKey="Browser" fill="#8884d8" />
                <Bar dataKey="Whatsapp" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Texts" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Gps" stroke="#82ca9d" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="Browser" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Whatsapp" stroke="#82ca9d" activeDot={{ r: 8 }}/>
                </LineChart>
            </ResponsiveContainer>

            

        </div>
        <div className = "container">

        <h1 style = {{padding: "10px", color : "red", marginRight: "1020px"}}>Last Location</h1>
        

            <img  className="hero5" src = {image20} 
            alt = "Zoomable image"
            ref = {imageRef}
            style={{
              transform: `scale(${zoomLevel})`,
              cursor: zoomLevel === 3 ? 'zoom-in' : 'zoom-out',

        }} 
        onClick = {() => {
          if (zoomLevel === 1){
            handleZoomIn();
          }else {
            handleZoomOut();
          }
        }}
        />
        <p  ref = {textRef}className  = "words"style = {{color : "black", fontSize : "1.5rem", marginRight : "500px", fontFamily: "sans-serif", marginBottom: "100px", paddingBottom: "100px", justifyContent: "space-between", margin: "var(--spacing-small)0", padding: "var(--spacing-small) var(--spacing-medium)", lineHeight: "1.5"}}>
        105 Next Gen, Mombasa Rd, KE 0036, Kenya June 10, 2024 15:30 <br />
        2506 Katani Road, Machakos, KE 0045, Kenya April 23, 2024 10:45 <br />
        1250 Uhuru Gardens, Langata Road, KE 0023, Kenya May 10, 19:00 <br />
        0600 Rongai, Magadi Road, KE 2300, Kenya May 15, 23:47 <br />
        </p>
        </div>
        <Footer />   
    </main>
  )
}

export default Dashboard;

const Container = styled.div`
width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
    font-weight: bolder;
    color: coral;
    font-size: 3rem;
  }
    h2 {
    padding-top: 1rem;
    font-weight: 700;
    color: purple;
  }`;


const Cards = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
margin-top: 4rem;
gap: 1rem; 
`;