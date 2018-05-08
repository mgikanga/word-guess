console.log("hi")
// letter constructor
class Letter {
    constructor(theLetter, guessed) {
        //property for letter to be guessed
        this.theLetter = theLetter;
        // property for if the user has guessed yet
        this.status = false;
        //property for letter guessed 
        this.guessed = guessed;
        //array for the letter already guessed
        this.word = [];
    }
    //function for comparing letters
    guessing() {
        if (this.status === false){
            console.log("guess a letter");
        if (this.theLetter === this.guessed) {
            // if the letter guessed is right push into the array
            this.word.push(this.guessed)
            console.log(this.guessed)
            //update the guessing status to true
            this.status = true;

        }
        else if (this.theLetter !== this.guessed) {
            //if the letter is wrong display an underscore
            console.log("_")
            //update the guessing status to false
            this.status = false;
        }
    }
}

}
// var for the new letter 
var newLetter = new Letter("r", "r");
newLetter.guessing();
