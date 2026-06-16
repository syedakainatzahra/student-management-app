import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";

function App() {
  // 📱 Mobile screen check karne ke liye state
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
      background: "#f8fafc", // Main layout ka bg bhi clean white/slate kar diya
      width: "100vw",
      overflowX: "hidden" 
    },
    contentArea: { 
      flex: 1, 
      padding: isMobile ? "20px 14px" : "30px", // Mobile par halki padding taake corners crash na hon
      background: "#f8fafc",
      // 🚀 Laptop par 280px space chhorega, mobile par 0px taake light blue box khatam ho jaye!
      marginLeft: isMobile ? "0px" : "280px", 
      minHeight: "100vh",
      boxSizing: "border-box",
      width: "100%",
      minWidth: 0 // Content items ko right bleed karne se rokega
    }
  };

  return (
    <BrowserRouter>
      <div style={styles.appWrapper}>
        
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