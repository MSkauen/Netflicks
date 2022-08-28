import React from "react";
import "../../shared/css/App.css";
import GetMovieRow from "../MovieRow";
import GetMovieBanner from "../MovieBanner";

export function FrontPage ({movieApi}) {
    return <div className="App">
        <GetMovieBanner movieApi={movieApi}/>
        <GetMovieRow title="All movies" isLargeRow movieApi={movieApi}/>
        <GetMovieRow title="Action" genre="Action" movieApi={movieApi}/>
        <GetMovieRow title="Comedy" genre="Comedy" movieApi={movieApi}/>
        <GetMovieRow title="Crime" genre="Crime" movieApi={movieApi}/>
        <GetMovieRow title="Drama" genre="Drama" movieApi={movieApi}/>
        <GetMovieRow title="Horror" genre="Horror" movieApi={movieApi}/>
        <GetMovieRow title="Romance" genre="Romance" movieApi={movieApi}/>
        <GetMovieRow title="Science-Fiction" genre="Science-Fiction" movieApi={movieApi}/>
        <GetMovieRow title="Thriller" genre="Thriller" movieApi={movieApi}/>
    </div>
}