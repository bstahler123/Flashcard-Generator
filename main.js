var inquirer = require('inquirer');
var clozeCard = require('./ClozeCard.js');
var basicCard = require('./BasicCard.js');
var questions = require('./questions.js').questions;
var clozeQuestion = [];
var basicQuestion = [];

console.log(questions);



function run() {
    inquirer.prompt([{
        type: "list",
        message: "Select Card type.",
        choices: ["basic", "clozed"],
        name: "input"

    }]).then(function(data) {
        if (data.input === "basic") {
            Basic();
        } else {
            Clozed()
        }
    });
}

function Basic() {
    var prompts = questions.map(function(question) {
        return {
            type: 'input',
            message: question.full.replace(question.cloze, '...'),
            name: 'foobar',
        }
    });

    // console.log(JSON.stringify(prompts, null, 2));
    inquirer.prompt(prompts)
        .then(function(res) {
            console.log('res', res);
        })
}

function Clozed() {
    var cloze = questions.cloze;

    var prompts = questions.map(function(question) {
        return {
            type: 'input',
            message: question.full.replace(question.cloze, '...'),
            name: 'userInput',

        }

    });

    console.log(JSON.stringify(prompts, null, 2));
    inquirer.prompt(prompts)
        .then(function(userInput) {
            console.log(userInput);
            if (userInput === cloze){
                console.log("correct");
            }else{
                console.log(cloze);
            }


        })
}




run();
