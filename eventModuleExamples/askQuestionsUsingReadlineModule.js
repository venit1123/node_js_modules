const readline = require("readline")

// wrapper around standard input and standard output (stdin/stdout)
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* ---------------
    EXAMPLE #1
------------------ */
// readLine.question(
//     "How do you like Node? ", // prompt (query)
//     (answer) => {
//         console.log(`Your answered: ${answer}`)
//     } // callback function that is invoked with the user's input in response to the query
// );


/* ---------------
    EXAMPLE #2
------------------ */

const questions = [
    "What is your name?",
    "What City do you live?",
    "How old are you?"
]

function collectAnswers(questions, done) {
    /* 
    Takes a list of questions and then 
    saves all the answers in the array 'userAnswers'
    If the answers are less than the questions, it
    will ask the following question. Second argument
    is a callback fuction that will exit the prompt
    */
    
    const userAnswers = []
 
    const questionAnswered = (answer) => {
        userAnswers.push(answer.trim());
        if(userAnswers.length < questions.length){
            readLine.question(
                    questions[userAnswers.length], // prompt (query)
                    questionAnswered
                ); // callback function that is invoked with the user's input in response to the query
        } else {
            return done(userAnswers)
        }
    };

    readLine.question(questions[0], questionAnswered); // remember questionAnswered is the callback method
}

collectAnswers(questions, (userAnswers) =>{
    console.log("Thank you for entering your data!")
    console.log(userAnswers)
    process.exit()
});

/* Note: As you can see, we are constantly SENDING FUNCTIONS AS AN ARGUMENT such as
    "done" in function collectAnswers(questions, done). This is goind to help do something
    ASYNCHRONOUSLY. I want to call done only when we ran out of questions.
*/