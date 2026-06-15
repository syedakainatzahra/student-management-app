import React, { useState, useEffect } from "react";

function RecentActivity() {
  // 📱 Mobile responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activities = [
    "Grade submitted for Calculus",
    "New student enrolled",
    "Attendance updated",
    "Academic warning issued",
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: isMobile ? "15px" : "20px", // Mobile par thodi padding kam ki hai
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        boxSizing: "border-box"
      }}
    >
      <h2 style={{ 
        margin: "0 0 10px 0", 
        fontSize: isMobile ? "1.1rem" : "1.5rem",
        color: "#1e293b"
      }}>
        Recent Activity
      </h2>

      {activities.map((activity, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: isMobile ? "14px" : "18px", // Mobile par gap thoda compact kiya hai
          }}
        >
          <div
            style={{
              width: isMobile ? "8px" : "10px", // Choti screen par dot thoda chota kiya hai
              height: isMobile ? "8px" : "10px",
              borderRadius: "50%",
              background: "#2563EB",
              flexShrink: 0 // Dot ko squeeze (pichakne) se bachane ke liye
            }}
          />

          <span style={{ 
            fontSize: isMobile ? "0.9rem" : "1rem", 
            color: "#475569" 
          }}>
            {activity}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;