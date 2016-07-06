import React from 'react';
import ReactDOM from 'react-dom';
import {Box} from './Box';

export class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      boxList: this.props.boxList || []
    }
  }

  render() {
    return (
      <div>
        {this.state.boxList.map( (box) => (<Box parameters={box}/>) )}
      </div>
    )
  }
}

// {this.state.boxList.map( (box) => (<Box parameters={box}/>) )}


