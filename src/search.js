import React, { useState } from "react";

export default function Search({ change, inputt, add }) {
  return (
    <div>
      <form>
        <input
          onChange={change}
          placeholder="Input task"
          style={{
            width: "50%",
            marginLeft: "25%",
            background: "Gold",
            color: "black",
          }}
          value={inputt}
        ></input>
        <button type="submit" onClick={add}>
          Add
        </button>
      </form>
    </div>
  );
}
