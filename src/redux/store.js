import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // 미들웨어 제거
  devTools: process.env.NODE_ENV !== "production" // 개발 도구 설정 제거
});

export default store;