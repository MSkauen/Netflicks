import React from "react";
import GetMovieBanner from "../MovieBanner";
import Navbar from "../Navbar";
import "../../shared/css/App.css";

export function SearchResults ({movieApi}) {
    return <div className="App">
        <Navbar movieApi={movieApi}/>
        <GetMovieBanner movieApi={movieApi}/>
    </div>
}