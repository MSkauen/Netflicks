import React from "react";
import {GetSingleMovieBanner} from "../components/MovieBanner";
import Navbar from "../components/Navbar";
import "../../shared/css/App.css";

export function MovieSummaryPage ({movieApi}) {
    return <div className="App">
        <Navbar movieApi={movieApi}/>
        <GetSingleMovieBanner movieApi={movieApi}/>
    </div>
}