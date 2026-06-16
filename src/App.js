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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc", width: "100vw", overflowX: "hidden", position: "relative" }}>
        
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content Area */}
        <div style={{ 
          flex: 1, 
          padding: isMobile ? "70px 14px 30px 14px" : "30px", 
          background: "#f8fafc",
          marginLeft: isMobile ? "0px" : "280px", 
          minHeight: "100vh",
          boxSizing: "border-box",
          width: "100%",
          minWidth: 0 
        }}>
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