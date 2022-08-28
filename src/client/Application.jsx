import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { requests } from "./lib/http/requests";
import { FrontPage } from "./pages/FrontPage";
import NotFound from "./lib/NotFound";
import {SearchResults} from "./pages/SearchResults";

export function Application() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<FrontPage movieApi={requests}/>}/>
                <Route exact path={"/search/shows/:id"} element={<SearchResults movieApi={requests}/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}
