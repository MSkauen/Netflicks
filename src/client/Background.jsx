import {useLoading} from "./lib/http/useLoading";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import React from "react";

function Background ({data}) {

    const filteredImages = data.find(res => res.type === "background");

    return (
            <img className="movie_banner" src={filteredImages.resolutions.original.url}/>
    )
}

export default function getBackground ({movieApi, movieId}) {

    const { data: data, loading, error, reload } = useLoading(
        async () => await movieApi.getMovieBackground(movieId),
        []
    );

    if (error) {
        return <ErrorView error={error} reload={reload()} />;
    }

    if (loading || !data) {
        return <LoadingView />;
    }

    return <Background data={data}/>;
}
