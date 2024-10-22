import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar


function FrontPage() {
  const navigate = useNavigate();

  const frontPageStyles = {
    container: {
      position: 'relative',
      zIndex: '1', // Ensure content is above the background
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '50px 0 20px 50px',
      height: '100vh',
      background: 'linear-gradient(180deg, #333333 0%, #3F3F3F 100%)', // Subtle gradient from #333 to black
      overflowX: 'hidden',  // Prevent horizontal scrolling

    },
    content: {
      flex: 1,
      paddingRight: '20px',
      zIndex: '1', // Content will stay above the background
    },
    heading: {
      fontSize: '4rem',
      marginBottom: '10px',
      color: "#ffffff"
    },
    text: {
      fontSize: '1.5rem',
      marginBottom: '50px',
      color: "#ffffff"
    },
    button: {
      padding: '15px 30px',
      fontSize: '1.2rem',
      backgroundColor: '#40C18F',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    imageContainer: {
      flex: 1,
      textAlign: 'center',
      marginRight: '-120px',
    },
    image: {
      maxWidth: '70%',
      height: 'auto',
      marginRight: '0',
    },
  };

  return (
    <>
      {/* Add Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div style={frontPageStyles.container}>
        <div style={frontPageStyles.content}>
          <h1 style={frontPageStyles.heading}>LEARN REACT TECH STACK AND GET A JOB</h1>
          <p style={frontPageStyles.text}>
            This course will help you learn all the essential technologies to get a job working with React.
          </p>
          <button
            style={frontPageStyles.button}
            onClick={() => navigate('/other')}
          >
            Get Started
          </button>
        </div>
        
        <div style={frontPageStyles.imageContainer}>
          <img
            src={process.env.PUBLIC_URL + '/lr_imageHero.png'}
            alt="heroImage"
            style={frontPageStyles.image}
          />
        </div>
      </div>
    </>
  );
}


export default FrontPage;
