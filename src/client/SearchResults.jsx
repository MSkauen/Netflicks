import React, {useEffect, useState} from "react";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import {useLoading} from "./lib/http/useLoading";
import "../shared/css/MovieRow.css";
import "../shared/css/SearchResults.css";
import Background from "./Background";
import {useParams} from "react-router";

function SearchResults ({movieApi, data, title}) {
    const [movies] = useState(data);
    const [sortType, setSortType] = useState(false);
    let [sortedMovies] = useState(movies);

    const sortedMoviesAsc = [].concat(movies)
        .sort((a, b) => a.show.rating.average > b.show.rating.average ? 1 : -1);

    const sortedMoviesDes = [].concat(movies)
        .sort((a, b) => a.show.rating.average < b.show.rating.average ? 1 : -1);

    const sort = () => {
        setSortType(current => !current)
    };

    if (sortType === false) {
        sortedMovies = sortedMoviesDes;
    } else if (sortType === true) {
        sortedMovies = sortedMoviesAsc;
    }


    return (
        <div className="search_results_row">
            <h2>Search results for '{title}': {data.length} titles</h2>
            <button className="banner_button" onClick={sort}>Sort by rating</button>
            <div className="search_results_posters">
                {sortedMovies.map(movie => (
                    <div className="movie">
                        <div className="movie_details">
                            <h4 key={movie.show.name}>{movie.show.name}</h4>
                            <span key={"r" + movie.id}>{movie.show.rating.average}</span>
                        </div>
                        <Background key={movie.show.id} movieApi={movieApi} movieId={movie.show.id} isRow/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function GetSearchResults ({movieApi, title}) {
    const { id } = useParams()

    const { data: data, loading, error, reload } = useLoading(
        async () => await movieApi.getMovie(id),
        []
    );

    if (error) {
        return <ErrorView error={error} reload={reload()} />;
    }

    if (loading || !data) {
        return <LoadingView />;
    }

    return <SearchResults movieApi={movieApi} data={data.splice(0, 15)} title={id}/>;
}

