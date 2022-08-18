import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/login";
import { Register } from './register/register';
import { useState } from 'react';
import UserContext from './context';
import LandingPage from './landingPage/landing';
import AllRecipes from './recipes/recipes';

export default function App(){
    const [token, setToken] = useState('');
    return(
        <BrowserRouter>
            <UserContext.Provider value={{token, setToken}}>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/recipes" element={<AllRecipes />}/>
                </Routes>
                </UserContext.Provider>
        </BrowserRouter>
    )
}