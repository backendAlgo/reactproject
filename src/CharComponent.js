import React from "react";

function CharComponent(props) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
      }}
      onClick={props.charHandleClick}
    >
      {props.char}
    </div>
  );
}

export default CharComponent;
