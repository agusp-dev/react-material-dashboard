import { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Container, Box } from '@material-ui/core'

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Container maxWidth='xl'>
        <Box pt={ 16 }>
          <Header title='Dashboard'/>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
