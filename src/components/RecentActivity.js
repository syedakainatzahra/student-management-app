function RecentActivity() {
  const activities = [
    "Grade submitted for Calculus",
    "New student enrolled",
    "Attendance updated",
    "Academic warning issued",
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
      }}
    >
      <h2>Recent Activity</h2>

      {activities.map((activity, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "18px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#2563EB",
            }}
          />

          <span>{activity}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;