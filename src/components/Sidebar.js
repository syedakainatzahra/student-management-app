import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import myLogo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState('SYEDA KAINAT ZAHRA');
  const [email, setEmail] = useState('syedakainatzahra@gmail.com');

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const savedName = localStorage.getItem('profileName');
    const savedEmail = localStorage.getItem('profileEmail');
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false); 
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
      display: isMobile && !isOpen ? 'none' : 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      position: 'fixed', 
      left: 0, 
      top: 0, 
      zIndex: 1200, 
      boxShadow: '4px 0 15px rgba(0,0,0,0.1)', 
      fontFamily: 'system-ui, sans-serif',
      borderRight: '1px solid #e2e8f0',
    },
    overlay: {
      display: isMobile && isOpen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(15, 23, 42, 0.4)', 
      zIndex: 1100,
    },
    topSection: { padding: '24px 20px', marginTop: isMobile ? '60px' : '0px' }, 
    logoContainer: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingLeft: '8px' },
    logoImage: { width: '38px', height: '38px', objectFit: 'contain', borderRadius: '5px' },
    logoText: { fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', margin: 0, letterSpacing: '0.5px' }, 
    navList: { listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' },
    
    navItem: { 
      display: 'flex', 
      alignItems: 'center', 
      gap: '14px', 
      padding: '12px 16px', 
      borderRadius: '8px', 
      cursor: 'pointer', 
      fontSize: '0.95rem', 
      fontWeight: '500', 
      color: '#cbd5e1', 
      transition: 'all 0.2s ease' 
    },
    activeNavItem: { backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: '600' },
    profileSection: { padding: '20px', borderTop: '1px solid #334155', backgroundColor: '#111054', display: 'flex', alignItems: 'center', gap: '12px' },
    profileAvatar: { width: '40px', height: '40px', backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '0.9rem', flexShrink: 0 },
    profileDetails: { display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    profileName: { fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    profileEmail: { fontSize: '0.75rem', color: '#94a3b8', margin: '2px 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    
    // 🚀 Fixed se Absolute kiya taake button page ke sath scroll ho
    toggleBtn: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      zIndex: 1300, 
      backgroundColor: '#1e1c74',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '10px',
      cursor: 'pointer',
      display: isMobile ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(30, 28, 116, 0.25)'
    },
    // 🚀 Fixed se Absolute kiya taake mobile logo page ke sath scroll ho
    mobileHeaderLogo: {
      display: isMobile && !isOpen ? 'flex' : 'none',
      alignItems: 'center',
      gap: '10px',
      position: 'absolute',
      top: '18px',
      left: '65px',
      zIndex: 1100, 
    }
  };

  return (
    <>
      {/* Hamburger Toggle Button */}
      <button style={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Smart Mobile Logo Header */}
      <div style={styles.mobileHeaderLogo}>
        <img src={myLogo} alt="EduTrack Logo" style={{ width: "26px", height: "26px", objectFit: "contain" }} />
        <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e1c74" }}>EduTrack</span>
      </div>

      {/* Dark Overlay Background */}
      <div style={styles.overlay} onClick={() => setIsOpen(false)} />

      {/* Sidebar Navigation */}
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
                    onMouseEnter={(e) => { 
                      if (!isActive) { 
                        e.currentTarget.style.color = '#ffffff'; 
                        e.currentTarget.style.backgroundColor = '#2563eb'; 
                      } 
                    }}
                    onMouseLeave={(e) => { 
                      if (!isActive) { 
                        e.currentTarget.style.color = '#cbd5e1'; 
                        e.currentTarget.style.backgroundColor = 'transparent'; 
                      } 
                    }}
                  >
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
    </>
  );
};

export default Sidebar;