import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";


const Home = () => {
    const [homeRun, sethomeRun] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/')
            .then(res => res.json())
            .then(allhomeRun => sethomeRun(allhomeRun))
    }, []);
    return(
        
        <nav className="bg-warning " style={{display: 'flex', justifyContent: 'space-around' }}>
            <Link to="/">Go Home</Link>
            <Link to="/films">View Films</Link>
            <Link to="/films/<id>">View Details</Link>
            <Link to="/people">View People</Link>
        </nav>
    )
}
export default Home;