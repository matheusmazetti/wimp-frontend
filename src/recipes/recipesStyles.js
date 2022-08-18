import styled from 'styled-components';

export const content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const recipe = styled.div`
    width: 80%;
    height: 70px;
    border: 1px solid #353542;
    border-radius: 16px;
    margin-top: 10px;
    h1{
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        color: #ffffff;
    }
    .recipe{
        padding: 0 15px 0 15px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`