import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // theme: themeReducer,
  },
});

export default store;
