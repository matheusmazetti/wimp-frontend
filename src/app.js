import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/login";
import { Register } from './register/register';
import { useState } from 'react';
import UserContext from './context';

export default function App(){
    const [token, setToken] = useState('');
    return(
        <BrowserRouter>
            <UserContext.Provider value={{token, setToken}}>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/recipes" />
                </Routes>
                </UserContext.Provider>
        </BrowserRouter>
    )
}