import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./lib/NotFound";
import {FrontPage} from "./pages/FrontPage";
import requests from "./lib/http/requests";

export function Application() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<FrontPage movieApi={requests}/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}
