import {createReducer} from "@reduxjs/toolkit";
const initialState = {
    c:0,
};

//in simple redux
// temp = (state, action)=>{
//     action.type = "INCREMENT",
//     state.c = action.payload,
// }
export const customReducer = createReducer(initialState,{
    //this is the action that will be called when the action is dispatched
    increment: (state)=>{
        state.c +=1;
    },
    incrementByValue:(state,action)=>{
        state.c += action.payload;
    },
    decrement:(state)=>{
        state.c -=1;
    }     
});