import React, { useState, useEffect } from "react";
import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

function StatsCards() {
  // 📱 Mobile aur Tablet responsive states check karne ke liye logic
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive Grid System Variables
  const isMobile = windowWidth <= 580;
  const isTablet = windowWidth > 580 && windowWidth <= 1024;

  // Dynamic grid setup
  let gridColumns = "repeat(4, 1fr)"; // Desktop ke liye default 4 columns
  if (isMobile) {
    gridColumns = "1fr"; // Mobile par single column upar-niche
  } else if (isTablet) {
    gridColumns = "repeat(2, 1fr)"; // Tablet par 2x2 grid ban jayega
  }

  // ⚡ Live Memory (`localStorage`) se students ka data nikalna
  const liveStudents = JSON.parse(localStorage.getItem('globalStudents')) || [
    { id: 'STU-2401', name: 'Aiden Park', year: 'Sophomore', major: 'Computer Science', courseId: 'CS101', gpa: 3.8, attendance: 94, status: 'Active' },
    { id: 'STU-2404', name: 'Diana Okafor', year: 'Senior', major: 'Computer Science', courseId: 'CS101', gpa: 3.9, attendance: 97, status: 'Active' },
    { id: 'STU-2402', name: 'Brianna Torres', year: 'Junior', major: 'Mathematics', courseId: 'MATH201', gpa: 3.5, attendance: 88, status: 'Active' },
    { id: 'STU-2403', name: 'Carlos Mendez', year: 'Freshman', major: 'Engineering', courseId: 'PHY210', gpa: 2.9, attendance: 72, status: 'Probation' },
    { id: 'STU-2405', name: 'Ethan Liu', year: 'Sophomore', major: 'Physics', courseId: 'PHY210', gpa: 3.2, attendance: 85, status: 'Active' },
    { id: 'STU-2406', name: 'Zainab Fatima', year: 'Freshman', major: 'Chemistry', courseId: 'CHEM101', gpa: 4.0, attendance: 98, status: 'Active' },
    { id: 'STU-2407', name: 'Omar Ali', year: 'Junior', major: 'Chemical Engineering', courseId: 'CHEM101', gpa: 3.6, attendance: 91, status: 'Active' },
    { id: 'STU-2408', name: 'Ayesha Khan', year: 'Sophomore', major: 'Biology', courseId: 'BIO102', gpa: 3.7, attendance: 93, status: 'Active' },
    { id: 'STU-2409', name: 'Bilal Ahmed', year: 'Freshman', major: 'English Lit.', courseId: 'ENG105', gpa: 3.1, attendance: 80, status: 'Active' }
  ];

  const totalStudents = liveStudents.length;
  const activeStudents = liveStudents.filter(s => s.status === 'Active').length;
  
  const totalGPA = liveStudents.reduce((sum, s) => sum + (Number(s.gpa) || 0), 0);
  const avgGPA = totalStudents > 0 ? (totalGPA / totalStudents).toFixed(2) : "0.00";

  const totalAttendance = liveStudents.reduce((sum, s) => sum + (Number(s.attendance) || 0), 0);
  const avgAttendance = totalStudents > 0 ? Math.round(totalAttendance / totalStudents) : 0;

  const cards = [
    {
      title: "Total Students",
      value: totalStudents, 
      info: `${activeStudents} active status`, 
      icon: <FiUsers />,
      bg: "#DBEAFE",
      color: "#2563EB",
    },
    {
      title: "Active Courses",
      value: "6",
      info: "6 total modules",
      icon: <FiBookOpen />,
      bg: "#DCFCE7",
      color: "#16A34A",
    },
    {
      title: "Average GPA",
      value: avgGPA,
      info: "Across all roster",
      icon: <FiAward />,
      bg: "#FEF3C7",
      color: "#D97706",
    },
    {
      title: "Avg Attendance",
      value: `${avgAttendance}%`, 
      info: "Overall class turn-out",
      icon: <FiCalendar />,
      bg: "#F3E8FF",
      color: "#9333EA",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: gridColumns, // 🚀 Dynamic column count according to screen size
        gap: isMobile ? "15px" : "20px", // Mobile par gaps thode kam kar diye hain
        marginTop: "20px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#fff",
            padding: isMobile ? "15px" : "20px", // Cards padding compressed on mobile
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            boxSizing: "border-box"
          }}
        >
          <div
            style={{
              width: isMobile ? "45px" : "50px", // Icons size handle kiya hai
              height: isMobile ? "45px" : "50px",
              borderRadius: "12px",
              background: card.bg,
              color: card.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "20px" : "22px",
              marginBottom: "15px",
            }}
          >
            {card.icon}
          </div>

          <h4
            style={{
              color: "#6B7280",
              marginBottom: "10px",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              fontWeight: "500"
            }}
          >
            {card.title}
          </h4>

          <h1
            style={{
              margin: "0",
              fontSize: isMobile ? "26px" : "32px", // Mobile par count thoda clear dikhane ke liye scale badla hai
              fontWeight: "700",
              color: "#111827"
            }}
          >
            {card.value}
          </h1>

          <p
            style={{
              color: "#6B7280",
              fontSize: "0.8rem",
              margin: "10px 0 0 0"
            }}
          >
            {card.info}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;