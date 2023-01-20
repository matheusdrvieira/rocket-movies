import { Routes, Route } from "react-router-dom";

import { MyMovies } from "../pages/MyMovies";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<MyMovies />} />
            <Route path="/new" element={<New />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}