import { Routes, Route } from "react-router-dom";

import { MyMovies } from "../pages/MyMovies";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/MyMovies" element={<MyMovies />} />
            <Route path="/New" element={<New />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Details/:id" element={<Details />} />
        </Routes>
    )
}