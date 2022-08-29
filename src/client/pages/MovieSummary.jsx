import React from "react";
import {GetSingleMovieBanner} from "../components/MovieBanner";
import Navbar from "../components/Navbar";
import "../../shared/css/App.css";
import GetMovieRow from "../components/MovieRow";

export function MovieSummary ({movieApi}) {
    return <div className="App">
        <Navbar movieApi={movieApi}/>
        <GetSingleMovieBanner movieApi={movieApi}/>
        <GetMovieRow title="Other titles" genre="" isLargeRow movieApi={movieApi}/>
    </div>
}