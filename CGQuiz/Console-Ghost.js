const rl = require("readline");
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const steps = require("./steps.js");

  let currentStep = "start";
  let alreadyLocked = 0;

  function logStep() {
    const step = steps[currentStep];

    if (step) {
      readline.question(`${step.message || ""} > `, (input) => {
        handleAnswer(input);
      });
    }
  }

  function handleAnswer(answer) {
    
    let step;

    if (steps[currentStep].type == "question") {
      if (answer == steps[currentStep].correct) {
        alreadyLocked = 0;
        step = steps[currentStep].yes;
      }
      else {
        if (alreadyLocked == 1) {
          step = "endLose";
        }
        else {
          console.log("Oh no! You answered the question incorrectly and must try the other door!");
          alreadyLocked = 1;
          step = steps[currentStep].no;
        }
      }
    }

    if (steps[currentStep].type == "floor") {
      if (answer == steps[currentStep].colour1) {
        step = steps[currentStep].colour1Question;
      }
      else {
        step = steps[currentStep].colour2Question;
      }
    }

    if (steps[currentStep].type == "stage") {
      if (answer === "yes") {
        step = steps[currentStep].yes;
      } else {
        step = steps[currentStep].no;
      }
      if (step == "no") {
        console.log("Muhahahaha! Goodbye for now...");
        readline.close();
        return;
      }
    }
    currentStep = step;
    logStep();
  }

  console.clear();
  logStep();
}

startGame();
