import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        let val = e.target.value;
        setNewTask(val);
    }

    const addTask = () => {

        if(newTask.trim() !== ""){
            setTasks( t=> [...t, newTask] ) ;
            setNewTask("") ;
        }

        
    }

    const deleteTask = (index) => {

        const updatedTasks = tasks.filter( (_, idx) => idx !== index );
        setTasks(updatedTasks) ;
    }

    const moveTaskUp = (index) => {
        if(index != 0){
            let copyTasks = [...tasks] ;

            let element = copyTasks[index] ;
            copyTasks[index] = copyTasks[index-1] ;
            copyTasks[index-1] = element ;

            setTasks(copyTasks)
        }
    }

    const moveTaskDown = (index) => {
        
        if(index < tasks.length -1 ){
            let copyTasks = [...tasks] ;

            let element = copyTasks[index] ;
            copyTasks[index] = copyTasks[index+1] ;
            copyTasks[index+1] = element ;

            setTasks(copyTasks)
        }
    }

    return (
        <>
            <div className="to-do-list">

                <h1>To Do List</h1>

                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>

                            <button
                                className="move-task-up-btn"
                                onClick={()=>moveTaskUp(index)}>
                                ☝️
                            </button>

                            <button
                                className="move-task-downl-btn"
                                onClick={()=>moveTaskDown(index)}>
                                👇
                            </button>

                            <button
                                className="delete-btn"
                                onClick={()=>deleteTask(index)}>
                                <i class='bx bx-trash' ></i>
                            </button>
                        </li>
                    )
                    }
                </ol>

                <div className="task-input-div">
                    <input
                        type="text"
                        placeholder="+ Add a Task"
                        value={newTask}
                        onChange={handleInputChange}
                        onKeyDown={ (e)=>{
                            if(e.key === "Enter"){
                                addTask() ;
                            }
                        } }
                        
                    />

                    <button
                        className="add-button"
                        onClick={addTask}>
                        Add
                    </button>
                </div>

            </div>

        </>
    );
}

export default ToDoList