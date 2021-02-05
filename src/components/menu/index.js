import React, { useState, useEffect }from 'react';

import {Container, Logo, PostList, PostButtons, PostButtonImg, ItemList} from './styled'
import api from '../../api'

import PostItem from '../postItem'

export default () =>{

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        const notesList = await api.getNotes();
        setNotes(notesList);
        console.log(notesList);
    }

    useEffect(() =>{
        getNotes();
    },[])
   
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
                {notes.map((item, index)=>(
                        <PostItem key={index} data={item}/>
                    ))}
                    
                </ItemList>
                </PostList>
            </Container> 
        </>
    )
}