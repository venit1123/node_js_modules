const readline = require("readline")
const { EventEmitter } = require("events")

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done) => {
    /* 
    Takes a list of questions and then 
    saves all the answers in the array 'userAnswers'
    If the answers are less than the questions, it
    will ask the following question. Second argument
    is a callback fuction that will exit the prompt
    */
    
    const userAnswers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter()

    const questionAnswered = (answer) => {
        
        emitter.emit("answer", answer);
        userAnswers.push(answer.trim());

        if(userAnswers.length < questions.length){
            readLine.question(
                    questions[userAnswers.length], // prompt (query)
                    questionAnswered
                ); // callback function that is invoked with the user's input in response to the query
        } else {
            emitter.emit("end session")
            return done(userAnswers)
        }
    };

    readLine.question(firstQuestion, questionAnswered); // remember questionAnswered is the callback method
    return emitter // We can now use the emitter to raise events when certain things happen within this function
}
