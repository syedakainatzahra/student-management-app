import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// 🌟 Logo import karein (Aapka logo path agar different hai toh check kar lein)
import myLogo from "./assets/logo.png"; 

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    appWrapper: { 
      display: "flex", 
      minHeight: "100vh", 
      background: "#f8fafc", 
      width: "100vw",
      overflowX: "hidden" 
    },
    // 🌟 Mobile Top Bar Container (Sirf mobile par dikhega, laptop par hidden)
    mobileHeader: {
      display: isMobile ? "flex" : "none",
      alignItems: "center",
      gap: "10px",
      position: "fixed",
      top: "14px",
      left: "65px", // Hamburger button ke aage space banayi hai taake overlap na ho
      zIndex: 1300,
      pointerEvents: "none" // Taake clicks iske peeche buttons par asar na karein
    },
    mobileLogo: {
      width: "30px",
      height: "30px",
      objectFit: "contain",
      borderRadius: "4px"
    },
    mobileLogoText: {
      fontSize: "1.1rem",
      fontWeight: "700",
      color: "#1e1c74",
      margin: 0,
      letterSpacing: "0.5px"
    },
    contentArea: { 
      flex: 1, 
      // Mobile par top padding thodi barha di taake content logo/hamburger se niche render ho
      padding: isMobile ? "70px 14px 30px 14px" : "30px", 
      background: "#f8fafc",
      marginLeft: isMobile ? "0px" : "280px", 
      minHeight: "100vh",
      boxSizing: "border-box",
      width: "100%",
      minWidth: 0 
    }
  };

  return (
    <BrowserRouter>
      <div style={styles.appWrapper}>
        
        {/* Mobile-Only Top Left Logo & Text */}
        <div style={styles.mobileHeader}>
          <img src={myLogo} alt="EduTrack Logo" style={styles.mobileLogo} />
          <h1 style={styles.mobileLogoText}>EduTrack</h1>
        </div>

        {/* Responsive Sidebar Menu */}
        <Sidebar />

        {/* Dynamic Main Content Area */}
        <div style={styles.contentArea}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;