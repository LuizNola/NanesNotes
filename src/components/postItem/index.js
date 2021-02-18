import React, {useState} from 'react';

import immer from 'immer'

import { Container, Title, ButtonsImg, ButtonImg } from './styled'
import api from '../../api'

export default ({ data, actives, setActives, setMode, setActiveModal,setIdForModal, getNotes }) => {


    const [ active, setActive ] = useState(false)

    const handleClickTrash = async () => {
        await api.deleteNote(data.id)
        getNotes()
    }

    const handleClickContainer = () => {
        if (actives.map((i) => i.id).indexOf(data.id) == -1) {
            setActives([...actives, {
                id: data.id,
                title: data.title,
                body: data.body
            }]);
            setActive(!active)

        }else{
           
            for(let i=0; i<actives.length; i++){
                if(actives[i].id == data.id){
                    setActives(immer(actives, draft => {
                        draft.splice(i, 1)
                    }))
                }
            }
            setActive(!active)
        }
    }

    const handleEditClick = () => {
        setIdForModal(data.id)
        setMode(false)
        setActiveModal(true)
    }

    return (
        <>
            <Container active={active} >
                <Title onClick={handleClickContainer}>{data.title}</Title>

                <ButtonsImg>
                    <ButtonImg onClick={handleEditClick} src="/assets/EditNote.svg" />
                    <ButtonImg onClick={handleClickTrash} src="/assets/trash.svg" />
                </ButtonsImg>
            </Container>
        </>
    )
}