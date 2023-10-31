import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {

    const todos=useSelector(state=>state.todos)
 
    const dispatch=useDispatch()

  return (
    <>
  
                <div className='row d-flex justify-content-center  mt-2 pt-3'>
                <div className="  col-8 ">
                {todos.map((todo=>
                     <li key={todo.id} className=" mt-3 d-flex justify-content-between" >
                        <div className="col-8  ">
                            {todo.text}            
                        </div>
                        <div className="col-1 d-flex justify-content-end btn-group ">
                            <button className='btn btn-danger' onClick={()=>dispatch(removeTodo(todo.id))}> Delete
                            </button>
                        </div>                     
                        </li>
                ))}
                </div>
                </div> 
    </>
  )
}

export default Todo