import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./Reducer"
import inputSlice  from "./inputSlice"




export const store=configureStore({
    reducer:{
        counts:counterSlice,
        texts:inputSlice
      
    }
})