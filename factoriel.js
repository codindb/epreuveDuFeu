const args = process.argv.slice(2);
/* array of arguments when the script is executed with shell (using node). 
first 2 arguments sliced because arg1 is 'node' and arg2 is the filename. 
see https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ for more details. */

const numberToFactor = parseInt(args[0],10);

function factor(numberToFactor) {
   if (numberToFactor > 1) {
      return factor(numberToFactor - 1) * numberToFactor;
   } else {
      return 1;
   }
}
console.log(factor(numberToFactor));