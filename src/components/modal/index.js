import React from 'react';
import {Container, Modal, TitleArea, BodyArea, PostButton} from './styled'

export default () => {
    return (
        <Container>

            <Modal>
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