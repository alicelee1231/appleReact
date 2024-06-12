/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";
import { memo, useState } from "react";

// 재 렌더링 없애는 법 / memo 꼭 필요할 때만 재렌더링하는것
let Child = memo(function () {
  console.log("재렌더링");
  return <div>child</div>;
});

function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let [count, setCount] = useState(0);

  console.log(state.mart);
  //   dispathc는 store에 요청을 보내는 함수
  let dispatch = useDispatch();

  return (
    <div>
      <Child></Child>
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        +
      </button>
      {state.user}의 장바구니
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">상품명</th>
            <th scope="col">수량</th>
            <th scope="col">변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.mart.map((item, i) => (
            <tr key={item.id}>
              <th scope="row">{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
              <td>
                {/* <button
                  onClick={() => {
                    dispatch(changeCount());
                  }}
                >
                  + */}
                {/* </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
