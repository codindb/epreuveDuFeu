let args = process.argv.slice(2);
/* array of arguments when the script is executed with shell (using node). 
first 2 arguments sliced because arg1 is 'node' and arg2 is the filename. 
see https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ for more details. */

const fs = require('fs');
const file = fs.readFileSync(`./${args[1]}`, 'utf8').split('\n');


const splitAndSort = (array) => {
   return array.split("").sort();
}

const checkMatch = (stringComparedTo) => {
   for (let i = 0; i < stringToCompare.length; i++) {
      if (stringToCompare[i] !== stringComparedTo[i]) {
         return false;
      }
   }
   return true;
}

let stringToCompare = splitAndSort(args[0]);
let stringsFromFile = [];
let anagrammes = [];


for (let i = 0; i < file.length; i++){
   stringsFromFile[i] = splitAndSort(file[i]);
}

for (let i = 0; i < stringsFromFile.length; i++) {
   if (stringsFromFile[i].length === stringToCompare.length) {
      if (checkMatch(stringsFromFile[i])) {
         anagrammes.push(file[i]);
      }
   }
}
console.log(anagrammes);