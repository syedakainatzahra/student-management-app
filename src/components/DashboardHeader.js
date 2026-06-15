import React, { useState, useEffect } from "react";

function DashboardHeader() {
  // 📱 Mobile responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        // 🚀 Mobile par top margin di hai taake hamburger button ke niche space bane
        marginTop: isMobile ? "55px" : "0px", 
        padding: isMobile ? "10px 5px" : "0px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1
        style={{
          margin: "0 0 5px 0",
          fontSize: isMobile ? "1.8rem" : "2.5rem", // Mobile par heading thodi choti ki hai
          color: "#0f172a",
          fontWeight: "700",
        }}
      >
        Overview
      </h1>
      <p
        style={{
          margin: 0,
          fontSize: isMobile ? "0.85rem" : "1rem",
          color: "#64748b",
          fontWeight: "500",
        }}
      >
        Fall 2024 — Week 8 of 16
      </p>
    </div>
  );
}

export default DashboardHeader;