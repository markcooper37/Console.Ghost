const Stage = require('./stages.js');
const Question = require('./questions.js');
const Floor = require('./floors.js');

// Start and end scenarios

let welcomeMessage = "Welcome to the console.ghost Haunted House! To come out alive on the other end, you have to successfully answer coding questions to unlock the haunted doors. \nWould you like to enter? (yes/no)";
let endWinMessage = "Congratulations, you have escaped from the console.ghost Haunted House and still have your soul! \nDo you want to play again? (yes/no)";
let endLoseMessage = "Wrong! Both doors are locked and you are trapped. The console.ghost will now consume your soul! \nWould you like to try again? (yes/no)";

let start = new Stage(welcomeMessage, "fifthFloor", "no");
let endWin = new Stage(endWinMessage, "start", "no");
let endLose = new Stage(endLoseMessage, "start", "no");

// Question scenarios

let redQuestion = new Question("The question on the door reads: \n\"In HTML, which letter is used in the tag used to make text bold?\"", "b", "fourthFloor", "blueQuestion");
let blueQuestion = new Question("The question on the door reads: \n\"In CSS, which property is used to change the colour of an element?\"", "color", "fourthFloor", "redQuestion");
let yellowQuestion = new Question("The question on the door reads: \n\"In CSS, what name is given to the space between the padding and the margin of a box?\"", "border", "thirdFloor", "purpleQuestion");
let purpleQuestion = new Question("The question on the door reads: \n\"In HTML, which letter appears in the tag used to create a paragraph?\"", "p", "thirdFloor", "yellowQuestion");
let greenQuestion = new Question("The question on the door reads: \n\"In HTML, which letter is used in the tag that makes text underlined?\"", "u", "secondFloor", "brownQuestion");
let brownQuestion = new Question("The question on the door reads: \n\"In JavaScript, what type of variable can only have the values true or false?\"", "boolean", "secondFloor", "greenQuestion");
let pinkQuestion = new Question("The question on the door reads: \n\"In CSS, which property is used to set the width of an element?\"", "width", "firstFloor", "orangeQuestion");
let orangeQuestion = new Question("The question on the door reads: \n\"In HTML, which two letters are used in the tag that makes an unordered list?\"", "ul", "firstFloor", "pinkQuestion");
let blackQuestion = new Question("The question on the door reads: \n\"In HTML, JavaScript is placed in a tag containing which word?\"", "script", "groundFloor", "whiteQuestion");
let whiteQuestion = new Question("The question on the door reads: \n\"In JavaScript, in an if statement, what word is used to set out a block of code to be executed if a specified condition is false?\"", "else", "groundFloor", "blackQuestion");
let cyanQuestion = new Question("The question on the door reads: \n\"In JavaScript, what word is used to declare a variable that can be updated but not re-declared?\"", "let", "endWin", "magentaQuestion");
let magentaQuestion = new Question("The question on the door reads: \n\"In CSS, what would you set the flex-direction of a container to in order for the flex items in the container to be placed from top to bottom?\"", "column", "endWin", "cyanQuestion");

// Floor scenarios

let fifthFloorMessage = "You wake up to find you are trapped on the fifth floor of the console.ghost's haunted house. \nThe only way to unlock the doors to the stairwells and make your escape is to enter a code which is the answer to a fiendish question set by the ghost. \nEach door can only be tried once, and if you fail to unlock both doors on a floor, you will be unable to escape and the ghost will surely consume your soul! \nThe doors on this floor are red and blue. \nWhich do you try first? (red/blue)"

let fourthFloorMessage = "Correct! You take the stairs down to the fourth floor. The doors on this floor are yellow and purple. \nWhich door do you try first? (yellow/purple)"

let thirdFloorMessage = "Corrent! You take the stairs down to the third floor. The doors on this floor are green and brown. \nWhich door do you try first? (green/brown)"

let secondFloorMessage = "Correct! You take the stairs down to the second floor. The doors on this floor are pink and orange. \nWhich door do you try first? (pink/orange)"

let firstFloorMessage = "Correct! You take the stairs down to the first floor. The doors on this floor are black and white. \nWhich door do you try first? (black/white)"

let groundFloorMessage = "Correct! Finally, you reach the ground floor and there are two doors to the outside world coloured cyan and magenta. \nWhich door do you try first? (cyan/magenta)"

let fifthFloor = new Floor(fifthFloorMessage, "red", "blue", "redQuestion", "blueQuestion");
let fourthFloor = new Floor(fourthFloorMessage, "yellow", "purple", "yellowQuestion", "purpleQuestion");
let thirdFloor = new Floor(thirdFloorMessage, "green", "brown", "greenQuestion", "brownQuestion");
let secondFloor = new Floor(secondFloorMessage, "pink", "orange", "pinkQuestion", "orangeQuestion");
let firstFloor = new Floor(firstFloorMessage, "black", "white", "blackQuestion", "whiteQuestion");
let groundFloor = new Floor(groundFloorMessage, "cyan", "magenta", "cyanQuestion", "magentaQuestion")

// All steps

const steps = {start, endWin, endLose, redQuestion, blueQuestion, yellowQuestion, purpleQuestion, greenQuestion, brownQuestion, pinkQuestion, orangeQuestion, blackQuestion, whiteQuestion, cyanQuestion, magentaQuestion, fifthFloor, fourthFloor, thirdFloor, secondFloor, firstFloor, groundFloor};

module.exports = steps;