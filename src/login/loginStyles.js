import styled from 'styled-components';

export const content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    input{
        width: 60%;
        height: 40px;
        background-color: #1c1c23;
        border-radius: 10px;
        border: 2px solid #353542;
        margin-top: 20px;
    }
    button{
        width: 60.5%;
        height: 40px;
        border-radius: 10px;
        border: 0px;
        background: radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0) 43.25%, rgba(255, 127, 55, 0.5) 100%), #FF7966;
        box-shadow: 0px 8px 25px rgba(255, 121, 102, 0.5);
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        margin-top: 20px;
    }
    .haveAccountButton{
        background: rgba(255, 255, 255, 0.1);
        width: 60.5%;
        height: 40px;
        border-radius: 10px;
        border: 0px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        margin-top: 20px;
        box-shadow: none;
    }
    .register{
        margin-top: 50vh;
    }
    a{
        text-decoration: none;
        width: 60%;
        margin-top: 15px;
        text-align: center;
    }
`