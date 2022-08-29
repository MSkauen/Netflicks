import React, {useState} from "react";
import {useLoading} from "../lib/http/useLoading";
import {ErrorView} from "../lib/ErrorView";
import {LoadingView} from "../lib/LoadingView";
import missing from "../../shared/img/missing.png";

function Background ({backgroundUrl, isRow}) {
    const [data] = useState(backgroundUrl)
    const filteredBackgrounds = data.find(res => res.type === "background");
    const filteredPosters = data.find(res => res.type === "poster");

    if(data.length !== 0) {
        if(isRow && filteredBackgrounds && !data.length < 1) {
            return <img key={data.id + 100} className="movie_poster_landscape" src={filteredBackgrounds.resolutions.original.url} alt={data.name}/>
        } else if (!filteredBackgrounds) {
            return <img key={data.id + 100} className="movie_poster_landscape" src={filteredPosters.resolutions.original.url} alt={data.name}/>
        } else if (data){
            return <img key={data.id + 100} className="movie_banner" src={filteredBackgrounds.resolutions.original.url} alt={data.name}/>
        }
    } else {
        return <img className="movie_poster_landscape" src={missing} alt=""/>
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
