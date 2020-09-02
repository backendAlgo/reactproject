import React from "react";

function ValidatorComponent(prop) {
  return (
    <div>
      <p>{prop.len < 5 ? "Text too short" : "Text long enough"}</p>
    </div>
  );
}

export default ValidatorComponent;
