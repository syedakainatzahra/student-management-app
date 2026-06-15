import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import GradeChart from "../components/GradeChart";
import AttendanceChart from "../components/AttendanceChart";
import TopStudents from "../components/TopStudents";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
  
  const liveStudents = JSON.parse(localStorage.getItem('globalStudents')) || [];
  
  
  const totalStudentsCount = liveStudents.length;

  return (
    <>
      <DashboardHeader />
      
     
      <StatsCards totalStudents={totalStudentsCount} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px",
        marginTop: "20px"
      }}>
        <GradeChart />
        <AttendanceChart />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px",
        marginTop: "20px"
      }}>
        <TopStudents />
        <RecentActivity />
      </div>
    </>
  );
}

export default Dashboard;