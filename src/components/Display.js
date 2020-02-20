import React from "react";
import "./Display.css";
import FullBoard from "./FullBoard";

class Display extends React.Component {
  state = {};
  render() {
    return (
      <div className="Display">
        <FullBoard></FullBoard>
      </div>
    );
  }
}

export default Display;
