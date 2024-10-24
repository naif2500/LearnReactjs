import React from 'react';
import logo from './logo.png'; // Adjust the path if your logo is in a different folder

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333333',
      padding: '25px 25px',
      width: '100%', // Make the navbar extend the full width of the screen
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
    },
    logo: {
      width: '200px', // Set the width to the desired size
      height: 'auto', // Set the height to auto to maintain aspect ratio
    },
    profile: {
      height: '40px',
      borderRadius: '50%',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      
    </nav>
  );
};

export default Navbar;
