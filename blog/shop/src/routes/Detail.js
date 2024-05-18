/*eslint-disable-next-line*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import "../App.css";
// 같은 컴포넌트일 때 아래와 같이 props로 전달해도 가능, bg로 전달할 사항 넣어주기
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;
let Box = styled.div`
  background: grey;
  padding: 20px;
`;

// 이전의 css component가 마음에 들었으면 파라미터로 가져와서 복사해서 쓸 수 있음
let NewBtn = styled.button(YellowBtn);

// ---------------------------------------------------------------------

function Detail(props) {
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let want = props.shoes.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(true);
  let [tab, setTab] = useState(0);

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const onClick = () => {
    if (isNaN(num) == 1) {
      console.error("Only numbers are allowed");
    } else {
      console.log(num);
    }
  };

  useEffect(() => {
    // 변수를 선언하면 return으로 clean up할 수 있음
    // 재 랜더링 안해도됨
    let a = setTimeout(() => {
      setAlert(false);
      console.log(2);
    }, 2000);
    // return () => {
    // useEffect가 실행되기 전에 return이 먼저 실행됨
    // clearTimeout( a);
    // }
    return () => {
      console.log(1);
      clearTimeout(a);
    };
  }, []);

  // useEffect(() => {}) 1. 재랜더링마다 코드 실행
  // useEffect(() => {}, []) 2. mount시 1회 코드 실행
  // useEffect(() => {
  //   return() =>{    3. unmount시 1회 코드 실행

  //   }  4. useEffect실행 전, 뭔가 실행하려면 언제나 return()=>{}에서 실행
  // })

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning"> 2초 이내 구매시 할인</div>
      ) : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
        button
      </button>

      <input onChange={onChange}></input>
      <button onClick={onClick}>버튼이다</button>
      {!num >= 48 && !num <= 57(<div>try again</div>)}

      <Box>
        <YellowBtn bg="yellow">Button</YellowBtn>
        <YellowBtn bg="blue">Button1</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5"></h4>
          <p>{want.title}</p>
          <p>{want.price}원</p>
          <p>{want.content}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link0">
            버튼 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link1">
            버튼 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link2">
            버튼 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab1 tab={tab}></Tab1>
    </div>
  );
}

// component는 Return이 꼭 있어야함
function Tab1({ tab }) {
  let [fade, setFade] = useState();

  // state변경 기능이 가까이 있으면 한번만 state변경을 함
  // 즉 마지막에만 재랜더링해줌
  // automatic batching기능이라고함
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);
  // if (props.tab == 0) {
  //   return <div>내용0</div>;
  // } else if (props.tab == 1) {
  //   return <div>내용1</div>;
  // } else {
  //   return <div>내용2</div>;
  // }
  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
  // array니까 tab에 들어가는 숫자와 동일한 자리에 있는 내용을 가지고 옴. array의 0번째를 꺼내주세요~
}

// props등록이 귀찮으면 {}이렇게 가져와도 됨
// 예로  function Tab({tab}) {}

export default Detail;
