import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";


const initialTask = {
    label: "",
    is_done: false
}

const urlBase = "https://playground.4geeks.com/todo"


const Todos = () => {
    const [task, setTask] = useState(initialTask)

    const { store, actions } = useContext(Context)
    const { todos } = store


    // funcion que agrega lo que se escribe en el input y lo coloca en el useState (task)
    const handleChange = ({ target }) => { // objeto event
        setTask({
            ...task,
            [target.name]: target.value
        })
    }

    const addTask = async (event) => {
        if (event.key == "Enter") {
            const result = await actions.addTask(task)
            if (result) {
                setTask(initialTask)
            }
        }
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h1>Lista de tareas</h1>
                        <form onSubmit={(event) => event.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Agrega la tarea"
                                className="form-control"
                                name="label"
                                value={task.label}
                                onChange={handleChange}
                                onKeyDown={addTask}
                            />
                        </form>
                        {
                            todos.length <= 0 ? <div> no tiene tareas</div> :

                                todos.map((item) => (
                                    <div key={item.id} className="task">
                                        {item.label}
                                        <span>
                                            <button onClick={() => actions.deleteTask(item.id)}>X</button>
                                            {/* <button onClick={() => editTask(item)}>E</button> */}

                                            <input
                                                type="checkbox"
                                                checked={item.is_done}
                                                onChange={() => actions.editTask(item)}
                                                className="form-check-input mt-0"
                                            />
                                        </span>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}


export default Todos;


