import './App.css';
import SideBar from './Components/SideBar'

import Home from './Components/Home'
import AddStudent from './Components/AddStudent'
import StudentPage from './Components/StudentPage';
import Missing from './Components/Missing'

import Person2 from './asserts/person-2.jpg'
import Person3 from './asserts/person-3.jpg'
// import Person1 from './asserts/person-1.jpg'
import Person4 from './asserts/person-4.jpg'
// import Person5 from './asserts/person-5.jpg'
// import Person6 from './asserts/person-6.jpg'

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

  const [students, setStudents] = useState([
    {
        id: 1,
        name: 'Tanjiro Kamado',
        course: 'Demon Slayer',
        school: 'Demon Slayer Corps',
        profile: Person2,
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima necessitatibus officia, repellat temporibus reiciendis magni quisquam atque eligendi dignissimos, aspernatur optio architecto cum voluptas adipisci consectetur vero vel. Fugiat necessitatibus ut incidunt iusto ducimus et, libero consequuntur a, vel aliquam repellendus voluptatem expedita veritatis dolore, cupiditate quisquam! Doloremque veniam consequuntur molestias. Magni sunt unde quidem. Quod rem eos minus impedit culpa porro dolorem, quos animi laborum accusamus doloremque nihil nesciunt omnis provident incidunt aperiam, autem placeat!'
    },
    {
        id: 2,
        name: 'McCoy Sonya',
        course: 'Business Management',
        school: 'Stanford University',
        profile: Person3,
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima necessitatibus officia, repellat temporibus reiciendis magni quisquam atque eligendi dignissimos, aspernatur optio architecto cum voluptas adipisci consectetur vero vel. Fugiat necessitatibus ut incidunt iusto ducimus et, libero consequuntur a, vel aliquam repellendus voluptatem expedita veritatis dolore, cupiditate quisquam! Doloremque veniam consequuntur molestias. Magni sunt unde quidem. Quod rem eos minus impedit culpa porro dolorem, quos animi laborum accusamus doloremque nihil nesciunt omnis provident incidunt aperiam, autem placeat!'
    },
    {
        id: 3,
        name: 'Jawad Mc',
        course: 'Computer Programming',
        school: 'Dori Codes',
        profile: Person4,
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima necessitatibus officia, repellat temporibus reiciendis magni quisquam atque eligendi dignissimos, aspernatur optio architecto cum voluptas adipisci consectetur vero vel. Fugiat necessitatibus ut incidunt iusto ducimus et, libero consequuntur a, vel aliquam repellendus voluptatem expedita veritatis dolore, cupiditate quisquam! Doloremque veniam consequuntur molestias. Magni sunt unde quidem. Quod rem eos minus impedit culpa porro dolorem, quos animi laborum accusamus doloremque nihil nesciunt omnis provident incidunt aperiam, autem placeat!'
    }
])

  useEffect(() => {
    const searchedItems = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()) || student.course.toLowerCase().includes(search.toLowerCase()) || student.school.toLowerCase().includes(search.toLowerCase()) || student.bio.toLowerCase().includes(search.toLowerCase()))

    setResults(searchedItems)

  }, [students, search])

  // const history = useHistory()

  const hundleDelete = (id) =>{
    const filteredStudents = students.filter(student => student.id !== id)
    setStudents(filteredStudents)
    // history.push('/')
  }

  const hundleSubmit = (e) =>{
    e.preventDefault()
    const id = students.length ? students[students.length - 1].id + 1 : 1
    const newStudent = {id, name: studentName, course: studentCourse, school: studentSchool, profile: studentProfile, bio: studentBio}
    const newList = [...students, newStudent]
    setStudents(newList)

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
