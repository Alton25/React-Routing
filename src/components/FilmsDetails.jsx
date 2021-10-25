import { Link } from "react-router-dom";

const FilmsDetails = () => {
    return(
        <nav className="bg-success " style={{display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/">Go Home</Link>
        <Link to="/films">View Films</Link>
        <Link to="/people">View People</Link>
    </nav>
    )
}

export default FilmsDetails;