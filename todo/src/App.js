import React, { useState } from "react";
import ToDolist from "./Components/ToDolist";
const App = () => {

  const [inputlist, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist]
    });
    setInputList(""); 
  };

  const deleteItems = (itemval) => {
    setItems((prevItems)=>{
        return prevItems.filter((item)=>{
          console.log (itemval, item)
         return item!==itemval
        })
    })
  };

  return(
    <>
    <div className= "main_div">
      <div className= "center_div">
        <br/>
        <h1> ToDo List </h1>
        <br/>
        <input type= "text" placeholder= "Add Items" 
        value={inputlist} 
        onChange={itemEvent}></input>
        <button onClick={listofItems}> + </button>

        <ol>
          {/* {<li> {inputlist} </li>} */}

          {Items.map( (itemval, index)  => {
           return <ToDolist key = {index}
           id = {index}
           text = {itemval} 
           onSelect = {deleteItems}
           />;
          })}

        </ol>
      </div>
    </div> 
    </>
  );
};

export default App;