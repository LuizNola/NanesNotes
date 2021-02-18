import React, { useState } from 'react';
import { Container, Modal, TitleArea, BodyArea, PostButton } from './styled'

import api from '../../api'

export default ({ active, setActiveModal, mode, id }) => {

    const [error, setError] = useState('')

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleModalClick = (e) => {

        if (e.target.classList.contains('modalBG')) {
            setActiveModal(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (mode) {
            let json = await api.addNote(title, body);
            if(json == undefined) {
                setActiveModal(false)
            }else{
                setError(json)
            }
        }else{
            let json = await api.editNote(id, title, body);
            if(json == undefined) {
                setActiveModal(false)
            }else{
                setError(json)
            }
        }

    }

    return (
        <Container active={active} onClick={handleModalClick} className='modalBG'>

            <Modal >

                <form onSubmit={handleSubmit}>
                    <TitleArea>
                        <h1>Titulo</h1>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </TitleArea>

                    <BodyArea>
                        <h1>Descrição</h1>
                        <textarea value={body} onChange={e => setBody(e.target.value)} />
                    </BodyArea>
                    {mode &&
                        <PostButton type="submit" value="Anotar!" />
                    }
                    {!mode &&
                        <PostButton type="submit" value="Editar!" />
                    }
                </form>
            </Modal>

        </Container>
    )
}