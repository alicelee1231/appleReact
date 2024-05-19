// state 저장하는 곳
//redux 쓰는 이유 : 컴포넌트간의 state공유를 편하게 하기 위해
//일반적으로 store라고 명명함

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

// useState와 비슷
// let user = createSlice({
//   name: "user",
//   initialState: { name: "sam", age: 20 },

//   reducers: {
//     // 함수의 파라미터는 기존의 내용을 가리킴
//     changeName(state) {
//       state.name = "park";
//     },
//     increase(state, a) {
//       state.age += a.pay;
//     },
//   },
// });

//함수 빼내는 방법

let stock = createSlice({
  name: "doll",
  initialState: [10, 11, 12],
});

let mart = createSlice({
  name: "mart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    changeCount(state) {
      console.log(state + "state");
      return;
    },
  },
});

export let { changeCount } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    mart: mart.reducer,
  },
});
