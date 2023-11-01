import { useParams } from "react-router-dom";
import Missing from './Missing';

function StudentPage({ students, hundleDelete }) {

    const {id} = useParams()
    const student = students.find(student => (student.id).toString() === id)

    return ( 
        <div className="student_page">
            <article className="student">
                {
                    student && (
                        <>
                            <div className="top">
                            <img src={student.profile} alt="" />
                            <div className="text">
                                <h1 className="Name">{student.name}</h1>
                                <p className="course">Course: {student.course}</p>
                                <p className="school">Institution: {student.school}</p>
                            </div>
                        </div>

                        <div className="bio">
                            <div className="tag">Bio</div>
                            <p>{student.bio}</p>
                        </div>

                        <button className="delete" onClick={()=> hundleDelete(student.id)}>Delete Student</button>
                        </>
                    )
                }

                {
                    (!student) && (
                        <Missing/>
                    )
                }
            </article>
        </div>
     );
}

export default StudentPage;