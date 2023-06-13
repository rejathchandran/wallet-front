import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./redux/AuthSlice";
export default configureStore({
  reducer: {
    auth:AuthReducer,
  },
})