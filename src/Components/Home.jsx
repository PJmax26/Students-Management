import { Link } from "react-router-dom";

function Home({ students}) {

    return ( 

        students.length ? (
            <div className="students_container">
            {
                students.map(student => (
                    <div className="student_card" key={student.id} id={student.id}>
                        <img src={student.profile} alt=""/>
                        <Link className = 'link' to={`student/${student.id}`}>
                            <p className="Name">{student.name}</p>
                            <p className="Course">{student.course}</p>
                            <p className="school">{student.school}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
        ) : (
            <p style={{textAlign: 'center', fontSize: '20px'}}>You have no students recorded ...</p>
        )
     );
}

export default Home;