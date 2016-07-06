import React from 'react';
import ReactDOM from 'react-dom';
import {Page} from './Page';
// import {mongoose} from '../mongodb'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Page boxList={this.props.boxList} />
      </div>
    )
  }
}
 
ReactDOM.render(
  <App boxList={ [ {p1: {x:10, y:10}, p2: {x:500, y:500} }, {p1: {x:30, y:30}, p2: {x:300, y:300} }, {p1: {x:20, y:20}, p2: {x:200, y:200} } ] }/>,
  document.getElementById('root')
);


// User.findOne({username: 'Thor'}, function(err, person) {
//   console.log(person)
// })


// var mongoose = require('mongoose');

// var db = mongoose.connect('mongodb://http://127.0.0.1:3000/'); //update

// mongoose.connection.once('connected', function() {
//   console.log("Connected to database")
// });

