import React from 'react';
import { Container, ContainerNoComplete, ContainerComplete} from './styled'

import PostIt from '../post-it'

import {useDrop} from 'react-dnd'



export default ({activesPosts, activesDonePosts, setActiveDonePosts }) =>{

   

    const [, dropRef] = useDrop({
        accept: 'POST_IT',
        drop(item, monitor) {

            let index = item.index
            let Post = activesPosts[index]
            activesPosts.splice(index, 1)

            console.log(Post)

            if(Post !== undefined){
            setActiveDonePosts([...activesDonePosts, Post])
            }     
     
        }
    })

    return (
        <>
        <Container>
            <ContainerNoComplete> 
            {activesPosts.map(
                (item,index) =>(<PostIt data={item} key={index} index={index} />)
                )}
            </ContainerNoComplete>
            <ContainerComplete ref={dropRef}>
            {activesDonePosts.map(
                (item,index) =>(<PostIt data={item} key={index} index={index} />)
                )}
            </ContainerComplete>

        </Container>
        </>
    )
}