const args = process.argv.slice(2);
/* array of arguments when the script is executed with shell (using node). 
first 2 arguments sliced because arg1 is 'node' and arg2 is the filename. 
see https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ for more details. */

let string = args[0].toLowerCase();
let parsedString = "";
let upperIndex = 0;

for(let i = 0; i < string.length; i++) {
   if (string[i] != " ") {
      if (upperIndex % 2) {
         parsedString += string[i].toUpperCase()
      } 
      else {
         parsedString += string[i];
      }
      upperIndex++;
   } else {
      parsedString += " ";
   }
}
console.log(parsedString);


