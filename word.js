class Word{
    constructor(theWord){
        //property for the word randomly selected word to be guessed
        this.theWord = theWord;
    }
    // function that splits up the word
    myLetter(){
        var letter = this.theWord.split('');
        console.log(letter);
        for(let i =0; i<letter.length; i++){
            var theLetter = letter[i]
            console.log(theLetter)
        }
    }
}
var newWord = new Word ("apple");
newWord.myLetter();