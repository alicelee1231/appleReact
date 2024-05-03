/*eslint-diabled*/ 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar,Container,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';
import { useState } from 'react';
import {data, products} from './data';
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  let [shoes] = useState(data);
  let [realProducts] = useState(products);

  //use라고 되어있는건 hook임 -> 훅이란 유용한 것이 들어있는거
  let navigate = useNavigate(); //페이지 이동을 도와줌

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

        {/* navigate에 숫자가 이동하면 그 숫자만큼 앞으로 이동 요청, -1는 뒤로 한페이지 */}
          <Nav.Link onClick={() => {navigate(-1)}}>home</Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>

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
          <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>}/>
          

      {/* 404페이지 만드는 거, 만약 페이지 주소를 잘 못 쳤을 때 404로 연결하는 거 */}
            <Route path='/about' element={<About/>}>
            <Route path='*' element={<div>없는페이지임 바부야</div>}></Route>
          </Route>

          <Route path='/about' element={<About/>}>
            <Route path="member" element={<div>멤버임</div>}></Route>
            <Route path="location" element={<div>위치정보임</div>}></Route>
          {/* 이 방식은  <Route path='/about' element={<About/>}>,  <Route path='/about/member' element={<About/>}> 랑 똑같은 방식임
          => nested route 그 대신 어디에 보여줄 지 작성해야함 */}
          </Route>

          <Route path='/event' element={<Event/>}>
            <Route path="one" element ={<h2>첫 주문시 양배추즙 서비스</h2>}></Route>
            <Route path = "two" element={<h4>생일기념 쿠폰 받기</h4>}></Route>
          </Route>
        </Routes>
        <div >  
      </div>
   </div>
  );
}

function Event() {
  return(
    <div>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사 정보</h4>
      {/* nested route안에 있는 라우트들을 어디에 보여줄 건지 정하는게 outlet */}
      <Outlet></Outlet>
    </div>
  )
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
