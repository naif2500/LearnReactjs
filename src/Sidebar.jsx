import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const styles = {
    sidebar: {
      height: 'calc(100vh - 60px)', // Adjust the height to account for the navbar
      width: '200px',
      position: 'fixed',
      top: '60px', // Position the sidebar below the navbar
      left: 0,
      backgroundColor: '#333',
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    linkItem: {
      margin: '15px 0',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.sidebar}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={styles.linkItem}><Link to="/counter" style={styles.link}>Counter</Link></li>
        <li style={styles.linkItem}><Link to="/calculator" style={styles.link}>Calculator</Link></li>
        <li style={styles.linkItem}><Link to="/todoapp" style={styles.link}>ToDoApp</Link></li>
        <li style={styles.linkItem}><Link to="/formcomponent" style={styles.link}>FormComponent</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
