class Word{
    constructor(theWord){
        this.theWord = theWord;
    }
    myLetter(){
        var letter = this.theWord.split('');
        console.log(letter)

    }
}
var newWord = new Word ("apple");
newWord.myLetter();