import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "../slices/detailsSlice";
export default configureStore({
    reducer:{
  details:detailsSlice,
    }
})