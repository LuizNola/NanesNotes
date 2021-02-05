import React from 'react';

import {Container, Title, ButtonsImg, ButtonImg} from './styled'

export default ({data}) => {
    return (
        <>
            <Container>
                <Title>{data.title}</Title>

                <ButtonsImg>
                    <ButtonImg src="/assets/EditNote.svg" />
                    <ButtonImg src="/assets/trash.svg" />
                </ButtonsImg>
            </Container>
        </>
    )
}