import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardRedux";


export default configureStore({
  reducer: {
    card: cardReducer
  },
});
