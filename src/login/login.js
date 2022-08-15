import * as S from './loginStyles';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context';

export default function Login(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setToken } = React.useContext(UserContext);
    const navigate = useNavigate();
    
    function sendObject(){
        if(email !== '' && password !== ''){
            let obj = {
                email: email,
                password: password
            }
            let promisse = axios.post("http://localhost:5000/login", obj);
            promisse.then((response) => {
                setToken(response.data);
                navigate("/recipes")
            })
            promisse.catch(e => {
                if(e.response.status === 422){
                    alert("preencha os dados corretamente");
                } else {
                    alert("usuário ou senha errados");
                }
            });
        } else {
            alert("preencha todos os campos")
        }
    }

    return(
        <S.content>
            <h1>LOGO AQUI</h1>
            <input placeholder="email" type='text' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
            <input placeholder="senha" type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <button onClick={sendObject}>Entre</button>
            <Link to="/register">Não tem cadastro? Registre-se aqui</Link>
        </S.content>
    )
}