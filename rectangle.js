let args = process.argv.slice(2);
/* array of arguments when the script is executed with shell (using node). 
first 2 arguments sliced because arg1 is 'node' and arg2 is the filename. 
see https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ for more details. */

const fs = require('fs');
const c1 = fs.readFileSync(`./${args[0]}`, 'utf8').split('\n');
const c2 = fs.readFileSync(`./${args[1]}`, 'utf8').split('\n');
let lineC1 = 0;

const checkMatch = (line, column) => {
   for (let lineC1 = 0; lineC1< c1.length; lineC1++) {
      for (let columnC1 = 0; columnC1 < c1[lineC1].length; columnC1++) {
         if (c1[lineC1][columnC1] !== c2[line + lineC1][column + columnC1]) {
            return false;
         }
      }
   }
   return true;
}
for (let line = 0; line < c2.length; line++){
   for (let column = 0; column < c2[line].length; column++){
      if (c2[line][column] === c1[0][0]) {
         if (checkMatch(line, column)) {
            console.log(`We have a match 🎉  Check c2 at line ${line + 1} and column ${column + 1}`);
            return true;
         } else {
            console.log("No match found...");
            return false;
         }
      }
   }
}


