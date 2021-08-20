const rl = require("readline");
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const steps = {
    start: {
      message: "Welcome to the Console.Ghost Haunted House! To come out alive on the other end, you have to successfully pass the coding quiz behind the haunted doors. Would you like to enter? (yes/no)",
      yes: "firstQuestion",
      no: () => {
        console.log("Muhahahaha! Goodbye for now...");
        readline.close();
      },
    },
    firstQuestion: {
      message: "Is HTML fun? (yes/no)",
      yes: "secondQuestion",
      no: "endLose",
    },
    secondQuestion: {
      message: "That's the right answer! Is CSS fun? (yes/no)",
      yes: "thirdQuestion",
      no: "endLose",
    },
    thirdQuestion: {
      message: "Correct! Is JavaScript fun? (yes/no)",
      yes: "endWin",
      no: "endLose",
    },
    endLose: {
      message: "Wrong! The Console.Ghost has eaten you alive! Would you like to try again?",
      yes: "start",
      no: () => {
        console.log("Muhahahaha! Goodbye for now...");
        readline.close();
      },
    },
    endWin: {
      message: "Congratulations, you have survived the Console.Ghost Haunted House! Do you want to play again?",
      yes: "start",
      no: () => {
        console.log("Muhahahaha! Goodbye for now...");
        readline.close();
      },
    },
    // put more steps here
  };

  let currentStep = "start";

  function logStep() {
    const step = steps[currentStep];

    if (step) {
      readline.question(`${step.message || ""} `, (input) => {
        handleAnswer(input);
      });
    }
  }

  function handleAnswer(answer) {
    let step;

    if (answer === "yes") {
      step = steps[currentStep].yes;
    } else {
      step = steps[currentStep].no;
    }

    if (typeof step === "function") {
      step();
      return;
    }

    if (typeof step === "string") {
      currentStep = step;
    }

    logStep();
  }

  console.clear();
  logStep();
}

startGame();
