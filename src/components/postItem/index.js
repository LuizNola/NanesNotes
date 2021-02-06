import React from 'react';

import {Container, Title, ButtonsImg, ButtonImg} from './styled'
import api from '../../api'

export default ({data}) => {

    const handleClickTrash = () => {
        api.deleteNote(data.id)
    }
    return (
        <>
            <Container>
                <Title>{data.title}</Title>

                <ButtonsImg>
                    <ButtonImg src="/assets/EditNote.svg" />
                    <ButtonImg onClick={handleClickTrash} src="/assets/trash.svg" />
                </ButtonsImg>
            </Container>
        </>
    )
}