import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export type TypeTodo = {
  key: string;
  value: string;
};
const initialState: TypeTodo[] = [
  { key: uuid(), value: "list1" },
  { key: uuid(), value: "list2" },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add_todo: (state, action: { type: string; payload: string }) => {
      state.push({
        key: uuid(),
        value: action.payload,
      });
    },

    delete_todo: (state, action: { type: string; payload: TypeTodo }) => {
      return state.filter((s) => s.key !== action.payload.key);
    },
  },
});

export const { add_todo, delete_todo } = todoSlice.actions;

export default todoSlice.reducer;
