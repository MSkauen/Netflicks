import React, { useState} from "react";
import {ErrorView} from "../lib/ErrorView";
import {LoadingView} from "../lib/LoadingView";
import {useLoading} from "../lib/http/useLoading";
import "../../shared/css/MovieRow.css";
import "../../shared/css/SearchResults.css";
import Background from "./Background";
import {useParams} from "react-router";

export function SearchResults ({movieApi, data, query}) {
    const [movies] = useState(data);
    const [sortType, setSortType] = useState(false);
    const [sortGenre, setSortGenre] = useState('');

    let [sortedMovies] = useState(movies);

    const sortedMoviesAsc = [].concat(movies)
        .sort((a, b) => a.show.rating.average > b.show.rating.average ? 1 : -1);

    const sortedMoviesDes = [].concat(movies)
        .sort((a, b) => a.show.rating.average < b.show.rating.average ? 1 : -1);
    const sort = () => {
        setSortType(current => !current)

    };
    const handleCategoryChange = (e) => {
        setSortGenre(e.target.value);

    };

    //This is not great
    if (sortType === false) {
        sortedMovies = sortedMoviesDes;
    } else if (sortType === true) {
        sortedMovies = sortedMoviesAsc;
    }
    if(data && sortGenre) {
        sortedMovies = sortedMovies.filter(movie => movie.show.genres.includes(sortGenre));
    }

    return (
        <div className="search_results_row">
            <h2 className="search_results_title">Search results for '{query}': {data.length} titles</h2>
            <button className="banner_button" onClick={sort}>Sort by rating</button>

            <select className="banner_button" onChange={handleCategoryChange} value={sortGenre}>
                <option value="">Sort by category</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Science-Fiction">Science-fiction</option>
                <option value="Thriller">Thriller</option>
            </select>

            <div className="search_results_posters">
                {sortedMovies.map(movie => (
                    <a key={movie.show.id} href={`/show/${movie.show.id}`} className="movie">
                        <div className="movie_details">
                            <h4>{movie.show.name}</h4>
                            <span>{movie.show.rating.average}</span>
                        </div>
                        <Background movieApi={movieApi} movieId={movie.show.id} isRow/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default function GetSearchResults ({movieApi}) {
    const { id } = useParams()

    const { data: data, loading, error, reload } = useLoading(
        async () => await movieApi.getMovie(id),
        [id]
    );

    if (error) {
        return <ErrorView error={error} reload={reload()} />;
    }

    if (loading || !data) {
        return <LoadingView />;
    }

    return <SearchResults movieApi={movieApi} data={data.splice(0, 15)} query={id}/>;
}

