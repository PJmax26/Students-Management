import { Link } from 'react-router-dom';

function SideBar({ students,search, setSearch }) {
    return ( 
        <aside className='SideBar'>


            <div className="buttons">
                <Link className='btn' to='/'>Home</Link>
                <Link className='btn' to = 'addstudent'>Add Student</Link>
            </div>

            <h2>Students Count: </h2>
            <div className="students_count">{students.length}</div>

            <div className="search">
                <label htmlFor="search">Search a specific student</label>
                <input type="text" 
                    required
                    id='search'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </div>


        </aside>
     );
}

export default SideBar;