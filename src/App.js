import './App.css';
import SideBar from './Components/SideBar'

import Home from './Components/Home'
import AddStudent from './Components/AddStudent'
import StudentPage from './Components/StudentPage';
import Missing from './Components/Missing'

import { BrowserRouter as Router, Routes, Route, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [studentName, setStudentName] = useState('')
  const [studentCourse, setStudentCourse] = useState('')
  const [studentSchool, setStudentSchool] = useState('')
  const [studentBio, setStudentBio] = useState('')
  const [studentProfile, setStudentProfile] = useState('')
  const [search, setSearch] = useState('')
  const [results, setResults] = useState('')

  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('studentslist')))

  useEffect(() => {
    const searchedItems = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()) || student.course.toLowerCase().includes(search.toLowerCase()) || student.school.toLowerCase().includes(search.toLowerCase()) || student.bio.toLowerCase().includes(search.toLowerCase()))

    setResults(searchedItems)
    
  }, [students, search])

  // const history = useHistory() 

  const setAndSaveItems = (newItems) => {
    setStudents(newItems)
    localStorage.setItem('studentslist', JSON.stringify(newItems))
  }

  const hundleDelete = (id) =>{
    const listItems = students.filter(student => student.id !== id)
    setAndSaveItems(listItems)
    // history.push('/')
  }

  const hundleSubmit = (e) =>{
    e.preventDefault()
    const id = students.length ? students[students.length - 1].id + 1 : 1
    const newStudent = {id, name: studentName, course: studentCourse, school: studentSchool, profile: studentProfile, bio: studentBio}
    const listItems = [...students, newStudent]
    setAndSaveItems(listItems)

    setStudentBio('')
    setStudentCourse('')
    setStudentName('')
    setStudentProfile('')
    setStudentSchool('')
  }

  return (
    <div className = 'container'>
      <Router>
      <SideBar
        students = {students}
        search = {search}
        setSearch = {setSearch}
      />
        <Routes>
          <Route path = '/' element = {<Home
            students = {results}
          />}/>
          <Route path = 'addstudent' element = {<AddStudent
            studentName = {studentName}
            setStudentName = {setStudentName}
            studentCourse = {studentCourse}
            setStudentCourse = {setStudentCourse}
            studentSchool = {studentSchool}
            setStudentSchool = {setStudentSchool}
            studentBio = {studentBio}
            setStudentBio = {setStudentBio}
            studentProfile = {studentProfile}
            setStudentProfile = {setStudentProfile}
            hundleSubmit = {hundleSubmit}
          />}/>
          <Route path = 'student/:id' element = {<StudentPage
            students = {students}
            hundleDelete = {hundleDelete}
          />}/>
          <Route path = '*' element = {<Missing/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
