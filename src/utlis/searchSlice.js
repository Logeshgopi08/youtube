import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState :{

    },
    reducers:{
        addSearchQuery :(state,action)=>{
            state = Object.assign(state,action.payload);
        }
    }
});
 
 export const {addSearchQuery} = searchSlice.actions;

export default searchSlice.reducer;