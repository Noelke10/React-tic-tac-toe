import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblack",
  borderRadius: "10px",
  width: "400px",
  height: "400px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    <Square value="1" onClick={() => onClick("dummy Value")} />
    <Square value="2" onClick={() => onClick("dummy Value")} />
    <Square value="3" onClick={() => onClick("dummy Value")} />
    <Square value="4" onClick={() => onClick("dummy Value")} />
    <Square value="5" onClick={() => onClick("dummy Value")} />
    <Square value="6" onClick={() => onClick("dummy Value")} />
    <Square value="7" onClick={() => onClick("dummy Value")} />
    <Square value="8" onClick={() => onClick("dummy Value")} />
    <Square value="9" onClick={() => onClick("dummy Value")} />
  </div>
);

export default Board;
