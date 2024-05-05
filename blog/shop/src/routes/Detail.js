import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
    </div>
  );
}

export default Detail;
