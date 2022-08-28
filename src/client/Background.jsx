import {useLoading} from "./lib/http/useLoading";
import {ErrorView} from "./lib/ErrorView";
import {LoadingView} from "./lib/LoadingView";
import React, {useState} from "react";

function Background ({backgroundUrl, isRow}) {
    const [data] = useState(backgroundUrl)
    const filteredImages = data.find(res => res.type === "background");

    if(isRow && filteredImages && !data.length < 1) {
        return <img key={data.id + 100} className="movie_poster_landscape" src={filteredImages.resolutions.original.url} alt={data.name}/>
    } else if (!filteredImages) {
        return <img key={data.id + 100} className="movie_poster_landscape" src={data[0].resolutions.original.url} alt={data.name}/>
    } else {
        return <img key={data.id + 100} className="movie_banner" src={filteredImages.resolutions.original.url} alt={data.name}/>
    }
}


export default function getBackground ({movieApi, movieId, isRow}) {

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

    return <Background backgroundUrl={data} isRow={isRow}/>;
}
