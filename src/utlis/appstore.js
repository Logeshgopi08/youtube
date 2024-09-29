import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./sidebarSlice";
import SearchReducer from "./searchSlice";

const appStore = configureStore({
    reducer:{
        sidebar : MenuReducer,
        searchQuery:SearchReducer
    }
});

export default appStore;