import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { useState } from 'react';
import { kInitialStudentData } from './data';

function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);

  const toggleStudentPresence = (studentId) => {
    const students = studentData.map(student => {
      if (student.id === studentId) {
        return { 
          ...student, 
          isPresentData: !student.isPresentData 
        };
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  const deleteAllStudents = () => {
    setStudentData([])
  }

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList 
      students={studentData}
      onStudentPresenceToggle={toggleStudentPresence}></StudentList>
      <button onClick={deleteAllStudents}>Delete all Students</button>
    </main>
  );
}

export default App;
