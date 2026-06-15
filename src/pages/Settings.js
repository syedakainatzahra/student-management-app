import React, { useState } from 'react';

const Settings = () => {
  // 1. Initial configuration components checked directly from memory
  const [profile, setProfile] = useState({
    name: localStorage.getItem('profileName') || 'Syeda Kainat Zahra',
    email: localStorage.getItem('profileEmail') || 'syedakainatzahra.edu',
    role: 'Administrator',
    department: 'Computer Science',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    studentRegistration: true,
    gradeSubmissions: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleNotification = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  // ⚡ 2. NEW LOGIC: This updates the data that the sidebar listens to
  const handleSaveProfile = () => {
    localStorage.setItem('profileName', profile.name);
    localStorage.setItem('profileEmail', profile.email);
    alert('✅ Profile configurations synced and saved successfully!');
  };

  const styles = {
    container: { fontFamily: 'system-ui, sans-serif', color: '#334155' },
    pageTitle: { fontSize: '2rem', fontWeight: '700', color: '#0f172a', margin: 0 },
    subtitle: { fontSize: '0.9rem', color: '#64748b', margin: '4px 0 32px 0' },
    grid: { display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' },
    card: { backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
    cardTitle: { fontSize: '1.2rem', fontWeight: '600', color: '#0f172a', margin: '0 0 8px 0' },
    cardSubtitle: { fontSize: '0.85rem', color: '#64748b', margin: '0 0 24px 0' },
    formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
    formGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '0.8rem', fontWeight: '600', color: '#475569', textTransform: 'uppercase' },
    input: { padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', backgroundColor: '#f8fafc', color: '#334155' },
    inputDisabled: { backgroundColor: '#f1f5f9', color: '#94a3b8', cursor: 'not-allowed' },
    toggleRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #f1f5f9' },
    toggleInfo: { display: 'flex', flexDirection: 'column', gap: '4px' },
    toggleTitle: { fontSize: '0.95rem', fontWeight: '500', color: '#334155' },
    toggleDesc: { fontSize: '0.8rem', color: '#64748b' },
    switchBtn: { border: 'none', width: '48px', height: '24px', borderRadius: '99px', padding: '2px', cursor: 'pointer', display: 'flex', transition: 'background-color 0.2s' },
    switchCircle: { width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.15)', transition: 'transform 0.2s' },
    btnPrimary: { backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '500', fontSize: '0.9rem', cursor: 'pointer', marginTop: '16px', alignSelf: 'flex-start' }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.pageTitle}>Settings</h2>
      <p style={styles.subtitle}>Manage your account settings and preferences</p>

      <div style={styles.grid}>
        
        {/* PROFILE SETTINGS CARD */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Profile Information</h3>
          <p style={styles.cardSubtitle}>Update your account details and department info.</p>
          
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" name="name" value={profile.name} onChange={handleProfileChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" name="email" value={profile.email} onChange={handleProfileChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Role</label>
              <input type="text" value={profile.role} style={{ ...styles.input, ...styles.inputDisabled }} disabled />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Department</label>
              <input type="text" name="department" value={profile.department} onChange={handleProfileChange} style={styles.input} />
            </div>
          </div>
          
          {/* Linked onClick to our local storage saving logic */}
          <button type="button" style={styles.btnPrimary} onClick={handleSaveProfile}>Save Profile</button>
        </div>

        {/* NOTIFICATIONS CARD */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Notifications Preferences</h3>
          <p style={styles.cardSubtitle}>Choose what updates and alerts you want to receive.</p>
          
          <div>
            <div style={styles.toggleRow}>
              <div style={styles.toggleInfo}>
                <span style={styles.toggleTitle}>Email Alerts</span>
                <span style={styles.toggleDesc}>Receive daily digest summaries of portal activity.</span>
              </div>
              <button 
                type="button" 
                onClick={() => toggleNotification('emailAlerts')}
                style={{ ...styles.switchBtn, backgroundColor: notifications.emailAlerts ? '#2563eb' : '#cbd5e1', justifyContent: notifications.emailAlerts ? 'flex-end' : 'flex-start' }}
              >
                <div style={styles.switchCircle}></div>
              </button>
            </div>

            <div style={styles.toggleRow}>
              <div style={styles.toggleInfo}>
                <span style={styles.toggleTitle}>New Student Registrations</span>
                <span style={styles.toggleDesc}>Get notified immediately when a student enrolls in your course.</span>
              </div>
              <button 
                type="button" 
                onClick={() => toggleNotification('studentRegistration')}
                style={{ ...styles.switchBtn, backgroundColor: notifications.studentRegistration ? '#2563eb' : '#cbd5e1', justifyContent: notifications.studentRegistration ? 'flex-end' : 'flex-start' }}
              >
                <div style={styles.switchCircle}></div>
              </button>
            </div>

            <div style={{ ...styles.toggleRow, borderBottom: 'none' }}>
              <div style={styles.toggleInfo}>
                <span style={styles.toggleTitle}>Grade Submission Reminders</span>
                <span style={styles.toggleDesc}>Receive automated alerts before midterm and final grade deadlines.</span>
              </div>
              <button 
                type="button" 
                onClick={() => toggleNotification('gradeSubmissions')}
                style={{ ...styles.switchBtn, backgroundColor: notifications.gradeSubmissions ? '#2563eb' : '#cbd5e1', justifyContent: notifications.gradeSubmissions ? 'flex-end' : 'flex-start' }}
              >
                <div style={styles.switchCircle}></div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;