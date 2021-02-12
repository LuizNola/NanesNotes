import React, { useState }from 'react';

import {Container} from './appStyled'

import Menu from './components/menu'
import PostIt from './components/post-it'



function App() {

  const [activesPosts, setActivePosts] = useState([])


  return (
    <>
    <Container>
      <Menu activesPosts={activesPosts} setActivePosts={setActivePosts}/>


      <PostIt/>
    </Container>
    </>
  );
}

export default App;
