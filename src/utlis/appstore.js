import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./sidebarSlice";
import SearchReducer from "./searchSlice";
import ChatReducer from "./Chatslice";

const appStore = configureStore({
    reducer:{
        sidebar : MenuReducer,
        searchQuery:SearchReducer,
        chat:ChatReducer
    }
});

export default appStore;