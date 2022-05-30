import React, { useState, useRef, useEffect } from 'react';
import './TodoList.css';
export default function TodoList() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const inputFocus = useRef(null)
    const [buttonText, setButtonText] = useState("Add")
    const [editIndex, setEditIndex] = useState("")



    return (
        <div className="ToDoContainer">
            <div className="inputContainer">
                <input
                    className="inputBox"
                    ref={inputFocus}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => {
                    if (buttonText === "Edit") {
                        list.splice(editIndex, 1, input)
                        setButtonText("Add")
                    }
                    else {
                    setList([...list, input])
                    }
                    setInput("")


                }}>{buttonText}</button>
            </div>
            <ul>
                {list.map((e, i) => {
                    return <li className="todoItem" key={i} id={i}>
                        <input type="checkbox"></input>{e}
                        <button title="Enter new input then click here" type="button" className="glyphicon glyphicon-edit" onClick={() => {
                            // setEditWord(e)
                            inputFocus.current.focus();
                            setButtonText("Edit")
                            setEditIndex(i)
                            //      list.splice(i, 1, input) 

                            // list.splice(i, 1, input)   // splice looks for i index, removes that element from array, replace with input in original array
                        }}></button>
                        <button type="button" onClick={() => { setList(list.filter((element, index) => index !== i)) }}>x</button>
                    </li>
                })}
            </ul>
        </div>

    )
}
//add checkmark, change opacity of that one
// add line break for sizing of container of text etc