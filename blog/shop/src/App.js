/*eslint-diabled*/ 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar,Container,DropdownButton,Dropdown,ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';

function App() {

  let [shoes] = useState(data);


  return (
   <div>
      <Navbar bg='dark' variant="dark">
            <Container>
            <Navbar.Brand href='#nome'>쨈미의 위시리스트</Navbar.Brand>
            {['Primary', 'Secondary', 'Success'].map(
        (variant) => (
          <DropdownButton 
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
            size='sm'
            className='mt-2'
            data-bs-theme = 'dark'>
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ),
      )}
        
            </Container>
            <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>{' '}
     
      </Navbar>
      <div className='main-bg'> </div>

      <div > 
      <div className='row'>
            {/* <Product shoes={shoes[0]}></Product> */}

            {
              shoes.map((a,i) => {
                return  <Product className='Appa' key={shoes[i].id} shoes={shoes[i]} i ={i}></Product>       
                
              })
            }
      </div>
    </div>
  </div>
  );
}

function Product(props){
  return(
    <div  className='col-md-4'>
        <img alt='내꺼' src={'img/cap' + (props.i ) + '.jpg'}   width='50%'></img>
              <h5>{props.shoes.title}</h5>
              <p>{props.shoes.price}</p>
            </div>
  )
}

export default App;
