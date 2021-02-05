import React from 'react';

import {Container, Logo, PostList, PostButtons, PostButtonImg, ItemList} from './styled'

import PostItem from '../postItem'

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

                <ItemList>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                </ItemList>
                </PostList>
            </Container> 
        </>
    )
}