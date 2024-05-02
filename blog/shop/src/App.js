/*eslint-diabled*/ 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar,Container,DropdownButton,Dropdown,ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import {data, products} from './data';
import {Route, Routes, Link} from 'react-router-dom';

function App() {

  let [shoes] = useState(data);
  let [realProducts] = useState(products);

  return (
   <div>
    <Routes>
      <Route path='/about' element={<div>about page</div>}/>
    </Routes>
  
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
              <Dropdown.Item eventKey="1" to='/detail'>Action</Dropdown.Item>
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
      <div style={{marginTop:"10px"}}>
      <Link to="/"  style={{marginRight:"30px"}}>홈</Link>
      <Link to="/detail">상세페이지</Link>
      </div>
      <Routes>
        <Route path='/'element={<div className='row'>
              {shoes.map((a,i) => {
                  return  <Product className='Appa' key={shoes[i].id} shoes={shoes[i]} i ={i}></Product>       
                })
              }
        </div>}>
        </Route>
    </Routes>
    
    <Routes>
      <Route path='/detail' element={<Detail key={realProducts.id} realProducts={realProducts}></Detail>}/>
          
    </Routes>
      <div > 
      
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

function Detail(props){
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5"></h4>
      <p>{props.realProducts[0].name}</p>
      <p>{props.realProducts[0].price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div>
  )
}

export default App;
