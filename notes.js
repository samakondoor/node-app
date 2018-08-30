console.log("new notes");
var addNote = (title, body) => {
  console.log('adding note', title, body);

};
var getAll = () =>{
  console.log('get all notes');
};


var readAll = () => {
  console.log("reading notes");
};
var removeNote = (title) => {
  console.log("removing notes", title);
};

module.exports = {
  addNote,
  getAll,
  readAll,
  removeNote

};
