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
        border-radius: 10px;
        border: 1px solid blue;
        margin-top: 10px;
    }
    button{
        width: 60%;
        height: 40px;
        border-radius: 10px;
        border: 0px;
        background-color: blue;
        color: white;
        margin-top: 10px;
    }
    a{
        text-decoration: none;
        width: 60%;
        margin-top: 15px;
        text-align: center;
    }
`