import React,{useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useSelector,useDispatch} from 'react-redux'
import './App.css'
import { increment,decrement,decrementby5,incrementby5 } from './Reducer'
import { changeText } from './inputSlice'

function App() {

  const {count,count2}=useSelector((state)=>state.counts)
  const{texts}=useSelector(state=>state.texts)
  const dispatch=useDispatch()
  const[text,setText]=useState("")

  return (
    <>
    <div>
      <h1>count:{count}</h1>
      <h2>count2:{count2}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementby5())}>+5</button>
      <button onClick={()=>dispatch(decrementby5())}>-5</button>

      <button onClick={()=>dispatch(changeText(text))}>click</button>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
    {texts}
    
    </div>
      
      
    </>
  )
}

export default App
