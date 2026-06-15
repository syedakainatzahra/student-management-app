import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

function StatsCards() {
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
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: card.bg,
              color: card.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              marginBottom: "15px",
            }}
          >
            {card.icon}
          </div>

          <h4
            style={{
              color: "#6B7280",
              marginBottom: "10px",
              fontSize: "0.9rem",
              fontWeight: "500"
            }}
          >
            {card.title}
          </h4>

          <h1
            style={{
              margin: "0",
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827"
            }}
          >
            {card.value}
          </h1>

          <p
            style={{
              color: "#6B7280",
              marginTop: "10px",
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