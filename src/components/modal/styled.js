import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    background-color: rgba(0, 0, 0, .7);

    width: 100%;
    height: 100%;
`

export const Modal = styled.div`
    padding: 10px;
    background-color: #007C75;

    width: 630px;
    height: 550px;
`

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 30px;
        font-weight: 300;
    }

    input{
        width: 535px; 
        height: 51px;
        
        font-size: 34px;
    }
`

export const BodyArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 30px;
        font-weight: 300;
    }

    textarea{
        width: 535px; 
        height: 244px;
        
        font-size: 20px;

        resize: none;
    }
`
export const PostButton = styled.button`
    width: 84px;
    height: 50px;

    border-radius: 10px;
    border: 1px solid #000;

    background-color: #fff;

    font-size: 20px;

    margin-top: 10px;
    margin-left: 80%;

    cursor: pointer;

`