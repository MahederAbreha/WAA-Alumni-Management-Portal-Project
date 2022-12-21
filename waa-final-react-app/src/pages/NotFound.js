import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span className="d-flex justify-content-center">
                        <h1>404</h1>
                    </span>
                    <div className="d-flex justify-content-center">
                        <h2>Page not found</h2>
                    </div>

                    <Link to="/home" className="btn btn-link">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};
