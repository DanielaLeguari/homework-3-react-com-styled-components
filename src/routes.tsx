import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/Login/Login';
import Perfil from './pages/Perfil/Perfil';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<Perfil />} path="/perfil" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;