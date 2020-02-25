import React from "react";
import "./Board.css";
import TriangleUp from "./triangles/TriangleUp";
import TriangleDown from "./triangles/TriangleDown";

class Board extends React.Component {
  state = {};
  render() {
    return (
    <div className="Board">
      <div className="row">
        <TriangleUp></TriangleUp>
      </div>
      <div className="row">
        <div className='columnOne'>
          <TriangleDown></TriangleDown>
        </div>
        <div className='columnTwo'>
          <TriangleUp></TriangleUp>
        </div>
        <div className='columnThree'>
          <TriangleDown></TriangleDown>
        </div>
        <div className='columnFour'>
          <TriangleUp></TriangleUp>
        </div>
        <div className='columnFive'>
          <TriangleDown></TriangleDown>
        </div>
      </div>
      <div className="row">
        <div className='columnOne'>
          <TriangleUp></TriangleUp>
        </div>
        <div className='columnTwo'>
          <TriangleDown></TriangleDown>
        </div>
        <div className='columnThree'>
          <TriangleUp></TriangleUp>
        </div>
        <div className='columnFour'>
          <TriangleDown></TriangleDown>
        </div>
        <div className='columnFive'>
          <TriangleUp></TriangleUp>
        </div>
      </div>
      <div className="row">
        <TriangleDown></TriangleDown>
      </div>
    </div>);
  }
}

export default Board;
