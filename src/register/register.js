import * as S from "../login/loginStyles";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Register(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const navigate = useNavigate();
    function sendObject(){
        if(email !== '' && password !== '' && name !== ''){
            let newUser = {
                email: email,
                name: name,
                password: password
            }
            let promisse = axios.post("http://localhost:5000/signup", newUser);
            promisse.then(() => navigate("/login"));
            promisse.catch((e) => {
                if(e.response.status === 422){
                    alert("preencha os campos corretamente")
                } else if(e.response.status === 409){
                    alert("email já cadastrado")
                } else {
                    alert("tente novamente mais tarde")
                }
            });
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
            <button onClick={sendObject}>Registre-se</button>
            <Link to="/login">Já tem uma conta? Entre aqui</Link>
        </S.content>
    )
}