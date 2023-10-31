import { Link } from "react-router-dom";

function Missing() {
    return ( 
        <div className="missing">
            
            <h1>Page Not Found</h1>

            <Link className="link" to='/'>Go back to Home</Link>
        </div>
     );
}

export default Missing;