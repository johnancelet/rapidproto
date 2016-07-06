import React from 'react';
import ReactDOM from 'react-dom';

export let Box = (props) => {
  var p1 = props.parameters.p1;
  var p2 = props.parameters.p2;
  var styleObj = {
    top: p1.y +'px' ,
    left: p1.x +'px',
    height: (p2.y - p1.y) +'px',
    width: (p2.x - p1.x) +'px',
    border: '1px solid black',
    position: 'absolute'
  }

  return (
    <div style={styleObj}></div>
  )  
}
