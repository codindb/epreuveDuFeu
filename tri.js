let args = process.argv.slice(2);
/* array of arguments when the script is executed with shell (using node). 
first 2 arguments sliced because arg1 is 'node' and arg2 is the filename. 
see https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ for more details. */

args = args.map(x => parseInt(x, 10)); // parse the array to integer because the shell arguments are an array of strings

let sortedNumbers = 0;

while (sortedNumbers < args.length) {
   for (let i = 0; i < args.length-sortedNumbers; i++) {
      if (args[i] < args [i + 1]) {
         let temp;
         temp = args[i];
         args[i] = args[i + 1];
         args[i + 1] = temp;
      }
   }
   sortedNumbers++;
}
console.log(args);