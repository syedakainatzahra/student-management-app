import React, { useState } from 'react';

const Grades = () => {
  // Mock Data compiled from your screenshots (including all scrolled students)
  const [studentsData] = useState([
    { id: 'STU-2401', name: 'Aiden Park', initials: 'AP', cs101: 'A', math201: 'A-', eng150: '—', phy210: 'B+', hist101: '—', avg: 91 },
    { id: 'STU-2402', name: 'Brianna Torres', initials: 'BT', cs101: '—', math201: 'B+', eng150: 'A', phy210: '—', hist101: 'B', avg: 88 },
    { id: 'STU-2403', name: 'Carlos Mendez', initials: 'CM', cs101: 'C+', math201: '—', eng150: 'C', phy210: 'D+', hist101: '—', avg: 72 },
    { id: 'STU-2404', name: 'Diana Okafor', initials: 'DO', cs101: 'A+', math201: 'A', eng150: '—', phy210: '—', hist101: '—', avg: 98 },
    { id: 'STU-2405', name: 'Ethan Liu', initials: 'EL', cs101: '—', math201: 'B', eng150: '—', phy210: 'B+', hist101: 'A-', avg: 87 },
    { id: 'STU-2406', name: 'Fatima Hassan', initials: 'FH', cs101: '—', math201: '—', eng150: 'A-', phy210: '—', hist101: 'A', avg: 93 },
    { id: 'STU-2407', name: 'George Nakamura', initials: 'GN', cs101: 'D', math201: 'D+', eng150: 'C-', phy210: '—', hist101: '—', avg: 66 },
    { id: 'STU-2408', name: 'Hannah Wright', initials: 'HW', cs101: '—', math201: '—', eng150: 'A-', phy210: '—', hist101: 'A', avg: 94 },
    { id: 'STU-2409', name: 'Ivan Petrov', initials: 'IP', cs101: '—', math201: 'B-', eng150: '—', phy210: 'B', hist101: '—', avg: 82 },
    { id: 'STU-2410', name: 'Julia Santos', initials: 'JS', cs101: 'B+', math201: '—', eng150: 'A-', phy210: '—', hist101: 'B', avg: 87 },
    { id: 'STU-2412', name: 'Layla Ahmed', initials: 'LA', cs101: '—', math201: 'A+', eng150: '—', phy210: '—', hist101: 'A+', avg: 99 },
  ]);

  const [selectedCourse, setSelectedCourse] = useState('All Courses');

  // Helper function to color code specific grades as shown in screenshot
  const getGradeStyle = (grade) => {
    if (grade === '—') return { color: '#94a3b8' };
    if (grade.startsWith('A')) return { backgroundColor: '#ecfdf5', color: '#10b981', fontWeight: '600', padding: '4px 8px', borderRadius: '4px' };
    if (grade.startsWith('B')) return { backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: '600', padding: '4px 8px', borderRadius: '4px' };
    if (grade.startsWith('C')) return { backgroundColor: '#fff7ed', color: '#f59e0b', fontWeight: '600', padding: '4px 8px', borderRadius: '4px' };
    if (grade.startsWith('D')) return { backgroundColor: '#fef2f2', color: '#ef4444', fontWeight: '600', padding: '4px 8px', borderRadius: '4px' };
    return {};
  };

  // Helper function for the Avg column background color
  const getAvgStyle = (avg) => {
    if (avg >= 90) return { backgroundColor: '#e6f4ea', color: '#137333', fontWeight: '600' };
    if (avg >= 80) return { backgroundColor: '#e8f0fe', color: '#1a73e8', fontWeight: '600' };
    if (avg >= 70) return { backgroundColor: '#fef7e0', color: '#b06000', fontWeight: '600' };
    return { backgroundColor: '#fce8e6', color: '#c5221f', fontWeight: '600' };
  };

  const styles = {
    container: { fontFamily: 'system-ui, sans-serif', color: '#334155' },
    headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' },
    pageTitle: { fontSize: '2rem', fontWeight: '700', color: '#0f172a', margin: 0 },
    subtitle: { fontSize: '0.9rem', color: '#64748b', margin: '4px 0 0 0' },
    exportBtn: { backgroundColor: 'white', border: '1px solid #e2e8f0', padding: '10px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
    
    // Stats Summary Grid
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' },
    statCard: { border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' },
    statCount: { fontSize: '2.25rem', fontWeight: '700', margin: 0 },
    statLabel: { fontSize: '0.85rem', fontWeight: '500' },
    
    // Filters Row
    filterSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' },
    filterLabel: { fontSize: '0.9rem', color: '#64748b' },
    tabGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
    tabBtn: { border: '1px solid #e2e8f0', background: 'white', padding: '8px 16px', fontSize: '0.85rem', fontWeight: '500', color: '#475569', borderRadius: '8px', cursor: 'pointer' },
    activeTabBtn: { backgroundColor: '#2563eb', color: 'white', borderColor: '#2563eb' },
    
    // Table Core styling
    tableContainer: { background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflowX: 'auto', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' },
    th: { backgroundColor: '#f8fafc', padding: '14px 16px', fontSize: '0.8rem', fontWeight: '600', color: '#64748b', borderBottom: '1px solid #e2e8f0' },
    td: { padding: '14px 16px', borderBottom: '1px solid #f1f5f9', verticalAlign: 'middle' },
    
    // Student Meta cell style
    studentCell: { display: 'flex', alignItems: 'center', gap: '12px' },
    avatar: { width: '36px', height: '36px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '0.75rem' },
    nameText: { fontSize: '0.9rem', fontWeight: '600', color: '#0f172a', margin: 0 },
    idText: { fontSize: '0.75rem', color: '#94a3b8', margin: '2px 0 0 0' },
    
    // Matrix badge spacing 
    cellCenter: { textAlign: 'center' },
    avgBadge: { padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem' },
    footerNote: { fontSize: '0.85rem', color: '#64748b', marginTop: '16px', fontStyle: 'italic' }
  };

  return (
    <div style={styles.container}>
      
      {/* HEADER SECTION */}
      <div style={styles.headerRow}>
        <div>
          <h2 style={styles.pageTitle}>Grades</h2>
          <p style={styles.subtitle}>Fall 2024 — Midterm Report</p>
        </div>
        <button type="button" style={styles.exportBtn}>
          <span>📥</span> Export
        </button>
      </div>

      {/* TOP SUMMARY CARDS BOXES */}
      <div style={styles.statsGrid}>
        <div style={{ ...styles.statCard, backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
          <h3 style={{ ...styles.statCount, color: '#15803d' }}>13</h3>
          <span style={{ ...styles.statLabel, color: '#166534' }}>A (90–100)</span>
        </div>
        <div style={{ ...styles.statCard, backgroundColor: '#f0f9ff', borderColor: '#bae6fd' }}>
          <h3 style={{ ...styles.statCount, color: '#1d4ed8' }}>9</h3>
          <span style={{ ...styles.statLabel, color: '#1e40af' }}>B (80–89)</span>
        </div>
        <div style={{ ...styles.statCard, backgroundColor: '#fffbeb', borderColor: '#fef08a' }}>
          <h3 style={{ ...styles.statCount, color: '#b45309' }}>3</h3>
          <span style={{ ...styles.statLabel, color: '#854d0e' }}>C (70–79)</span>
        </div>
        <div style={{ ...styles.statCard, backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
          <h3 style={{ ...styles.statCount, color: '#b91c1c' }}>3</h3>
          <span style={{ ...styles.statLabel, color: '#991b1b' }}>D / F (&lt; 70)</span>
        </div>
      </div>

      {/* FILTER BY COURSE ROW */}
      <div style={styles.filterSection}>
        <span style={styles.filterLabel}>Filter by course:</span>
        <div style={styles.tabGroup}>
          {['All Courses', 'CS101', 'MATH201', 'ENG150', 'PHY210', 'HIST101'].map((course) => (
            <button
              key={course}
              type="button"
              onClick={() => setSelectedCourse(course)}
              style={{ 
                ...styles.tabBtn, 
                ...(selectedCourse === course ? styles.activeTabBtn : {}) 
              }}
            >
              {course}
            </button>
          ))}
        </div>
      </div>

      {/* MATRIX GRADE TABLE */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, width: '25%' }}>Student</th>
              {(selectedCourse === 'All Courses' || selectedCourse === 'CS101') && <th style={{ ...styles.th, ...styles.cellCenter }}>CS101</th>}
              {(selectedCourse === 'All Courses' || selectedCourse === 'MATH201') && <th style={{ ...styles.th, ...styles.cellCenter }}>MATH201</th>}
              {(selectedCourse === 'All Courses' || selectedCourse === 'ENG150') && <th style={{ ...styles.th, ...styles.cellCenter }}>ENG150</th>}
              {(selectedCourse === 'All Courses' || selectedCourse === 'PHY210') && <th style={{ ...styles.th, ...styles.cellCenter }}>PHY210</th>}
              {(selectedCourse === 'All Courses' || selectedCourse === 'HIST101') && <th style={{ ...styles.th, ...styles.cellCenter }}>HIST101</th>}
              <th style={{ ...styles.th, ...styles.cellCenter, width: '10%' }}>Avg</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.id}>
                {/* Student Info Profile Column */}
                <td style={styles.td}>
                  <div style={styles.studentCell}>
                    <div style={styles.avatar}>{student.initials}</div>
                    <div>
                      <h5 style={styles.nameText}>{student.name}</h5>
                      <p style={styles.idText}>{student.id}</p>
                    </div>
                  </div>
                </td>

                {/* Conditional Grades Rendering matching the filters */}
                {(selectedCourse === 'All Courses' || selectedCourse === 'CS101') && (
                  <td style={{ ...styles.td, ...styles.cellCenter }}>
                    <span style={getGradeStyle(student.cs101)}>{student.cs101}</span>
                  </td>
                )}
                {(selectedCourse === 'All Courses' || selectedCourse === 'MATH201') && (
                  <td style={{ ...styles.td, ...styles.cellCenter }}>
                    <span style={getGradeStyle(student.math201)}>{student.math201}</span>
                  </td>
                )}
                {(selectedCourse === 'All Courses' || selectedCourse === 'ENG150') && (
                  <td style={{ ...styles.td, ...styles.cellCenter }}>
                    <span style={getGradeStyle(student.eng150)}>{student.eng150}</span>
                  </td>
                )}
                {(selectedCourse === 'All Courses' || selectedCourse === 'PHY210') && (
                  <td style={{ ...styles.td, ...styles.cellCenter }}>
                    <span style={getGradeStyle(student.phy210)}>{student.phy210}</span>
                  </td>
                )}
                {(selectedCourse === 'All Courses' || selectedCourse === 'HIST101') && (
                  <td style={{ ...styles.td, ...styles.cellCenter }}>
                    <span style={getGradeStyle(student.hist101)}>{student.hist101}</span>
                  </td>
                )}

                {/* Average Percentage Badge Column */}
                <td style={{ ...styles.td, ...styles.cellCenter }}>
                  <span style={{ ...styles.avgBadge, ...getAvgStyle(student.avg) }}>
                    {student.avg}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default Grades;