import { configureStore } from "@reduxjs/toolkit";
import lawyers from "./reducers/lawyers";

export default configureStore({
    reducer:{
        lawyers
    }
})
