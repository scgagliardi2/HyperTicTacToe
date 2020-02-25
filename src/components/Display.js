import React from "react";
import "./Display.css";
import Board from "./Board";

class Display extends React.Component {
  state = {};
  render() {
    return (
      <div className="Display">
        <div className='row'>
          <Board></Board></div>
        <div className='row'>
          <div className='columnOne'>
            <Board></Board>
          </div>
          <div className='columnTwo'>
            <Board></Board>
          </div>
          <div className='columnThree'>
            <Board></Board>
          </div>
          <div className='columnFour'>
            <Board></Board>
          </div>
          <div className='columnFive'>
            <Board></Board>
          </div>
        </div>
        <div className='row'>
        <div className='columnOne'>
            <Board></Board>
          </div>
          <div className='columnTwo'>
            <Board></Board>
          </div>
          <div className='columnThree'>
            <Board></Board>
          </div>
          <div className='columnFour'>
            <Board></Board>
          </div>
          <div className='columnFive'>
            <Board></Board>
          </div>
        </div>
        <div className='row'>
          <Board></Board></div>
      </div>
    );
  }
}

export default Display;
