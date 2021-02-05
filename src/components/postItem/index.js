import React from 'react';

import {Container, Title, ButtonsImg, ButtonImg} from './styled'

export default () => {
    return (
        <>
            <Container>
                <Title>Titulo de teste</Title>

                <ButtonsImg>
                    <ButtonImg src="/assets/EditNote.svg" />
                    <ButtonImg src="/assets/trash.svg" />
                </ButtonsImg>
            </Container>
        </>
    )
}