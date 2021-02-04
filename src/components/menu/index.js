import React from 'react';

import {Container, Logo, PostList, PostButtons, PostButtonImg} from './styled'

export default () =>{
    return (
        <>
            <Container> 
                <Logo src="/assets/logo.svg"/>

                <PostList>

                    <PostButtons>
                        <PostButtonImg src="/assets/addNote.svg"/>
                        <PostButtonImg src="/assets/searchNote.svg"/>
                    </PostButtons>

                    <PostItem/>
                </PostList>
            </Container> 
        </>
    )
}