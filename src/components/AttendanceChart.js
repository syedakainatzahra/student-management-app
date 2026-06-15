import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function AttendanceChart() {
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
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
        height: "400px",
      }}
    >
      <h2>Attendance Trend</h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="attendance"
            stroke="#2563EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;