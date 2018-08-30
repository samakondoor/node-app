console.log('starting notes');

const fs = require('fs');
const os = require('os');
const _= require('lodash');
const notes = require('./notes');
//console.log('result:' , notes.add(9,-3));
console.log(_.isString(true));
console.log(_.isString('verint'));
/*const ad =
fs.appendFile('greetings.txt', 'Hello ${user.username}!',(err)=> {
  if(err) throw err;
  console.log('the "data to append" was appended to file!' );
});
*/
//console.log(notes);

var filteredArray =_.uniq([1,2,3,3,3,1,1,2,2,'verint',1,2,3,'verint']);
console.log(filteredArray);
