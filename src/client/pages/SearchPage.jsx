import React from "react";
import GetMovieBanner from "../MovieBanner";
import Navbar from "../Navbar";
import "../../shared/css/App.css";
import GetSearchResults from "../SearchResults";

export function SearchPage ({movieApi}) {
    return <div className="App">
        <Navbar movieApi={movieApi}/>
        <GetMovieBanner movieApi={movieApi}/>
        <GetSearchResults title="Result" movieApi={movieApi}/>
    </div>
}