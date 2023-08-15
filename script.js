const wordsTextarea = document.querySelector (".word-counter-container .words");
const countBtn = document.querySelector (".word-counter-container .countbtn");
const wordCount = document.querySelector (".word-counter-container .word-count span");


const countWords = () => {
    let words = wordsTextarea.value;
    let wordsTrimmed = words.replace(/\s+/g, " ").trim ();
    let splitWords = wordsTrimmed.split(" ");

    console.log(splitWords);

    let numberOfwords = splitWords.length;
    if (splitWords= [0] == "") {
        numberOfwords = 0;
    }
    
    wordCount.innerHTML = numberOfwords;
};

countBtn.addEventListener("click", countWords);