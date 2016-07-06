// var mongoose = require('mongoose');

// var db = mongoose.connect('mongodb://http://127.0.0.1:3000/'); //update

// mongoose.connection.once('connected', function() {
// 	console.log("Connected to database")
// });

// module.exports = mongoose;

// var Schema = mongoose.Schema;

// // create a schema
// var userSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   boxList: {type: Array},
//   created_at: Date,
// });


// // the schema is useless so far
// // we need to create a model using it
// var User = mongoose.model('User', userSchema);

// var thor = new User({
//   username: 'Thor',
//   password: 'PG-13',
//   boxList: [ {p1: {x:10, y:10}, p2: {x:500, y:500} }, {p1: {x:30, y:30}, p2: {x:300, y:300} } ],  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
//   created_at: 3
// });

// thor.save(function(err, thor) {
//   if (err) return console.error(err);
//   console.dir(thor);
// });



// // make this available to our users in our Node applications
// module.exports = User;

