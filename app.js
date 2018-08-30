console.log('starting notes');

const fs = require('fs');
const os = require('os');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

 const argv = yargs.argv;
 var command = process.argv[2];
console.log('command:', command);

console.log('Yargs', argv);




 if(command == 'add'){
   notes.addNote(argv.tittle, argv.body);
 }
  else if (command === "list"){
    notes.getAll();
  } else if (command === 'read'){
    notes.getNote(argv.title);
  }
  else if (command === 'remove'){
   notes.removeNote(argv.title);
 }
  else {
  console.log("i do not recognize the command!");


};
