import { useState } from 'react'
// import "./App.css"
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import ModeSwitcher from './components/ModeSwitcher'


function App() {
  
  return (
    <>
    <div className='container  mt-5 p-5 rounded shadow ' >
    <div className='row d-flex justify-content-end'>
            <div className="col-1 ">
              <ModeSwitcher/>
            </div>
          </div>
    <div className='row d-flex justify-content-center text-center  mb-3'>
    <h3>Todo List</h3>
      </div>
     
      <div className='row d-flex justify-content-center '>
        <AddTodo/>
      </div>
     
      {/* <div className='row d-flex justify-content-center bg-danger mt-3 pt-3'> */}
        <Todo/>
      {/* </div> */}
    </div>
    </>

  )
}

export default App
