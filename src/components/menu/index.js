import React, { useState, useEffect }from 'react';

import {Container, Logo, PostList, PostButtons, PostButtonImg, ItemList} from './styled'
import api from '../../api'

import PostItem from '../postItem'
import Modal from '../modal'


export default ({ activesPosts, setActivePosts}) =>{

    const [notes, setNotes] = useState([]);
    
    const [activeModal, setActiveModal] = useState(false)
    const [mode, setMode] = useState(false)
    const [idForModal, setIdForModal] = useState(0)

    const getNotes = async () => {
        const notesList = await api.getNotes();
        setNotes(notesList);
    }


    const HandleClickNewNote = (e) => {
        setMode(true)
        setActiveModal(true);
    }

    useEffect(() =>{
        getNotes();
    },[])
   
    return (

        <>
            <Container> 
            <Modal 
            active={activeModal} 
            setActiveModal={setActiveModal} 
            mode={mode}
            id={idForModal}
            />
                <Logo src="/assets/logo.svg"/>

                <PostList>

                    <PostButtons>
                        <PostButtonImg onClick = {HandleClickNewNote} src="/assets/addNote.svg"/>
                    </PostButtons>

                <ItemList>
                {notes.map((item, index)=>(
                        <PostItem 
                        setIdForModal={setIdForModal}
                        setMode={setMode} 
                        setActiveModal={setActiveModal} 
                        key={index} 
                        data={item} 
                        actives={activesPosts} 
                        setActives={setActivePosts}/>
                    ))}
                    
                </ItemList>
                </PostList>
            </Container> 
        </>
    )
}