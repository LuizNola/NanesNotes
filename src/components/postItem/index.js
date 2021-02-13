import React from 'react';

import {Container, Title, ButtonsImg, ButtonImg} from './styled'
import api from '../../api'

export default ({data, actives, setActives }) => {

    const handleClickTrash = () => {
        api.deleteNote(data.id)
    }

    const handleClickContainer = () => {
        if(actives.map((i)=>i.id).indexOf(data.id) == -1){
            setActives([...actives, {
                id: data.id,
                title: data.title,
                body: data.body
        }]);
    }
    
}
    return (
        <>
            <Container>
                <Title onClick={handleClickContainer}>{data.title}</Title>

                <ButtonsImg>
                    <ButtonImg src="/assets/EditNote.svg" />
                    <ButtonImg onClick={handleClickTrash}  src="/assets/trash.svg" />
                </ButtonsImg>
            </Container>
        </>
    )
}