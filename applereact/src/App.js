import './App.css';
import {useState} from 'react';

function App() {
  let post = 'ff'; 

  // a는 값 저장, b는 state 변경을 도와주는 함수
  let [logo, setLogo] = useState(['ReactBlog','second','third']);

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
        <h4> {logo[0]}</h4>
        <p>4월 22일 발행</p>
      </div>
      <div className = "list"> 
        <h4> {logo[1]}</h4>
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
