import React, {useState} from 'react';

import { Container, Title, ButtonsImg, ButtonImg } from './styled'
import api from '../../api'

export default ({ data, actives, setActives }) => {


    const [ active, setActive ] = useState(false)

    const handleClickTrash = () => {
        api.deleteNote(data.id)
    }

    const handleClickContainer = () => {
        if (actives.map((i) => i.id).indexOf(data.id) == -1) {
            setActives([...actives, {
                id: data.id,
                title: data.title,
                body: data.body
            }]);
        }else{
            console.log(actives)
            let newActives = actives
            newActives.splice(newActives.indexOf(data.id), 1)
            setActives([])
            setActives(newActives)
            console.log(actives)
        }
    }

    const handleActiveClick = () => {
        setActive(!active)
    }

    return (
        <>
            <Container active={active} onClick={handleActiveClick}>
                <Title onClick={handleClickContainer}>{data.title}</Title>

                <ButtonsImg>
                    <ButtonImg src="/assets/EditNote.svg" />
                    <ButtonImg onClick={handleClickTrash} src="/assets/trash.svg" />
                </ButtonsImg>
            </Container>
        </>
    )
}