/*eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {
  let post = 'ff';

  let [logo, setLogo] = useState(['ReactBlog', 'third', 'second']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(0);
  let [titlec, setTitleC] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: '100px' }} >{post}</h4>
      </div>

    
      <h4>{post}</h4>
      <div className="list">
        <h4> {logo[0]} <span onClick={() => { setLike(like + 1) }}>👍</span> {like} </h4>
        <p>4월 22일 발행</p>
      </div>

      <button onClick={() => {
        let copy1 = [...logo];
        copy1.sort();
        setLogo(copy1);
      }}>가나다라</button>

      <div className="list">
        <h4> {logo[1]} <button onClick={() => {
          let copy = [...logo];
          copy[0] = 'java';
          setLogo(copy);
        }}>글 수정 </button> </h4>
        <p>4월 23일 발행</p>
      </div>
      <div className="list">
        <h4> {logo[2]}</h4>
        <p>4월 24일 발행</p>
      </div>

      <div className="list">
        <h4> <button onClick={() => { setModal(1) }}>여기</button></h4>
      </div>
      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>title</h4>
      <p>date</p>
      <p>content</p>
    </div>
  );
}




export default App;
