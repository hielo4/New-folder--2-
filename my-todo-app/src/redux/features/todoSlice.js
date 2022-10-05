import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push(action.payload);
    },
    done: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[0].isdone = action.payload.isdone;
    },
  },
});

export const { addtodo, done } = todoSlice.actions;
export default todoSlice.reducer;
