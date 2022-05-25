import React from "react";

const ToDolist = (props) => {

    return (
    <>
    <div className="Todo_style">
    <li> <button id = "del" onClick={()=>props.onSelect(props.text)}> X </button> 
        {props.text} 
    </li>
    </div>
    </>
    );
};

export default ToDolist;
