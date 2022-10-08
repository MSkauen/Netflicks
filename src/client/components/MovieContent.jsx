import {useLoading} from "../lib/http/useLoading";
import {ErrorView} from "../lib/ErrorView";
import {LoadingView} from "../lib/LoadingView";
import React, {useState} from "react";
import Background from "./Background";

function MovieContent ({ data, movieApi }) {
    const [movie] = useState(data);

    return (
        <div className="row">

            <h2 className="search_results_title">Episodes</h2>

            <select className="banner_button" onChange={handleSeasonChange} value={sortGenre}>
                <option value="">Season 1</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Science-Fiction">Science-fiction</option>
                <option value="Thriller">Thriller</option>
            </select>



            <h2>{title}</h2>
            <div className="movie_posters">

                    <a key={movie.id} href={`/show/${movie.id}`} className="movie">
                            <>
                                <div className="movie_details">
                                    <h4>{movie.name}</h4>
                                    <span>{movie.rating.average}</span>
                                </div>

                                <Background movieApi={movieApi} movieId={movie.id} isRow/>
                            </>
                    </a>

            </div>
        </div>
    )
}

export default function GetMovieRow ({movieApi, title, genre, isLargeRow}) {
    const { data: data, loading, error, reload } = useLoading(
        async () => await movieApi.getAllMovies(),
        []
    );

    if (error) {
        return <ErrorView error={error} reload={reload()} />;
    }

    if (loading || !data) {
        return <LoadingView />;
    }

    if(data && genre) {
        const filteredMovies = data.filter(movie => movie.genres.includes(genre));
        return <MovieRow data={filteredMovies.splice(0, 15)} title={title} isLargeRow={isLargeRow} />;
    }

    return <MovieRow movieApi={movieApi} data={data.splice(0, 15)} title={title} isLargeRow={isLargeRow}/>;
}
