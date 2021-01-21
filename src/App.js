import React, { useState } from "react";
import "./App.css";
import Tasks from "./tasks";
import Search from "./search";
function App() {
  const [task, setTasks] = useState([
    { id: 1, todo: "DO it" },
    { id: 2, todo: "Do it" },
    { id: 3, todo: "DO it" },
    { id: 4, todo: "Do it" },
  ]);
  //filter filters what and remove th one we specified we want and by  adding ! it returns opposite
  const cut = (id) => {
    setTasks(task.filter((tasks) => id !== tasks.id));
    console.log(id);
  };
  //inputt is the value from input field
  const [inputt, setInput] = useState();
  //change funct will take the target value in search  and setinput wil e later used to clear the search box and setdefaut to empty string
  const change = (e) => {
    setInput(e.target.value);
    console.log(inputt);
  };
  // spread operator is used as task is an array and inside it we have ojects  id =task.len+1 because id should be unique an I have hardcoded frst 4 values so to avoid errors and todo is set to input
  const add = (e) => {
    setTasks([...task, { id: task.length + 1, todo: inputt }]);
    //prevent default to avoid reload
    e.preventDefault();
    //setinput set to empty string to clear the search box
    setInput("");
    console.log(task);
  };
  //passing cut func to TASKS component
  //passing task array to  component
  return (
    <div className="App">
      <Search change={change} inputt={inputt} add={add} />
      {task.length > 0 ? (
        <Tasks task={task} cut={cut} />
      ) : (
        <h1> "Please add task for today"</h1>
      )}
    </div>
  );
}

export default App;
