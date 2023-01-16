const collectAnswers = require("./lib/collectAnswers")

const questions = [
    "What is your name?",
    "What City do you live?",
    "How old are you?"
]

const answerEvents = collectAnswers(questions, (userAnswers) =>{
    console.log("Thank you for entering your data!")
    console.log(userAnswers)
    process.exit()
});

// Example #1
answerEvents.on("answer", (answer) => { //we can do this because collectAnswers returns an emmiter - see file ./lib/collectAnswers
    console.log(`Example #1: The answer is ${answer}`)
}).on("end session", () => { 
        console.log(`Example #1: This is the end` )
}); 

// // Example #2
// answerEvents.on("answer", (answer) => { //we can do this because collectAnswers returns an emmiter - see file ./lib/collectAnswers
//     console.log(`Example #2: The answer is ${answer}`)
// })