import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(people => setPeople(people))
            .catch(err => console.log(err));
    }, []);

    return (
        <main className="container">
            <section className="row mt-5 mb-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h1 className="text-center">People</h1>

                    <ul className="list-group">
                        {people.map(person => (
                            <li
                                key={`user-item-${person.id}`}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {person.name}

                                <Link
                                    to={`/people/${person.id}`}
                                    className="btn btn-primary">See Details
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

export default People;



