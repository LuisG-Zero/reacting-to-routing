import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./components/Home";
import Films from "./components/Films";
import People from "./components/People";
import FilmDetails from "./components/FilmDetails";
import PersonDetails from "./components/PersonDetails";

const App = () => {
    return (
        <BrowserRouter>

            <Navbar />

            <Switch>
                <Route exact path="/films">
                    <Films />
                </Route>

                <Route exact path="/films/:filmid">
                    <FilmDetails />
                </Route>

                <Route exact path="/people">
                    <People />
                </Route>

                <Route exact path="/people/:personid">
                    <PersonDetails />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    {() => <h1>404 - Page Not Found</h1>}
                </Route>
            </Switch>


            <div className="site-links text-center mb-3">

                <Link to={"/"}> Home </Link>  |
                <Link to={"/films"}> View Films </Link>  |
                <Link to={"/people"}> View People </Link>  |

            </div>
        </BrowserRouter>
    );
};

export default App;