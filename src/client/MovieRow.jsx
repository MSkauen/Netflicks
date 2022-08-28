import React, {useState} from "react";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import {useLoading} from "./lib/http/useLoading";
import "../shared/css/MovieRow.css";

function MovieRow ({data, title, isLargeRow}) {
    const [movies] = useState(data);
    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className="movie_posters">
                    {movies.map(movie => (
                        <>
                            <img key={movie.id} className={`movie_poster ${isLargeRow && "movie_poster_large"}`}
                                 src={movie.image.original} alt={movie.name}/>
                             <h4>{movie.name}</h4>
                            <span>{movie.rating.average}</span>
                         </>
                    ))}
                </div>
            </div>
    )
}

export default function GetMovieRow ({movieApi, genre, title, isLargeRow}) {
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
        return <MovieRow data={filteredMovies.splice(0, 15)} title={title} isLargeRow={isLargeRow} />;
    }

    return <MovieRow data={data.splice(0, 15)} title={title} isLargeRow={isLargeRow}/>;
}

