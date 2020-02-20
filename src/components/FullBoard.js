import React from "react";
import "./FullBoard.css";
import LargeTriangle from "./LargeTriangle";

class FullBoard extends React.Component {
  state = {};
  render() {
    return <div className="fullBoard"><LargeTriangle></LargeTriangle></div>;
  }
}

export default FullBoard;
