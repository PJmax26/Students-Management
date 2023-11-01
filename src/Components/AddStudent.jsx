function AddStudent({
    studentName, setStudentName, studentCourse, setStudentCourse, studentSchool, setStudentSchool, studentBio, setStudentBio, studentProfile, setStudentProfile, hundleSubmit
}) {
    return ( 

        <div className="new_student">
            <h1>Add New Student</h1>

            <form onSubmit={hundleSubmit} id="addStudent">
                <label htmlFor="profile">Profile Picture</label>
                <br />
                <input type="file"
                id="profile"
                value={studentProfile}
                onChange={(e) => setStudentProfile(e.target.value)}
                required
                />
                <br />

                <label htmlFor="name">Full Name</label>
                <br />
                <input type="text"
                id="name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
                />
                <br />

                <label htmlFor="course">Course</label>
                <br />
                <input type="text"
                id="course"
                value={studentCourse}
                onChange={(e) => setStudentCourse(e.target.value)}
                required
                />
                <br />

                <label htmlFor="school">School</label>
                <br />
                <input type="text"
                id="school"
                value={studentSchool}
                onChange={(e) => setStudentSchool(e.target.value)}
                required
                />
                <br />

                <label htmlFor="bio">Bio</label>
                <br />
                <textarea id="bio"
                value={studentBio}
                onChange = {(e) => setStudentBio(e.target.value)}
                required
                ></textarea>
                <br />

                <button className="btn">Submit</button>
            </form>
        </div>
     );
}

export default AddStudent;