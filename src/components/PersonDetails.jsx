import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PersonDetails = () => {
    const { personid } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(person => setPerson(person));
    }, [personid]);

    return (
        <main className="container">
            <section className="row mt-5 mb-5">
                <div className="col-md-3">
                    <button type="button" className="btn btn-default btn-sm">
                        <Link to="/people" className="card-link">Go Back</Link>
                    </button>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">{person?.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center">Name</h6>
                            <hr className="divider"/>

                            <p className="card-text">{person?.age}</p>
                            <h6 className="card-subtitle mb-2 text-muted">Age</h6>

                            <p className="card-text">{person?.gender}</p>
                            <h6 className="card-subtitle mb-2 text-muted">Gender</h6>

                            <p className="card-text">{person?.films}</p>
                            <h6 className="card-subtitle mb-2 text-muted">Films</h6>

                            <p className="card-text">{person?.url}</p>
                            <h6 className="card-subtitle mb-2 text-muted">URL</h6>

                        </div>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </section>
        </main>

    );
};

export default PersonDetails;
