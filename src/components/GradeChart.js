import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function GradeChart() {
  // 📱 Mobile responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { grade: "A+/A", students: 13 },
    { grade: "B+/B", students: 9 },
    { grade: "C+/C", students: 3 },
    { grade: "D+/D", students: 3 },
    { grade: "F", students: 0 },
  ];

  return (
    <div
      style={{
        background: "#fff",
        // 🚀 Mobile par padding kam ki hai taake chart chipke nahi
        padding: isMobile ? "15px 10px" : "20px",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
        // 🚀 Mobile par height 300px aur laptop par 400px
        height: isMobile ? "300px" : "400px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        boxSizing: "border-box"
      }}
    >
      <h2 style={{ 
        margin: "0 0 15px 0", 
        fontSize: isMobile ? "1.1rem" : "1.5rem",
        color: "#1e293b"
      }}>
        Grade Distribution
      </h2>

      <ResponsiveContainer width="100%" height={isMobile ? "80%" : "85%"}>
        {/* 🚀 Mobile par chart ke left margin ko adjust kiya hai taake numbers cut na hon */}
        <BarChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="grade" 
            tick={{ fontSize: isMobile ? 11 : 12, fill: "#64748b" }}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: isMobile ? 11 : 12, fill: "#64748b" }}
            tickLine={false}
          />
          {/* 🚀 Mobile par bars ka size thoda adjust kiya hai auto-layout ke mutabiq */}
          <Bar 
            dataKey="students" 
            fill="#2563EB" 
            radius={[6, 6, 0, 0]} 
            maxBarSize={isMobile ? 30 : 50} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GradeChart;