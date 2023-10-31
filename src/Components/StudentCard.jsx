import { useState } from "react";

function StudentCard() {

    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Nassam Jawad',
            course: 'Computer Science',
            school: 'UENR'
        },
        {
            id: 1,
            name: 'John Doe',
            course: 'Computer Engineering',
            school: 'MIT'
        },
        {
            id: 1,
            name: 'Mike Sonya',
            course: 'Medicine',
            school: 'Stanford'
        },
    ])

    return ( 

        <ul>
            {
                students.map(student => (
                    <div className="student_card" id={student.id}>
                        <h1>{student.name}</h1>
                        <h2>{student.course}</h2>
                        <h4>{student.school}</h4>
                    </div>
                ))
            }
        </ul>
     );
}

export default StudentCard;