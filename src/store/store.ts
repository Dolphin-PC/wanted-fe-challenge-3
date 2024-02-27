import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const rootReducer = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default rootReducer;

export type TypeStore = ReturnType<typeof rootReducer.getState>;
