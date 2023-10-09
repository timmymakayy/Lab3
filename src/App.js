
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
{/*import different componemts to display*/}
// visual code
function App() {
  return (
      //display current time 
    <BrowserRouter>

    <div className="App">

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/*Add navbar*/}
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<Routes>
  {/*create links to each navigation that links to components*/}
  <Route path='/' element={<Content></Content>}></Route>
  <Route path='/create' element={<Create></Create>}></Route>
  <Route path='/read' element={<Read></Read>}></Route>
</Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
