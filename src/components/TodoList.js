import React, { useState } from 'react';


function handleRemove(id, setList, list) {
    setList(list.filter((element, index) => element.id !== id))
}

export default function TodoList() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    return (
        <div className="ToDoContainer">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => {
                setList([...list, input])
                setInput("")
            }}>Add
            </button>

            <ul>
                {list.map((e, i) => {
                    return <li
                        key={i}
                        id={i}
                        onClick={() => {
                            // return everything that doesnt match i
                            /// return everything when index does not equal i
                            // in other words keep everything except the one index that matches i 
                            setList(list.filter((element, index) => {
                                console.log("filter index = " + index)
                                console.log("i  = " + i)
                                return index !== i
                            }))
                        }}> {e} </li>
                })}
            </ul>
        </div>

    )
}