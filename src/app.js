import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/login";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}