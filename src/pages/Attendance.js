import React, { useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";

const Attendance = () => {
  const courses = [
    { id: 'CS101', code: 'CS101', title: 'Introduction to Computer Science', time: '09:00 AM - 10:30 AM', room: 'Lab 3, Block B' },
    { id: 'MATH201', code: 'MATH201', title: 'Calculus II', time: '11:00 AM - 12:30 PM', room: 'Room 202, Main' },
    { id: 'PHY210', code: 'PHY210', title: 'University Physics', time: '02:00 PM - 03:30 PM', room: 'Auditorium 1' },
    { id: 'CHEM101', code: 'CHEM101', title: 'General Chemistry', time: '08:00 AM - 09:30 AM', room: 'Lab 1, Science Dept' },
    { id: 'BIO102', code: 'BIO102', title: 'General Biology II', time: '01:00 PM - 02:30 PM', room: 'Room 105, Biotech' },
    { id: 'ENG105', code: 'ENG105', title: 'English Composition', time: '04:00 PM - 05:30 PM', room: 'Room 301, Liberal Arts' }
  ];

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('globalStudents');
    return saved ? JSON.parse(saved) : [
      { id: 'STU-2401', name: 'Aiden Park', initials: 'AP', year: 'Sophomore', major: 'Computer Science', courseId: 'CS101', attendance: 94, status: 'Present' },
      { id: 'STU-2404', name: 'Diana Okafor', initials: 'DO', year: 'Senior', major: 'Computer Science', courseId: 'CS101', attendance: 97, status: 'Present' },
      { id: 'STU-2402', name: 'Brianna Torres', initials: 'BT', year: 'Junior', major: 'Mathematics', courseId: 'MATH201', attendance: 88, status: 'Present' },
      { id: 'STU-2403', name: 'Carlos Mendez', initials: 'CM', year: 'Freshman', major: 'Engineering', courseId: 'PHY210', attendance: 72, status: 'Absent' },
      { id: 'STU-2405', name: 'Ethan Liu', initials: 'EL', year: 'Sophomore', major: 'Physics', courseId: 'PHY210', attendance: 85, status: 'Present' },
      { id: 'STU-2406', name: 'Zainab Fatima', initials: 'ZF', year: 'Freshman', major: 'Chemistry', courseId: 'CHEM101', attendance: 98, status: 'Present' },
      { id: 'STU-2407', name: 'Omar Ali', initials: 'OA', year: 'Junior', major: 'Chemical Engineering', courseId: 'CHEM101', attendance: 91, status: 'Present' },
      { id: 'STU-2408', name: 'Ayesha Khan', initials: 'AK', year: 'Sophomore', major: 'Biology', courseId: 'BIO102', attendance: 93, status: 'Present' },
      { id: 'STU-2409', name: 'Bilal Ahmed', initials: 'BA', year: 'Freshman', major: 'English Lit.', courseId: 'ENG105', attendance: 80, status: 'Present' }
    ];
  });

  const [selectedCourseId, setSelectedCourseId] = useState('CS101');
  const [searchTerm, setSearchTerm] = useState('');

  // 📱 Mobile responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCourse = courses.find(c => c.id === selectedCourseId);

  const filteredStudents = students.filter(student => {
    const matchesCourse = student.courseId === selectedCourseId;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  const toggleStatus = (studentId) => {
    setStudents(students.map(s => {
      if (s.id === studentId) {
        return { ...s, status: s.status === 'Present' ? 'Absent' : 'Present' };
      }
      return s;
    }));
  };

  const handleSaveAttendance = () => {
    localStorage.setItem('globalStudents', JSON.stringify(students));
    alert('✅ Attendance sheet saved and synchronized successfully!');
  };

  const styles = {
    container: { minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif', color: '#334155', padding: isMobile ? '15px 10px' : '40px 20px', boxSizing: 'border-box' },
    wrapper: { maxWidth: '1200px', margin: '0 auto' },
    contentHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' },
    pageTitle: { fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: '700', color: '#0f172a', margin: 0 },
    subtitle: { fontSize: '0.9rem', color: '#64748b', margin: '6px 0 0 0' },
    statsRow: { display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' },
    statCard: { flex: 1, minWidth: isMobile ? '100%' : '220px', background: 'white', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
    statLabel: { fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px', display: 'block' },
    statValue: { fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', margin: 0 },
    courseSelector: { display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' },
    selectorBtn: { border: '1px solid #e2e8f0', background: 'white', padding: '10px 18px', fontSize: '0.85rem', fontWeight: '500', color: '#475569', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s', flex: isMobile ? '1 1 calc(33.33% - 8px)' : 'none', textAlign: 'center' },
    selectorBtnActive: { backgroundColor: '#2563eb', color: 'white', borderColor: '#2563eb' },
    infoCard: { background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '32px', flexWrap: 'wrap' },
    infoItem: { fontSize: '0.9rem' },
    infoLabel: { color: '#1e40af', fontWeight: '500', display: isMobile ? 'block' : 'inline' },
    infoValue: { color: '#1d4ed8', fontWeight: '700', marginLeft: isMobile ? '0px' : '6px' },
    toolbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row', gap: '16px', marginBottom: '24px' },
    searchBox: { position: 'relative', width: isMobile ? '100%' : '320px', display: 'flex', alignItems: 'center' },
    searchIcon: { position: 'absolute', left: '12px', display: 'flex', alignItems: 'center', pointerEvents: 'none' },
    searchInput: { width: '100%', padding: '10px 12px 10px 38px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', color: '#334155' },
    btnSuccess: { backgroundColor: '#059669', color: 'white', border: 'none', padding: '12px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', width: isMobile ? '100%' : 'auto', textAlign: 'center' },
    tableContainer: { background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem', minWidth: isMobile ? '750px' : '100%' },
    th: { backgroundColor: '#f8fafc', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0' },
    td: { padding: '14px 16px', borderBottom: '1px solid #f1f5f9', color: '#475569' },
    studentInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
    studentAvatar: { width: '36px', height: '36px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '0.75rem', flexShrink: 0 },
    studentNameText: { fontSize: '0.9rem', fontWeight: '600', color: '#0f172a', margin: 0 },
    studentIdText: { fontSize: '0.75rem', color: '#94a3b8', margin: '2px 0 0 0' },
    statusPill: { padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block' },
    statusPresent: { backgroundColor: '#ecfdf5', color: '#047857' },
    statusAbsent: { backgroundColor: '#fef2f2', color: '#b91c1c' },
    btnAction: { backgroundColor: 'white', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', fontWeight: '500', color: '#475569', whiteSpace: 'nowrap' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* HEADER */}
        <div style={styles.contentHeader}>
          <div>
            <h2 style={styles.pageTitle}>Attendance Tracking</h2>
            <p style={styles.subtitle}>Mark daily attendance logs for active courses</p>
          </div>
        </div>

        {/* STATS ROW */}
        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>Total Class Strength</span>
            <h4 style={styles.statValue}>{students.filter(s => s.courseId === selectedCourseId).length} Students</h4>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>Present Today</span>
            <h4 style={{...styles.statValue, color: '#059669'}}>{students.filter(s => s.courseId === selectedCourseId && s.status === 'Present').length}</h4>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>Absent Today</span>
            <h4 style={{...styles.statValue, color: '#ef4444'}}>{students.filter(s => s.courseId === selectedCourseId && s.status === 'Absent').length}</h4>
          </div>
        </div>

        {/* HORIZONTAL COURSE SELECTION TABS */}
        <div style={styles.courseSelector}>
          {courses.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => {
                setSelectedCourseId(course.id);
                setSearchTerm(''); 
              }}
              style={{
                ...styles.selectorBtn,
                ...(selectedCourseId === course.id ? styles.selectorBtnActive : {})
              }}
            >
              {course.code}
            </button>
          ))}
        </div>

        {/* ROOM AND TIME INDICATOR BAR */}
        <div style={styles.infoCard}>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Active Course:</span>
            <span style={styles.infoValue}>{currentCourse?.title}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Schedule Time:</span>
            <span style={styles.infoValue}>{currentCourse?.time}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Location / Room:</span>
            <span style={styles.infoValue}>{currentCourse?.room}</span>
          </div>
        </div>

        {/* TOOLBAR */}
        <div style={styles.toolbar}>
          <div style={styles.searchBox}>
            <div style={styles.searchIcon}>
              <IoMdSearch size={18} color="#64748b" />
            </div>
            <input 
              type="text" 
              placeholder="Search student inside roster..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput} 
            />
          </div>
          <button type="button" onClick={handleSaveAttendance} style={styles.btnSuccess}>Save Attendance Sheet</button>
        </div>

        {/* ATTENDANCE ROSTER TABLE */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Student Profile</th>
                <th style={styles.th}>Academic Year</th>
                <th style={styles.th}>Major Discipline</th>
                <th style={styles.th}>Avg Attendance</th>
                <th style={styles.th}>Status Status</th>
                <th style={{ ...styles.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ ...styles.td, textAlign: 'center', padding: '24px', color: '#94a3b8' }}>
                    No students found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
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
                    <td style={styles.td}>{student.year}</td>
                    <td style={styles.td}>{student.major}</td>
                    <td style={{ ...styles.td, fontWeight: '600' }}>{student.attendance}%</td>
                    <td style={styles.td}>
                      <span style={{
                        ...styles.statusPill,
                        ...(student.status === 'Present' ? styles.statusPresent : styles.statusAbsent)
                      }}>
                        ● {student.status}
                      </span>
                    </td>
                    <td style={{ ...styles.td, textAlign: 'right' }}>
                      <button 
                        type="button" 
                        onClick={() => toggleStatus(student.id)} 
                        style={styles.btnAction}
                      >
                        🔄 Toggle Status
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Attendance;