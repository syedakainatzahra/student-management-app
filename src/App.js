import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh", background: "#dde8f4" }}>
        
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content Area - Added marginLeft to clear the fixed sidebar */}
        <div 
          style={{ 
            flex: 1, 
            padding: "30px", 
            background: "#f8fafc",
            marginLeft: "280px", // 👈 Yeh line sidebar ke peeche content ko chupne se rokegi
            minHeight: "100vh",
            boxSizing: "border-box"
          }}
        >
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