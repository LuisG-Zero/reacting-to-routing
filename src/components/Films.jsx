import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(data => setFilms(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <main className="container">
            <section className="row mt-5 mb-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h1 className="text-center">Films</h1>

                    <ul className="list-group">
                        {films.map(film => (
                            <li
                                key={`user-item-${film.id}`}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {film.title}

                                <Link
                                    to={`/films/${film.id}`}
                                    className="btn btn-primary">See Film Details
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-3"></div>
            </section>
        </main>
    );
};

export default Films;


