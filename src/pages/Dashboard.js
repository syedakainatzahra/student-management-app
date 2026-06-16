import React, { useState, useEffect } from 'react';
import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import GradeChart from "../components/GradeChart";
import AttendanceChart from "../components/AttendanceChart";
import TopStudents from "../components/TopStudents";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
  // 📱 Mobile responsive state check karne ke liye logic
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const liveStudents = JSON.parse(localStorage.getItem('globalStudents')) || [];
  const totalStudentsCount = liveStudents.length;

  // Dynamic grid column layout
  // 🚀 Laptop par "2fr 1fr" (side-by-side) aur mobile par "1fr" (upar-niche)
  const gridLayout = isMobile ? "1fr" : "2fr 1fr";

  const styles = {
    container: {
      // 🚀 Mobile padding ko exact container boundaries ke sath sync kiya hai
      padding: isMobile ? "60px 12px 30px 12px" : "0px 0px 40px 0px",
      boxSizing: "border-box",
      width: "100%",
      maxWidth: "100%",
      overflowX: "hidden" // Kisi bhi qism ka accident horizontal bleed rokne ke liye
    },
    gridSection: {
      display: "grid",
      gridTemplateColumns: gridLayout, // 🚀 Dynamic responsive layout
      gap: "20px",
      marginTop: "20px",
      width: "100%",
      boxSizing: "border-box",
      minWidth: 0 // 🔥 CRITICAL FIX: Yeh responsive grid items ko limits se bahar stretch hone se rokta hai
    },
    gridItem: {
      minWidth: 0, // 🔥 Har individual card ke container ko locked rakhega
      width: "100%",
      boxSizing: "border-box"
    }
  };

  return (
    <div style={styles.container}>
      <DashboardHeader />
      
      <StatsCards totalStudents={totalStudentsCount} />

      {/* 📊 Charts Grid (Grade & Attendance) */}
      <div style={styles.gridSection}>
        <div style={styles.gridItem}><GradeChart /></div>
        <div style={styles.gridItem}><AttendanceChart /></div>
      </div>

      {/* 📋 Data Grid (Top Students & Recent Activity) */}
      <div style={styles.gridSection}>
        <div style={styles.gridItem}><TopStudents /></div>
        <div style={styles.gridItem}><RecentActivity /></div>
      </div>
    </div>
  );
}

export default Dashboard;