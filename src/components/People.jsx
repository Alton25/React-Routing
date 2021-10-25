import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

const People = () => {
    const [Peeps, setPeeps] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then(res => res.json())
            .then(allPeeps => setPeeps(allPeeps))
    }, []);
    return(
        <>
        <nav className="bg-secondary " style={{display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/">Go Home</Link>
        <Link to="/films">View Films</Link>
        <Link to="/films/<id>">View Details</Link>
        <Link to="/people">View People</Link>
    </nav>
    {Peeps.map(People => (
        <div className="col-md-6" key={`Peeps-card-${People.id}`}>
            <div className="card shadow my-2">
                <div className="card-body">
                   <h4 className="card-title">{People.name}</h4>
                   <p className="card-subtitle">{People.age}</p>
                   <p className="className card-date">{People.gender}</p>

                </div>
            </div>
        </div>
    ))}
    </>
    )
}

export default People;