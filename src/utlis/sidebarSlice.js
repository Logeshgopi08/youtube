import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:{
        ismenuOpen : true
    },
    reducers:{
        changeMenu :(state)=>{
            state.ismenuOpen = !state.ismenuOpen;
        }
    }
});


export const {changeMenu} = sidebarSlice.actions;

export default sidebarSlice.reducer;