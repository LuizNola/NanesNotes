import React from 'react';
import { Container, PostIt, Title, Body } from './styled'

import { useDrag } from 'react-dnd'


export default ({data}) =>{

    const [{isDragging}, dragRef] = useDrag({
        item: {type: 'POST_IT' },
        collect: monitor => ({
            isDragging: monitor.isDragging(),

        })
    })
    return (
        <>
            <Container ref={dragRef} >
                <PostIt isDragging={isDragging}>
                    <Title>         
                        {data.title}
                    </Title>
                    <Body>
                        {data.body}
                    </Body>
                </PostIt>
            </Container>
        </>
    )
}