import * as S from '../login/loginStyles';
import { useNavigate } from 'react-router-dom';

export default function LandingPage(){
    const navigate = useNavigate();
    return (
        <S.content>
            <h1>WIMP</h1>
            <button className='register' onClick={() => {navigate("/register")}}>Registre-se</button>
            <button className='haveAccountButton' onClick={() => {navigate("/login")}}>Já tenho uma conta</button>
        </S.content>
    )
}