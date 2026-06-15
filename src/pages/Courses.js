import React, { useState } from 'react';

const Courses = () => {
  
  const [courses, setCourses] = useState([
    { id: 'CS101', code: 'CS101', title: 'Introduction to Computer Science', instructor: 'Dr. Alex Morgan', students: 2, avgGrade: 'A-', status: 'Active' },
    { id: 'MATH201', code: 'MATH201', title: 'Calculus II', instructor: 'Prof. Sarah Jenkins', students: 1, avgGrade: 'B+', status: 'Active' },
    { id: 'PHY210', code: 'PHY210', title: 'University Physics', instructor: 'Dr. Robert Chen', students: 2, avgGrade: 'C', status: 'Active' },
    { id: 'CHEM101', code: 'CHEM101', title: 'General Chemistry', instructor: 'Dr. Emily Watson', students: 2, avgGrade: 'A', status: 'Active' },
    { id: 'BIO102', code: 'BIO102', title: 'General Biology II', instructor: 'Prof. Michael Brown', students: 1, avgGrade: 'B', status: 'Active' },
    { id: 'ENG105', code: 'ENG105', title: 'English Composition', instructor: 'Ms. Linda Davis', students: 1, avgGrade: 'B-', status: 'Active' }
  ]);

  
  const allStudents = JSON.parse(localStorage.getItem('globalStudents')) || [
    { id: 'STU-2401', name: 'Aiden Park', initials: 'AP', year: 'Sophomore', major: 'Computer Science', courseId: 'CS101', gpa: 3.8, attendance: 94, status: 'Active' },
    { id: 'STU-2404', name: 'Diana Okafor', initials: 'DO', year: 'Senior', major: 'Computer Science', courseId: 'CS101', gpa: 3.9, attendance: 97, status: 'Active' },
    { id: 'STU-2402', name: 'Brianna Torres', initials: 'BT', year: 'Junior', major: 'Mathematics', courseId: 'MATH201', gpa: 3.5, attendance: 88, status: 'Active' },
    { id: 'STU-2403', name: 'Carlos Mendez', initials: 'CM', year: 'Freshman', major: 'Engineering', courseId: 'PHY210', gpa: 2.9, attendance: 72, status: 'Probation' },
    { id: 'STU-2405', name: 'Ethan Liu', initials: 'EL', year: 'Sophomore', major: 'Physics', courseId: 'PHY210', gpa: 3.2, attendance: 85, status: 'Active' },
    { id: 'STU-2406', name: 'Zainab Fatima', initials: 'ZF', year: 'Freshman', major: 'Chemistry', courseId: 'CHEM101', gpa: 4.0, attendance: 98, status: 'Active' },
    { id: 'STU-2407', name: 'Omar Ali', initials: 'OA', year: 'Junior', major: 'Chemical Engineering', courseId: 'CHEM101', gpa: 3.6, attendance: 91, status: 'Active' },
    { id: 'STU-2408', name: 'Ayesha Khan', initials: 'AK', year: 'Sophomore', major: 'Biology', courseId: 'BIO102', gpa: 3.7, attendance: 93, status: 'Active' },
    { id: 'STU-2409', name: 'Bilal Ahmed', initials: 'BA', year: 'Freshman', major: 'English Lit.', courseId: 'ENG105', gpa: 3.1, attendance: 80, status: 'Active' }
  ];

 
  const [showAddForm, setShowAddForm] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [instructorName, setInstructorName] = useState("");

  
  const [selectedCourseId, setSelectedCourseId] = useState('CS101');

  
  const enrolledStudents = allStudents.filter(student => student.courseId === selectedCourseId);
  const currentCourse = courses.find(c => c.id === selectedCourseId);

 
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!courseTitle || !courseCode || !instructorName) return;

    const newCourse = {
      id: courseCode.toUpperCase().replace(/\s+/g, ''),
      title: courseTitle,
      code: courseCode.toUpperCase(),
      instructor: instructorName,
      students: 0,
      avgGrade: 'N/A',
      status: 'Active'
    };

    setCourses([...courses, newCourse]);
    setSelectedCourseId(newCourse.id);
    setCourseTitle(""); 
    setCourseCode(""); 
    setInstructorName(""); 
    setShowAddForm(false);
  };

  const styles = {
    container: { minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif', color: '#334155', padding: '40px 20px' },
    wrapper: { maxWidth: '1200px', margin: '0 auto' },
    contentHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '32px' },
    pageTitle: { fontSize: '2rem', fontWeight: '700', color: '#0f172a', margin: 0 },
    subtitle: { fontSize: '0.9rem', color: '#64748b', margin: '6px 0 0 0' },
    btnPrimary: { backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: '500', fontSize: '0.9rem', cursor: 'pointer' },
    addForm: { background: 'white', border: '1px solid #e0f2fe', borderRadius: '12px', padding: '20px', marginBottom: '32px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
    formGroup: { flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' },
    input: { padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', backgroundColor: 'white' },
    btnSuccess: { backgroundColor: '#059669', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' },
    card: { backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', cursor: 'pointer', transition: 'all 0.2s' },
    cardSelected: { borderColor: '#2563eb', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.05)' },
    cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' },
    courseCode: { fontSize: '0.75rem', fontWeight: '700', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '6px' },
    statusPill: { padding: '2px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '500' },
    statusActive: { backgroundColor: '#ecfdf5', color: '#047857' },
    statusInactive: { backgroundColor: '#f1f5f9', color: '#64748b' },
    courseTitle: { fontSize: '1.25rem', fontWeight: '600', color: '#0f172a', margin: '0 0 6px 0' },
    instructor: { fontSize: '0.85rem', color: '#64748b', margin: '0 0 20px 0' },
    cardFooter: { display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '16px' },
    footerGroup: { display: 'flex', flexDirection: 'column', gap: '4px' },
    footerLabel: { fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '500' },
    footerValue: { fontSize: '0.9rem', fontWeight: '600', color: '#475569' },
    gradeValue: { fontSize: '0.9rem', fontWeight: '600', color: '#2563eb' },
    studentsSection: { marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '30px' },
    sectionTitle: { fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', marginBottom: '20px' },
    tableContainer: { background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflowX: 'auto', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' },
    th: { backgroundColor: '#f8fafc', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0' },
    td: { padding: '14px 16px', borderBottom: '1px solid #f1f5f9', color: '#475569' },
    studentInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
    studentAvatar: { width: '36px', height: '36px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '0.75rem' },
    studentNameText: { fontSize: '0.9rem', fontWeight: '600', color: '#0f172a', margin: 0 },
    studentIdText: { fontSize: '0.75rem', color: '#94a3b8', margin: '2px 0 0 0' },
    progressBarBg: { width: '100px', backgroundColor: '#f1f5f9', height: '6px', borderRadius: '99px', overflow: 'hidden', display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' },
    progressBarFill: { height: '100%', borderRadius: '99px', backgroundColor: '#10b981' },
    statusActivePill: { padding: '2px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: '#ecfdf5', color: '#047857' },
    statusProbationPill: { padding: '2px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '500', backgroundColor: '#fef2f2', color: '#b91c1c' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* CONTENT HEADER */}
        <div style={styles.contentHeader}>
          <div>
            <h2 style={styles.pageTitle}>Courses</h2>
            <p style={styles.subtitle}>View and manage academic course modules</p>
          </div>
          <button type="button" onClick={() => setShowAddForm(!showAddForm)} style={styles.btnPrimary}>
            {showAddForm ? "➖ Hide Form" : "➕ Create Course"}
          </button>
        </div>

        {/* 📝 DYNAMIC CREATE COURSE FORM */}
        {showAddForm && (
          <form onSubmit={handleAddCourse} style={styles.addForm}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Course Title</label>
              <input type="text" placeholder="e.g. Data Structures" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Course Code</label>
              <input type="text" placeholder="e.g. CS202" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Instructor</label>
              <input type="text" placeholder="e.g. Dr. Alex" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} style={styles.input} />
            </div>
            <button type="submit" style={styles.btnSuccess}>Save Course</button>
          </form>
        )}

        {/* COURSES GRID */}
        <div style={styles.grid}>
          {courses.map((course) => {
            
            const actualStrength = allStudents.filter(s => s.courseId === course.id).length;

            return (
              <div 
                key={course.id} 
                onClick={() => setSelectedCourseId(course.id)}
                style={{ ...styles.card, ...(selectedCourseId === course.id ? styles.cardSelected : {}) }}
              >
                <div style={styles.cardHeader}>
                  <span style={styles.courseCode}>{course.code}</span>
                  <span style={{ ...styles.statusPill, ...(course.status === 'Active' ? styles.statusActive : styles.statusInactive) }}>
                    {course.status}
                  </span>
                </div>
                <h3 style={styles.courseTitle}>{course.title}</h3>
                <p style={styles.instructor}>Instructor: {course.instructor}</p>
                <div style={styles.cardFooter}>
                  <div style={styles.footerGroup}>
                    <span style={styles.footerLabel}>Enrolled</span>
                    <span style={styles.footerValue}>{actualStrength} Students</span>
                  </div>
                  <div style={{ ...styles.footerGroup, alignItems: 'flex-end' }}>
                    <span style={styles.footerLabel}>Avg Grade</span>
                    <span style={styles.gradeValue}>{course.avgGrade}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/*  STUDENTS DATA TABLE */}
        <div style={styles.studentsSection}>
          <h3 style={styles.sectionTitle}>
            Enrolled Students — <span style={{ color: '#2563eb' }}>{currentCourse?.title || "New Course"}</span>
          </h3>

          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Student</th>
                  <th style={styles.th}>Year</th>
                  <th style={styles.th}>Major</th>
                  <th style={styles.th}>GPA</th>
                  <th style={styles.th}>Attendance</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {enrolledStudents.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ ...styles.td, textAlign: 'center', padding: '24px', color: '#94a3b8' }}>
                      No students found in this course.
                    </td>
                  </tr>
                ) : (
                  enrolledStudents.map((student) => (
                    <tr key={student.id}>
                      <td style={styles.td}>
                        <div style={styles.studentInfo}>
                          <div style={styles.studentAvatar}>{student.initials}</div>
                          <div>
                            <h5 style={styles.studentNameText}>{student.name}</h5>
                            <p style={styles.studentIdText}>{student.id}</p>
                          </div>
                        </div>
                      </td>
                      <td style={{ ...styles.td, fontWeight: '500', color: '#0f172a' }}>{student.year}</td>
                      <td style={styles.td}>{student.major}</td>
                      <td style={{ ...styles.td, fontWeight: '600' }}>{student.gpa ? student.gpa.toFixed(1) : '4.0'}</td>
                      <td style={styles.td}>
                        <div style={styles.progressBarBg}>
                          <div style={{ ...styles.progressBarFill, width: `${student.attendance}%` }}></div>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{student.attendance}%</span>
                      </td>
                      <td style={styles.td}>
                        <span style={student.status === 'Active' ? styles.statusActivePill : styles.statusProbationPill}>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;