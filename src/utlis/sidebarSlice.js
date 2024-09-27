import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:{
        ismenuOpen : true
    },
    reducers:{
        changeMenu :(state)=>{
            state.ismenuOpen = !state.ismenuOpen;
        },
        closeMenu:(state)=>{
           state.ismenuOpen = false;
        }
    }
});


export const {changeMenu,closeMenu} = sidebarSlice.actions;

export default sidebarSlice.reducer;