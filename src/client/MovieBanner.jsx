import React, {useState} from "react";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import {useLoading} from "./lib/http/useLoading";
import "../shared/css/MovieRow.css";

function MovieBanner ({data}) {
    const [movie] = useState(data);

    return (
        <header>
            <div className="banner_container">
                <h1>{movie.name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">Add to My list</button>
                </div>
            </div>
            {movie.name}
        </header>
    )
}

export default function GetMovieBanner ({movieApi}) {
    const { data: data, loading, error, reload } = useLoading(
        async () => await movieApi.getRandomMovie(),
        []
    );

    if (error) {
        return <ErrorView error={error} reload={reload()} />;
    }

    if (loading || !data) {
        return <LoadingView />;
    }

    return <MovieBanner data={data}/>;
}

