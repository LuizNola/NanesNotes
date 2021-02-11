import {Container} from './appStyled'

import Menu from './components/menu'
import PostIt from './components/post-it'

function App() {
  return (
    <>
    <Container>
      <Menu/>

      <PostIt/>
    </Container>
    </>
  );
}

export default App;
