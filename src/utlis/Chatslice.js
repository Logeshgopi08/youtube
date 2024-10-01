import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addLiveChatMsg:(state,action)=>{
            state.messages.splice(20, 1);
            state.messages.push(action.payload);
        }
    }
});


export const {addLiveChatMsg} = ChatSlice.actions;

export default ChatSlice.reducer;