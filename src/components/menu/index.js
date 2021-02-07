import React, { useState, useEffect }from 'react';

import {Container, Logo, PostList, PostButtons, PostButtonImg, ItemList} from './styled'
import api from '../../api'

import PostItem from '../postItem'
import Modal from '../modal'


export default () =>{

    const [notes, setNotes] = useState([]);
    const [activeModal, setActiveModal] = useState(false)

    const getNotes = async () => {
        const notesList = await api.getNotes();
        setNotes(notesList);
    }

    const HandleClickNewNote = (e) => {
        setActiveModal(true);
    }

    useEffect(() =>{
        getNotes();
    },[notes])
   
    return (

        <>
            <Container> 
            <Modal active={activeModal} setActiveModal={setActiveModal}/>
                <Logo src="/assets/logo.svg"/>

                <PostList>

                    <PostButtons>
                        <PostButtonImg onClick = {HandleClickNewNote} src="/assets/addNote.svg"/>
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