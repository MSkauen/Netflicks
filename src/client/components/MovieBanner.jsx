import React, { useState } from "react";
import Background from "./Background";
import { ErrorView } from "../lib/ErrorView";
import truncate from "../lib/truncate";
import { LoadingView } from "../lib/LoadingView";
import { useLoading } from "../lib/http/useLoading";
import "../../shared/css/MovieBanner.css";
import {useParams} from "react-router";

function MovieBanner ({movieApi, data}) {
    const [movie] = useState(data)
    const cleanMovieSummary = movie.summary.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(data)
    return (
        <header className="banner">
            <div className="banner_contents">
                <Background movieApi={movieApi} movieId={movie.id}/>
                <h1 className="banner_title">{data.name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">Add to My list</button>
                </div>
                <h1 className="banner_description">
                    {truncate(cleanMovieSummary, 150)}
                </h1>
            </div>

            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default function GetRandomMovieBanner ({movieApi}) {
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

    return <MovieBanner movieApi={movieApi} data={data}/>;
}

export function GetSingleMovieBanner ({movieApi}) {
    const { id } = useParams();

    const { data: data, loading, error, reload } = useLoading(
        async () => await movieApi.getMovieSummary(id),
        []
    );

    if (error) {
        return <ErrorView error={error} reload={reload()} />;
    }

    if (loading || !data) {
        return <LoadingView />;
    }

    return <MovieBanner movieApi={movieApi} data={data}/>;
}