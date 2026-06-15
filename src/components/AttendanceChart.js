import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function AttendanceChart() {
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
    { week: "Wk1", attendance: 96 },
    { week: "Wk2", attendance: 94 },
    { week: "Wk3", attendance: 81 },
    { week: "Wk4", attendance: 88 },
    { week: "Wk5", attendance: 80 },
    { week: "Wk6", attendance: 87 },
    { week: "Wk7", attendance: 40 },
    { week: "Wk8", attendance: 60 },
  ];

  return (
    <div
      style={{
        background: "#fff",
        // 🚀 Mobile par padding thodi kam kar di taake chart ko zyada jagah mile
        padding: isMobile ? "15px 10px" : "20px", 
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
        // 🚀 Mobile par card ki height 300px hogi aur laptop par 400px
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
        Attendance Trend
      </h2>

      <ResponsiveContainer width="100%" height={isMobile ? "80%" : "85%"}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="week" 
            tick={{ fontSize: isMobile ? 11 : 12, fill: "#64748b" }}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: isMobile ? 11 : 12, fill: "#64748b" }}
            tickLine={false}
          />
          <Line
            type="monotone"
            dataKey="attendance"
            stroke="#2563EB"
            strokeWidth={isMobile ? 2.5 : 3} // Mobile par line thodi patli ki hai taake clean dikhe
            dot={{ r: isMobile ? 3 : 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;