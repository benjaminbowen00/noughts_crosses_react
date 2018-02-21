import React from 'react';
import TableRow from './TableRow.js';

const Board = (props) => {
  // const buttonClick = (e) =>{
  //
  //   // console.log(e.target.value);
  //   // console.log(props.boardArray);
  //   console.log(props.boardArray[e.target.value]);
  //   if(props.boardArray[e.target.value]==""){
  //   props.handleClick(e.target.value);}
  //   else {return;}
  //
  // }

return (

<table>
  <thead>
    <TableRow boardArray={props.boardArray} handleClick={props.handleClick} start="0" />
    <TableRow boardArray={props.boardArray} handleClick={props.handleClick} start ="3" />
    <TableRow boardArray={props.boardArray} handleClick={props.handleClick} start="6" />
    {/* <tr>
      <td><button value='0' onClick={buttonClick}>{props.boardArray[0]}</button></td>
      <td><button value='1' onClick={buttonClick}>{props.boardArray[1]}</button></td>
      <td><button value='2' onClick={buttonClick} >{props.boardArray[2]}</button></td>
    </tr>
    <tr>
      <td><button value='3' onClick={buttonClick}>{props.boardArray[3]}</button></td>
      <td><button value='4' onClick={buttonClick}>{props.boardArray[4]}</button></td>
      <td><button value='5' onClick={buttonClick} >{props.boardArray[5]}</button></td>
    </tr>
    <tr>
      <td><button value='6' onClick={buttonClick}>{props.boardArray[6]}</button></td>
      <td><button value='7' onClick={buttonClick}>{props.boardArray[7]}</button></td>
      <td><button value='8' onClick={buttonClick} >{props.boardArray[8]}</button></td>
    </tr> */}
</thead>
</table>

)

}

export default Board;
