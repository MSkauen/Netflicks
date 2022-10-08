import React from "react";
import "../../shared/css/App.css";
import Navbar from "../components/Navbar";
import GetRandomMovieBanner from "../components/MovieBanner";
import GetSearchResults from "../components/SearchResults";
import GetMovieRow from "../components/MovieRow";

export function SearchPage ({movieApi}) {
    return <div className="App">
        <Navbar />
        <GetRandomMovieBanner movieApi={movieApi}/>
        <GetSearchResults title="Result" movieApi={movieApi}/>
        <GetMovieRow title="Other titles" genre="" movieApi={movieApi}/>
    </div>
}