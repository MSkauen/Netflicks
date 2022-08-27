import React from "react";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import {useLoading} from "./lib/http/useLoading";

function MovieRow ({movies, title}) {
    {console.log(movies)}
    return (
        <div>
            <h1>{title}</h1>
            TEST
        </div>
    )
}

export default function GetMovieRow ({movieApi, title}) {
    const { data: data, loading, error, reload } = useLoading(
        async () => await movieApi(),
        []
    );

    if (error) {
        return <ErrorView error={error} reload={reload()} />;
    }

    if (loading || !data) {
        return <LoadingView />;
    }

    return <MovieRow movies={data} title={title} />;
}

