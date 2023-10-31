import React, { useState} from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput]=useState("")
    

    const dispatch=useDispatch()

   
    const add=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <>
        <form onSubmit={add} className='col-8'>
            <div className="input-group mb-3">      
            <input className="form-control" type=" text"placeholder='add to do here' value={input} onChange={(e)=>setInput(e.target.value)} />
                <button className="btn btn-secondary" type="submit" >Add To List</button>
            </div>
        </form>   
    </>
  )
}

export default AddTodo