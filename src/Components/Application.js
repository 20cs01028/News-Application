import React from "react";
import NavBar2 from "./NavBar2";
import NavBar1 from "./NavBar1";
import News from "./News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../CSS/Application.css";

function Application() {
    return (
        <div>
            <BrowserRouter>
                <NavBar1 />
                <NavBar2 />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <News key="general"
                                category="general" />}
                    />
                    <Route
                        path="/Entertainment"
                        element={
                            <News key="entertainment"
                                category="entertainment" />
                        }
                    />
                    <Route
                        path="/Technology"
                        element={
                            <News key="technology"
                                category="technology" />}
                    />
                    <Route
                        path="/Sports"
                        element={
                            <News key="sports"
                                category="sports" />}
                    />
                    <Route
                        path="/Business"
                        element={
                            <News key="business"
                                category="business" />}
                    />
                    <Route
                        path="/Health"
                        element={
                            <News key="health"
                                category="health" />}
                    />
                    <Route
                        path="/Science"
                        element={
                            <News key="science"
                                category="science" />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Application;
