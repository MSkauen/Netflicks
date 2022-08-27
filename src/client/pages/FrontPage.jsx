import React from "react";
import "../../shared/css/App.css";
import GetMovieRow from "../MovieRow";

export function FrontPage ({movieApi}) {
    return <div className="App">
        <GetMovieRow title="All movies" movieApi={movieApi}/>
        <GetMovieRow title="Action" genre="Action" movieApi={movieApi}/>
    </div>
}