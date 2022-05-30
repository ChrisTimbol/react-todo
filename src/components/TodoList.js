import React, { useState } from 'react';


function handleRemove(id, setList, list) {
    setList(list.filter((element, index) => element.id !== id))
}

export default function TodoList() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    return (
        <div className="ToDoContainer">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="addButton" onClick={() => {
                setList([...list, input])
                setInput("")
            }}>Add</button>

            <ul>
                {list.map((e, i) => {
                    return <div key={i}>
                        <li key={i} id={i}> {e}
                            <button type="button" className="glyphicon glyphicon-edit" onClick={() => {
                                list.splice(i, 1, input)// splice looks for i index, removes that element from array, replace with input
                            }}></button>
                            <button type="button" onClick={() => { setList(list.filter((element, index) => index !== i)) }}>x</button>
                        </li>
                    </div>
                })}
            </ul>
        </div>

    )
}
