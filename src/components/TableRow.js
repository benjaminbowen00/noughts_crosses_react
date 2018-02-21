import React from 'react';
import Cell from './Cell.js';

const TableRow = (props) => {

  return (
    <tr>
      <Cell boardArray={props.boardArray} handleClick={props.handleClick} index={props.start}/>
      <Cell boardArray={props.boardArray} handleClick={props.handleClick} index={Number(props.start) +1}/>
      <Cell boardArray={props.boardArray} handleClick={props.handleClick} index={Number(props.start) +2}/>
    </tr>
  )





}

export default TableRow;
