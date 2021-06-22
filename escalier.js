const args = process.argv.slice(2);
/* array of arguments when the script is executed with shell (using node). 
first 2 arguments sliced because arg1 is 'node' and arg2 is the filename. 
see https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ for more details. */
 
const numberOfSteps = parseInt(args[0],10);

if (numberOfSteps < 1) {
   console.log("Enter an argument greater or equal to 1");
} else {
   for(let i = 1; i <= numberOfSteps; i++) {
      console.log(" ".repeat(numberOfSteps-i) + "#".repeat(i));
   }
}

