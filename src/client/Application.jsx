import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { requests } from "./lib/http/requests";
import { FrontPage } from "./pages/FrontPage";
import NotFound from "./lib/NotFound";
import {SearchPage} from "./pages/SearchPage";
import {MovieSummaryPage} from "./pages/MovieSummaryPage";

export function Application() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<FrontPage movieApi={requests}/>}/>
                <Route exact path={"/search/shows/:id"} element={<SearchPage movieApi={requests}/>}/>
                <Route exact path={"/show/:id"} element={<MovieSummaryPage movieApi={requests}/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}
