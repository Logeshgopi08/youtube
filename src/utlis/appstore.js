import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./sidebarSlice";

const appStore = configureStore({
    reducer:{
        sidebar : MenuReducer
    }
});

export default appStore;