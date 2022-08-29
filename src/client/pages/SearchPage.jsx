import React from "react";
import "../../shared/css/App.css";
import Navbar from "../components/Navbar";
import GetRandomMovieBanner from "../components/MovieBanner";
import GetSearchResults from "../components/SearchResults";

export function SearchPage ({movieApi}) {
    return <div className="App">
        <Navbar movieApi={movieApi}/>
        <GetRandomMovieBanner movieApi={movieApi}/>
        <GetSearchResults title="Result" movieApi={movieApi}/>
    </div>
}