'use client';
import React from 'react'
import { useState } from 'react/cjs/react.production.min';


const ToDoList = ()=> {

    const [taskList, setTaskList] = useState([
        { text : 'Do Coding', completed : false },
        { text : 'Play Games', completed : false },
        { text : 'Bring Milk', completed : false },
    ]);

    const addTask = (e) => {
        console.log (e.key);
    }

    return (
        <div className = 'bg-danger-subtle vh-100'>
            <div className='container py-5'></div>

            <h1 className='display-3 fw-bold text-center'>ToDo List</h1>

            <div className='card shadow'>
                <div className='card-hader py-3'>
                    <input 
                    type="text" 

                    className='form-control border-primary border-3'
                    onKeyDown={addTask}
                    />
                </div>

                <div className='card-body'></div>


            </div>


        </div>
    )
}

export default ToDoList;