import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 10px;
    margin-top: 10px;
`

export const PostIt = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    width: 270px;
    height: 250px;

    background: linear-gradient(180deg, rgba(174,255,136,0.6643032212885154) 20%, rgba(174,255,136,1) 57%);
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