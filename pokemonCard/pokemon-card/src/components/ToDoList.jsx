import { useEffect, useState } from 'react';
import { getToDoList } from './../services/toDoList'; 

function ToDoList() {
    const [toDo, setToDo] = useState({});

    useEffect(() => {
        getToDoList().then((res => {setToDo(res)}))
    }, [])

    return (
        <>
            <h1> Hola Mundo! </h1>
            {toDo.map((item, idx) =>
                <div>
                    <h1>{item.description}</h1>
                    <p>{item.status}</p>
                </div>
            )}
        </>
    )
}

export default ToDoList;