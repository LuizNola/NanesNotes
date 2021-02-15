import React from 'react';
import { Container, ContainerNoComplete, ContainerComplete } from './styled'

import PostIt from '../post-it'

import { useDrop } from 'react-dnd'
import api from '../../api'



export default ({ activesPosts, activesDonePosts, setActiveDonePosts }) => {



    const [, dropRef] = useDrop({
        accept: 'POST_IT',
        drop(item, monitor) {

                if (activesDonePosts.map((i) => i.id).indexOf(item.data.id) == -1) {
                    let index = item.index
                    let Post = activesPosts[index]
                    activesPosts.splice(index, 1)


                    if (Post !== undefined) {
                        setActiveDonePosts([...activesDonePosts, Post])
                        api.deleteNote(item.data.id)
                    }
                }
            }


    })

    return (
        <>
            <Container>

                <ContainerNoComplete ref={dropRef}>
                    <h1>Em andamento</h1>
                    {activesPosts.map(
                        (item, index) => (<PostIt data={item} key={index} index={index}/>)
                    )}
                </ContainerNoComplete>

                <ContainerComplete ref={dropRef}>
                < h1>concluido</h1>
                    {activesDonePosts.map(
                        (item, index) => (<PostIt data={item} key={index} index={index} />)
                    )}
                </ContainerComplete>

            </Container>
        </>
    )
}