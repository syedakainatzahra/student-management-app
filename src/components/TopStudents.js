import React, { useState, useEffect } from "react";

function TopStudents() {
  // 📱 Mobile responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const students = [
    {
      name: "Layla Rosy",
      major: "Mathematics",
      gpa: "4.0",
    },
    {
      name: "Diana Okafor",
      major: "Computer Science",
      gpa: "3.9",
    },
    {
      name: "Mason Lee",
      major: "Physics",
      gpa: "3.8",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: isMobile ? "15px" : "20px", // Mobile par thodi padding kam ki
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
        Top Students
      </h2>

      {/* 🚀 Yeh container table ko mobile par stretch hone se bachayega aur andar scroll scroll dega */}
      <div style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <table
          style={{
            width: "100%",
            marginTop: isMobile ? "10px" : "20px",
            borderCollapse: "collapse",
            minWidth: isMobile ? "450px" : "100%", // Taake choti screens par data aapas mein bhibhirr (squeeze) na ho
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
              <th align="left" style={{ paddingBottom: "10px", color: "#64748b", fontSize: "0.9rem" }}>Student</th>
              <th align="left" style={{ paddingBottom: "10px", color: "#64748b", fontSize: "0.9rem" }}>Major</th>
              <th align="left" style={{ paddingBottom: "10px", color: "#64748b", fontSize: "0.9rem" }}>GPA</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.name} style={{ borderBottom: "1px solid #f8fafc" }}>
                <td style={{ 
                  padding: isMobile ? "12px 0" : "15px 0", 
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  color: "#334155"
                }}>
                  {student.name}
                </td>
                <td style={{ 
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  color: "#64748b" 
                }}>
                  {student.major}
                </td>
                <td>
                  <span
                    style={{
                      background: "#DCFCE7",
                      color: "#15803D",
                      padding: isMobile ? "4px 8px" : "6px 10px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      fontSize: isMobile ? "0.85rem" : "0.9rem"
                    }}
                  >
                    {student.gpa}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopStudents;