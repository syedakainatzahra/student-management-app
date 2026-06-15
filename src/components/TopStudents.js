function TopStudents() {
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
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
      }}
    >
      <h2>Top Students</h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th align="left">Student</th>
            <th align="left">Major</th>
            <th align="left">GPA</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.name}>
              <td style={{ padding: "15px 0" }}>{student.name}</td>
              <td>{student.major}</td>
              <td>
                <span
                  style={{
                    background: "#DCFCE7",
                    color: "#15803D",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    fontWeight: "bold",
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
  );
}

export default TopStudents;