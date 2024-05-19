import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "sam", age: 20 },

  reducers: {
    // 함수의 파라미터는 기존의 내용을 가리킴
    changeName(state) {
      state.name = "park";
    },
    increase(state, a) {
      state.age += a.payload;
    },
  },
});
export let { changeName, increase } = user.actions;

export default user;
