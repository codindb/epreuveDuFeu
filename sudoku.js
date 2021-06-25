let args = process.argv.slice(2);
/* array of arguments when the script is executed with shell (using node). 
first 2 arguments sliced because arg1 is 'node' and arg2 is the filename. 
see https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ for more details. */

const fs = require('fs');
const { exit } = require('process');
const file = fs.readFileSync(`./${args[0]}`, 'utf8').split('\n');
const grid = [];

file.forEach(element => grid.push(element.split('')));
// console.log(file.join('\n'));

const lineCheck = (line, possibleAnswer) => {
   for (let j = 0; j < grid[line].length; j++) {
      if (grid[line][j] == possibleAnswer) {
         return false
      } 
   }
   return true;
}

const columnCheck = (line, column, possibleAnswer) => {
   for (line ; line < grid.length; line++) {
      if (grid[line][column] == possibleAnswer) {
         return false;
      } 
   }
   return true;
}

const squareCheck = (line, column, possibleAnswer) => {
   let lineStart = parseInt((line / 4),10) * 4;
   let columnStart = parseInt((column / 4),10) * 4;
   for (let i = lineStart; i < lineStart + 3; i++) {
      for (let j = columnStart; j < columnStart + 3; j++) {
         if (grid[i][j] == possibleAnswer) {
            return false;
         } 
      }
   }
   return true;
}
   
const solving = () => {
   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++){
         if (grid[i][j] === "_") {
            let possibleAnswer = 1;
            while (possibleAnswer < 10) {
               if (lineCheck(i, possibleAnswer) && columnCheck(i, j, possibleAnswer) && squareCheck(i, j, possibleAnswer)) {
                  grid[i][j] = possibleAnswer.toString();
                  solving();
               }
               possibleAnswer++;
            }
            console.log('error');
            exit();
         }
      }
   }
   console.log('🎉 | Sudoku Solved |🎉');
   console.log('_____________________');
   console.log(' ');
   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
         process.stdout.write(grid[i][j]);
      }
      process.stdout.write('\n');
   }
   exit(); 
}

solving ();
