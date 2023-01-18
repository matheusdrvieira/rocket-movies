import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MyNotes } from "../pages/MyNotes";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyNotes" element={<MyNotes />} />
            <Route path="/New" element={<New />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Details/:id" element={<Details />} />
        </Routes>
    )
}