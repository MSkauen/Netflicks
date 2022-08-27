import React, {useState} from "react";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import {useLoading} from "./lib/http/useLoading";
import "../shared/css/MovieRow.css";

function MovieRow ({data, title}) {
    const [movies] = useState(data);

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className="movie_posters">
                    {movies.map(movie => (
                        <img key={movie.id} className="movie_poster"
                             src={movie.image.original} alt={movie.name}/>
                    ))}
                </div>
            </div>
    )
}

export default function GetMovieRow ({movieApi, genre, title}) {
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

    if(data && genre){
        const filteredMovies = data.filter(movie => movie.genres.includes(genre));
        return <MovieRow data={filteredMovies} title={title} />;
    }

    return <MovieRow data={data} title={title} />;
}

