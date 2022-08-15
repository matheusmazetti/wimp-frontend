import * as S from "../login/loginStyles";
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Register(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    function sendObject(){
        if(email !== '' && password !== '' && name !== ''){
            let newUser = {
                email: email,
                name: name,
                password: password
            }
            let promisse = axios.post("http://localhost:5000/signup", newUser);
            promisse.then(() => alert("deu bom"));
            promisse.then((e) => alert("deu ruim"));
        } else {
            alert("preencha todos os campos");
        }
    }
    return(
        <S.content>
            <h1>LOGO AQUI</h1>
            <input placeholder="email" type='text' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
            <input placeholder="nome" type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <input placeholder="senha" type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <button onClick={sendObject}>Entre</button>
            <Link to="/register">Não tem cadastro? Registre-se aqui</Link>
        </S.content>
    )
}