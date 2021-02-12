import React from 'react';
import { Container, PostIt, Title, Body } from './styled'


export default ({data}) =>{
    console.log(data)
    return (
        <>
            <Container>
                <PostIt>
                    <Title>         
                        {data.title}
                    </Title>
                    <Body>
                        {data.body}
                        a
                    </Body>
                </PostIt>
            </Container>
        </>
    )
}