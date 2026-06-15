import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import myLogo from '../Assets/logo.png';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState('SYEDA KAINAT ZAHRA');
  const [email, setEmail] = useState('syedakainatzahra@gmail.com');

  useEffect(() => {
    const savedName = localStorage.getItem('profileName');
    const savedEmail = localStorage.getItem('profileEmail');
    
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
  }, [location]);

  const getInitials = (userName) => {
    if (!userName) return '??';
    return userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Students', path: '/students' },
    { name: 'Courses', path: '/courses' },
    { name: 'Attendance', path: '/attendance'},
    { name: 'Settings', path: '/settings' } 
  ];

  const styles = {
    sidebar: { 
      width: '260px', 
      height: '100vh', 
      backgroundColor: '#1e1c74', 
      color: '#334155', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      position: 'fixed', 
      left: 0, 
      top: 0, 
      boxShadow: '2px 0 12px rgba(0,0,0,0.05)', 
      fontFamily: 'system-ui, sans-serif',
      borderRight: '1px solid #e2e8f0'
    },
    topSection:
     { padding: '24px 20px' },
    logoContainer:
     { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingLeft: '8px' },
    logoImage: 
    { width: '38px', height: '38px', objectFit: 'contain',borderRadius:'5px' },
    logoText: 
    { fontSize: '1.25rem', fontWeight: '700', color: '#0751ff', margin: 0, letterSpacing: '0.5px' },
    navList: 
    { listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' },
    
    
    navItem: { 
      display: 'flex', 
      alignItems: 'center', 
      gap: '14px', 
      padding: '12px 16px', 
      borderRadius: '8px', 
      cursor: 'pointer', 
      fontSize: '0.95rem', 
      fontWeight: '500', 
      color: '#64748b',
      transition: 'all 0.2s ease' 
    },
    
    
    activeNavItem: { 
      backgroundColor: '#eff6ff', 
      color: '#2563eb', 
      fontWeight: '600' 
    },
    navIcon: { fontSize: '1.1rem' },

    
    profileSection: { padding: '20px', borderTop: '1px solid #f1f5f9', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', gap: '12px' },
    profileAvatar: { width: '40px', height: '40px', backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '0.9rem', flexShrink: 0 },
    profileDetails: { display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    profileName: { fontSize: '0.9rem', fontWeight: '600', color: '#1e293b', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    profileEmail: { fontSize: '0.75rem', color: '#64748b', margin: '2px 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.topSection}>
        <div style={styles.logoContainer}>
         
          <img src={myLogo} alt="EduTrack Logo" style={styles.logoImage} />
          <h1 style={styles.logoText}>EduTrack</h1>
        </div>

        <nav>
          <ul style={styles.navList}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  style={{ ...styles.navItem, ...(isActive ? styles.activeNavItem : {}) }}
                  // Hover effects for white theme
                  onMouseEnter={(e) => { 
                    if (!isActive) { 
                      e.currentTarget.style.color = '#0f172a'; 
                      e.currentTarget.style.backgroundColor = '#f1f5f9'; 
                    } 
                  }}
                  onMouseLeave={(e) => { 
                    if (!isActive) { 
                      e.currentTarget.style.color = '#64748b'; 
                      e.currentTarget.style.backgroundColor = 'transparent'; 
                    } 
                  }}
                >
                  <span style={styles.navIcon}>{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

     
      <div style={styles.profileSection}>
        <div style={styles.profileAvatar}>{getInitials(name)}</div>
        <div style={styles.profileDetails}>
          <h4 style={styles.profileName}>{name}</h4>
          <p style={styles.profileEmail}>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;