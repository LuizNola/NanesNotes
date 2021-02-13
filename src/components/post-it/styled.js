import styled, { css } from 'styled-components';

export const Container = styled.div`
    margin-left: 10px;
    margin-top: 10px;
`

export const PostIt = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    width: 250px;
    height: 230px;

    background: linear-gradient(180deg, rgba(174,255,136,0.6) 20%, rgba(174,255,136,1) 57%);
    
    cursor: grab;

    ${props=>props.isDragging && `
        border: 2px dashed black;
        background: linear-gradient(180deg, rgba(174,255,136,0.1) 20%, rgba(174,255,136,0.3) 57%)    
        box-shadow: none;
    `}
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

export const Body = styled.p`
    max-width: 80%;
    overflow:scroll;

    ::-webkit-scrollbar {
            width: 0px;
    }
`