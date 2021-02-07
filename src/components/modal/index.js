import React from 'react';
import {Container, Modal, TitleArea, BodyArea, PostButton} from './styled'

export default ({active, setActiveModal}) => {

    const handleModalClick = ( e ) =>{
        if(e.target.classList.contains('modalBG'))
        {
            setActiveModal(false)
        }
    }

    return (
        <Container active={active} onClick={handleModalClick} className='modalBG'>

            <Modal >
                <TitleArea>
                    <h1>Titulo</h1>
                    <input type="text"/>    
                </TitleArea>

                <BodyArea>
                    <h1>Descrição</h1>
                    <textarea/>
                </BodyArea>

                <PostButton>Anotar!</PostButton>
            </Modal>

        </Container>
    )
}