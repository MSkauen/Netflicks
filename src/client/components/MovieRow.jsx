import React, {useState} from "react";
import {ErrorView} from "../lib/ErrorView";
import {LoadingView} from "../lib/LoadingView";
import {useLoading} from "../lib/http/useLoading";
import "../../shared/css/MovieRow.css";
import Background from "./Background";

function MovieRow ({movieApi, data, title, isLargeRow}) {
    const [movies] = useState(data);

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className="movie_posters">
                    {movies.map(movie => (
                        <a key={movie.id} href={`/show/${movie.id}`} className="movie">
                            {!isLargeRow ? (
                                <img className={`movie_poster ${isLargeRow && "movie_poster_landscape"}`}
                                     src={movie.image.original} alt={movie.name}/>
                            ) : (
                                <>
                                    <div className="movie_details">
                                        <h4>{movie.name}</h4>
                                        <span>{movie.rating.average}</span>
                                    </div>
                                    <Background movieApi={movieApi} movieId={movie.id} isRow/>
                                </>
                                )}
                        </a>
                    ))}
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

