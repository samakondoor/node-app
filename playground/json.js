/*var obj ={
  name: "james bond"
};
var stringObj =JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

*/

/*var personString= '{"name": "james", "age":55}'
var person= JSON.parse(personString); //parse is to convert string to object
console.log(person);
*/
const fs = require('fs');
var originalNote = {
  title: 'some title',
  body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString);
var noteString =fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
