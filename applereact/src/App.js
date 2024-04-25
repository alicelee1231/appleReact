/*eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {
  let [post,setPost] = useState(['ff']);

  let [logo, setLogo] = useState(['ReactBlog', 'third', 'second']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(0);
  let [cnt, setCnt] = useState(1);
  let [input, setInput] = useState('');

  const addd = () => {
    setPost(() => [input]);
  }

  return (
    <>
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: '100px' }} >{post}</h4>
      </div>


    
{/* target은 해당 tag를 가리킴 */}
{/* e.stopPropagation()은 이벤트 버블링을 막아주는것 */}
    <div>
    <input onChange={(e) => {setInput(e.target.value); console.log(e.target.value)}}></input>

    {/* 타이틀 바꾸는 기능 */}
    <button onClick={addd}>here</button>

    {/* 글제목 바꾸는 기능 */}
    <button onClick={() => {
      let copy = [...logo];
      try {
      copy.unshift(input);
      } catch (err){
        alert(err.name); 
      }
      setLogo(copy)}}
      >here 2</button>
    
    </div>
{/*     
      <h4>{post}</h4>
      <div className="list">
        <h4> {logo[0]} <span onClick={() => { setLike(like + 1) }}>👍</span> {like} </h4>
        <p>4월 22일 발행</p>
      </div>

      <button onClick={() => {
        let copy1 = [...logo];
        copy1.sort();
        setLogo(copy1);
      }}>가나다라</button> */}

        {
          // function 파라미터 부분은 map이 돌아가면서 array의 요소들을 하나씩 꺼내오는 것
          // fuction 부분에는 두개의 파라미터가 들어감. 앞의 파라미터는 array의 순서대로 가져오는 거고
          // 뒤의 파라미터는 1씩 더해지는 정수임 그래서 h4부분에 a를 logo[i]로해도 i부분이 1씩 더해지기 때문에 array부분이 하나씩 나옴
          //map앞의 array 개수만큼 map이 돌아감 -> return 문 안에 있는 내용을 array에 담아줌 ex) [<div>hey</div>] -> 이런 형식을 react가 알아서 배열 벗겨서 실행하는거
          
          logo.map(function(a,i){
            return (<div className="list">
            <h4 > {a} <button onClick={() => {
              let copy = [...logo];
              copy[0] = 'java';
              setLogo(copy);
            }}>글 수정 </button> </h4>
            <h4> <button onClick={() => {setModal(1); setCnt(i)}}>여기</button></h4>

              {/* 삭제버튼 */}
            <h4> <button onClick={() => {
              let copy = [...logo];
              copy.splice(i,1)
              setLogo(copy);
              }}>delete</button> </h4>

            <h4> <span onClick={() => { 
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
            }}>👍</span> {like[i]} </h4>
            <p>4월 23일 발행</p>
          </div>)
         
          })
        }

        {/* <button onClick={() => {setCnt(0)}}>글제목0</button>
        <button onClick={() => {setCnt(1)}}>글제목1</button>
        <button onClick={() => {setCnt(2)}}>글제목2</button> */}


      <div className="list">
        <h4> <button onClick={() => { setModal(1) }}>여기</button></h4>
      </div>
      {/* props의 이름은 가져오는  요소와 이름을 동일하게함. 왜? 작명하기 귀찮아서 */}
      {
        modal == true ? <Modal color={'skyblue'} logo={logo} cnt={cnt}/> : null
      }
    </div>
    </>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.logo[props.cnt]}</h4>
      <p>date</p>
      <p>content</p>
      <button>push</button>
    </div>
  );
}




export default App;
