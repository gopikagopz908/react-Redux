import { createSlice } from "@reduxjs/toolkit"

const initialState={
    texts:""
}

const inputSlice=createSlice({
    name:"input",
    initialState,
    reducers:{
        changeText:(state,action)=>{
// console.log(action.payload)
 state.texts=action.payload
        }
    }
})
export default inputSlice.reducer
export const{changeText}=inputSlice.actions