import styled from 'styled-components';



export const Container = styled.div`
    flex: 1;
    display:flex;
   
`

export const ContainerNoComplete = styled.div`
    flex: 1;
    display:flex;
    flex-wrap:wrap;

    justify-content: center;

    border-right: 1px solid #000;

    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
            width: 0px;
    }

    h1{
        width: 100%;
        text-align: center;
    }
`

export const ContainerComplete = styled.div`
    flex: 1;
    display:flex;
    flex-wrap:wrap;

    justify-content: center;

    border-right: 1px solid #000;

    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
            width: 0px;
    }

    h1{
        width: 100%;
        text-align: center;
    }
`
