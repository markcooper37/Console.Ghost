class Question {
    constructor(message, correct, yes, no) {
        this.type = "question";
        this.message = message;
        this.yes = yes;
        this.no = no;
        this.correct = correct;
    }
}

module.exports = Question;