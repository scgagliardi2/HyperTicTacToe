import React from "react";
import "./FullBoard.css";
import Dropdown from "./Dropdown";
import QueryInput from "./LargeTriangle";

class FullBoard extends React.Component {
  state = {};
  render() {
    return <div className="fullBoard"><Dropdown></Dropdown><QueryInput></QueryInput></div>;
  }
}

export default FullBoard;
