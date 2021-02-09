import React, { useState } from 'react';
import { Container, Modal, TitleArea, BodyArea, PostButton } from './styled'

import api from '../../api'

export default ({active, setActiveModal}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleModalClick = ( e ) =>{
    
        if(e.target.classList.contains('modalBG'))
        {
            setActiveModal(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let json = await api.addNote( title, body );
        if(json.error == ""){
            setActiveModal(false)
        }
    }

    return (
        <Container active={active} onClick={handleModalClick} className='modalBG'>

            <Modal >
                <form onSubmit={handleSubmit}>
                <TitleArea>
                    <h1>Titulo</h1>
                    <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>    
                </TitleArea>

                <BodyArea>
                    <h1>Descrição</h1>
                    <textarea value={body} onChange={e=>setBody(e.target.value)}/>
                </BodyArea>

                <PostButton type="submit" value="Anotar!"/>
                </form>
            </Modal>

        </Container>
    )
}