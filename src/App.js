import React, { useState }from 'react';

import {HTML5Backend} from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {Container} from './appStyled'

import Menu from './components/menu'
import PostArea from './components/postArea'



function App() {

  const [activesPosts, setActivePosts] = useState([])
  const [activesDonePosts, setActiveDonePosts] = useState([])


  return (
    <DndProvider backend={HTML5Backend}>
    <Container>
      <Menu activesPosts={activesPosts} setActivePosts={setActivePosts}/>
      

      <PostArea activesPosts={activesPosts} 
       activesDonePosts={activesDonePosts}
       setActiveDonePosts={setActiveDonePosts}/>
    

    </Container>
    </DndProvider>
  );
}

export default App;
