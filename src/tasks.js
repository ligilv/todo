import React from "react";
//importing task and cut oject destructing
//importing task array and mapping it
const Tasks = ({ task, cut }) => {
  return (
    //   gtting access to task array from app
    //state flow upper to bottom  (parent to child )

    <div>
      {task.map((tasks) => (
        <h1 key={tasks.id} style={{ backgroundColor: "grey", width: "35%" }}>
          {tasks.id}---- {tasks.todo}
          <br></br>
          <button
            onClick={() => cut(tasks.id)}
            style={{ backgroundColor: "rgb(64, 142, 184)", width: "100%" }}
          >
            X
          </button>
          {/* passing  cut in another func  so that it does not execute when page refreshed */}
        </h1>
      ))}
    </div>
  );
};
export default Tasks;
