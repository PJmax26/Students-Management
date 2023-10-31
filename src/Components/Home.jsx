// import StudentCard from "./StudentCard";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ students}) {

    return ( 
        <div className="students_container">
            {
                students.map(student => (
                    <div className="student_card" id={student.id}>
                        <img src={student.profile}/>
                        <Link className = 'link' to={`student/${student.id}`}>
                            <p className="Name">{student.name}</p>
                            <p className="Course">{student.course}</p>
                            <p className="school">{student.school}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
     );
}

export default Home;