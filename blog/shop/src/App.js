/*eslint-diabled*/ 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar,Container,Nav,Row,Col,Image } from 'react-bootstrap';
import imgLogo from './imgTest.png';

function App() {
  return (
   <div>
      <Navbar bg='dark' variant="dark">
            <Container>
            <Navbar.Brand href='#nome'>Navbar</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#features'>Freatures</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
      <Row>
        <Col xs={6} md={4}>
            <img className='background' src={imgLogo} alt='옷'></img>
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
   </div>
  );
}

export default App;
