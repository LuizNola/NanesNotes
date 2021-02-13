import React, { useState }from 'react';

import {HTML5Backend} from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {Container} from './appStyled'

import Menu from './components/menu'
import PostIt from './components/post-it'



function App() {

  const [activesPosts, setActivePosts] = useState([])


  return (
    <DndProvider backend={HTML5Backend}>
    <Container>
      <Menu activesPosts={activesPosts} setActivePosts={setActivePosts}/>

    {activesPosts.map(
    (item,index) =>(<PostIt data={item} key={index}/>)
    )}
      
    </Container>
    </DndProvider>
  );
}

export default App;
