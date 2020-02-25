import React from "react";
import "./FullBoard.css";
import LargeTriangleUP from "./triangles/LargeTriangleUP";
import LargeTriangleDOWN from "./triangles/LargeTriangleDOWN";

class FullBoard extends React.Component {
  state = {};
  render() {
    return (
    <div className="fullBoard">
      <div className="row">
        <LargeTriangleUP></LargeTriangleUP>
      </div>
      <div className="row">
        <div className='columnOne'>
          <LargeTriangleDOWN></LargeTriangleDOWN>
        </div>
        <div className='columnTwo'>
          <LargeTriangleUP></LargeTriangleUP>
        </div>
        <div className='columnThree'>
          <LargeTriangleDOWN></LargeTriangleDOWN>
        </div>
        <div className='columnFour'>
          <LargeTriangleUP></LargeTriangleUP>
        </div>
        <div className='columnFive'>
          <LargeTriangleDOWN></LargeTriangleDOWN>
        </div>
      </div>
      <div className="row">
        <div className='columnOne'>
          <LargeTriangleUP></LargeTriangleUP>
        </div>
        <div className='columnTwo'>
          <LargeTriangleDOWN></LargeTriangleDOWN>
        </div>
        <div className='columnThree'>
          <LargeTriangleUP></LargeTriangleUP>
        </div>
        <div className='columnFour'>
          <LargeTriangleDOWN></LargeTriangleDOWN>
        </div>
        <div className='columnFive'>
          <LargeTriangleUP></LargeTriangleUP>
        </div>
      </div>
      <div className="row">
        <LargeTriangleDOWN></LargeTriangleDOWN>
      </div>
    </div>);
  }
}

export default FullBoard;
