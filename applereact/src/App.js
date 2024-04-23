/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {
  let post = 'ff'; 

  // a는 값 저장, b는 state 변경을 도와주는 함수
  let [logo, setLogo] = useState(['ReactBlog', 'third', 'second']);
  let [ like, setLike] = useState(0);
  let [change, setChange] = useState('gender');


  // function cun(){
  //   if(like === 'hello'){
  //     setLike('nice to meet u');
  //   }else {
  //     setLike('hello');
  //   }
  // }


  
  return (
    <div className="App">
      {/* className으로 css file 가져오기 */}
      <div className="black-nav">
        {/* style은 object형식으로 가져오기 */}
        <h4 style = {{color: "red", fontSize : '100px'} }>{post}</h4>
      </div>
    {/* 변수는 {} */}
      <h4>{post}</h4>
      <div className = "list"> 
        <h4> {logo[0]} <span onClick={() => {setLike(like + 1)}}>👍</span> {like} </h4>
        <p>4월 22일 발행</p>
      </div>

    <button onClick={() => {
      let copy1 = [...logo];
      copy1.sort();
      setLogo(copy1);
    }}>가나다라</button>

    {/* state는 기존의 값과 변경할 값을 먼저 비교해서 바꿈, 예로 밑에 setLogo(copy)를 기존의 내용과 비교해서 변경*/}
    {/* array, object는 deep copy, shallo copy로 하기 */}
      <div className = "list"> 
        <h4> {logo[1]} <button onClick = {() => {
          let copy = [...logo];
          copy[0] = 'java';
          setLogo(copy);
        }}>글 수정 </button> </h4>
        <p>4월 23일 발행</p>
      </div>


      <div className = "list"> 
        <h4> {logo[2]}</h4>
        <p>4월 24일 발행</p>
      </div>
    </div>
  );
}

export default App;
