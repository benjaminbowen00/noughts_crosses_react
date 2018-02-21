import React from 'react'

const Cell = (props) => {

  const buttonClick = (e) =>{
    console.log("button clicked");
    // console.log(e.target.value);
    // console.log(props.boardArray);
    console.log(props.boardArray[e.target.value]);
    if(props.boardArray[e.target.value]==""){
    props.handleClick(e.target.value);}
    else {return;}
    

  }

  return (
    <td><button value={props.index} onClick={buttonClick} >{props.boardArray[props.index]}</button></td>
  )


}

export default Cell;
