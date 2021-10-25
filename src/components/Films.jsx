import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Films = () => {
    const [Pics, setPics] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(allFilms => setPics(allFilms))
    }, []);
    return (
        <>
            <nav className="bg-danger " style={{display: 'flex', justifyContent: 'space-around' }}>
                <Link to="/">Go Home</Link>
                <Link to="/films">View Films</Link>
                <Link to="/films/<id>">View Details</Link>
                <Link to="/people">View People</Link>
                <h1>This is the film page</h1>
            </nav>
    { Pics.map(Films => (
            <div className="col-md-6" key={`Films-card-${Films.id}`}>
                <div className="card shadow my-2">
                    <div className="card-body">
                        <h4 className="card-title">{Films.title}</h4>
                        <p className="card-subtitle">{Films.original_title}</p>
                        <p className="className card-date">{Films.release_date}</p>
                        <p className="className card-text">{Films.description}</p>

                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default Films;