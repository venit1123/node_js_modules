const readline = require("readline")

// wrapper around standard input and standard output (stdin/stdout)
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


readLine.question(
    "How do you like Node? ", // prompt (query)
    (answer) => {
        console.log(`Your answered: ${answer}`)
    } // callback function that is invoked with the user's input in response to the query
);

