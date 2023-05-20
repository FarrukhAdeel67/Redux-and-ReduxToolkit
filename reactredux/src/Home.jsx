import React from 'react'
import { useDispatch,useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const {c} = useSelector(state=> state.custom)
    const addButton = ()=>{
        dispatch({
            type:"increment",
        })

    }
    const subButton = ()=>{
        dispatch({
            type:'decrement',
        })
    }
    const addButton25 = ()=>{
        dispatch({
            type:'incrementByValue',
            payload: 25,
        })
    }
  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addButton}>Increment</button>
      <button onClick={subButton}>Decrement</button>
      <button onClick={addButton25}>Increment by 25</button>
    </div>
  )
}

export default Home;
