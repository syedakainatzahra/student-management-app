import React, { useState,} from 'react';

const Students = () => {
  // Default Initial Students Data
  const defaultStudents = [
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

  // Load from localStorage or use default
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('globalStudents');
    return saved ? JSON.parse(saved) : defaultStudents;
  });

  // Form States
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [courseId, setCourseId] = useState('CS101'); // Default allocation
  const [year, setYear] = useState('Freshman');

  // Handle Add Student
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name || !major) return;

    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const newStudent = {
      id: `STU-${Math.floor(1000 + Math.random() * 9000)}`, // Random unique ID
      name,
      initials,
      year,
      major,
      courseId,
      gpa: 4.0, // Default GPA for newcomers
      attendance: 100, // Default Attendance
      status: 'Active'
    };

    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    
    // ⚡ SAVE TO MEMORY FOR ALL PAGES TO READ
    localStorage.setItem('globalStudents', JSON.stringify(updatedStudents));

    // Reset inputs
    setName('');
    setMajor('');
    setShowForm(false);
  };

  const styles = {
    container: { fontFamily: 'system-ui, sans-serif', padding: '20px', color: '#334155' },
    header: { display: 'flex', justifyContent: 'space-between', marginBottom: '24px' },
    btnPrimary: { backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' },
    addForm: { background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-end' },
    formGroup: { display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minWidth: '150px' },
    input: { padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none' },
    table: { width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' },
    th: { backgroundColor: '#f8fafc', padding: '12px', fontSize: '0.8rem', fontWeight: '600', color: '#64748b', textAlign: 'left', borderBottom: '1px solid #e2e8f0' },
    td: { padding: '12px', borderBottom: '1px solid #f1f5f9' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Students Directory</h2>
        <button style={styles.btnPrimary} onClick={() => setShowForm(!showForm)}>
          {showForm ? '➖ Hide Form' : '➕ Add Student'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddStudent} style={styles.addForm}>
          <div style={styles.formGroup}>
            <label style={{fontSize: '0.75rem', fontWeight: '600'}}>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} placeholder="John Doe" />
          </div>
          <div style={styles.formGroup}>
            <label style={{fontSize: '0.75rem', fontWeight: '600'}}>Major</label>
            <input type="text" value={major} onChange={e => setMajor(e.target.value)} style={styles.input} placeholder="Physics" />
          </div>
          <div style={styles.formGroup}>
            <label style={{fontSize: '0.75rem', fontWeight: '600'}}>Assign Course</label>
            <select value={courseId} onChange={e => setCourseId(e.target.value)} style={styles.input}>
              <option value="CS101">CS101 (Computer Science)</option>
              <option value="MATH201">MATH201 (Calculus II)</option>
              <option value="PHY210">PHY210 (Physics)</option>
              <option value="CHEM101">CHEM101 (Chemistry)</option>
              <option value="BIO102">BIO102 (Biology)</option>
              <option value="ENG105">ENG105 (English)</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={{fontSize: '0.75rem', fontWeight: '600'}}>Year</label>
            <select value={year} onChange={e => setYear(e.target.value)} style={styles.input}>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <button type="submit" style={styles.btnPrimary}>Save</button>
        </form>
      )}

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Major</th>
            <th style={styles.th}>Course ID</th>
            <th style={styles.th}>Year</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={styles.td}>{student.id}</td>
              <td style={styles.td, {fontWeight: '600'}}>{student.name}</td>
              <td style={styles.td}>{student.major}</td>
              <td style={styles.td}><span style={{background: '#eff6ff', color: '#2563eb', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '600'}}>{student.courseId}</span></td>
              <td style={styles.td}>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;