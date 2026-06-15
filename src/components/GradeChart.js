import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function GradeChart() {
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
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
        height: "400px",
      }}
    >
      <h2>Grade Distribution</h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="grade" />
          <YAxis />
          <Bar dataKey="students" fill="#2563EB" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GradeChart;