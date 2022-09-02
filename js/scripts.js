// Utility Logic
function noInputtedWord() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].trim().length === 0) {
            return true;
        }
    }
    return false;
}


function wordTextTrim(word) {
    return word.trim();
}



// Business logic
function wordCounter(text) {
    if (noInputtedWord(text)) {
        return 0;
    }
    let wordCount = 0;
    text = wordTextTrim(text)
    const wordArray = text.split(" ");
    wordArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    });
    return wordCount;
}




function numberOfOccurrencesInText(word, text) {
    if (noInputtedWord(word, text)) {
        return 0;
    }
    word = wordTextTrim(word);
    text = wordTextTrim(text);
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });
    return wordCount;
}



function boldPassage(word, text) {
    let htmlString = "<p>";
    word = wordTextTrim(word);
    text = wordTextTrim(text);
    let remove = omitWord(text);
    let regWord = new RegExp(word, "gi");
    let boldedWord = "<b>" + word + "</b>";
    htmlString = remove.replace(regWord, boldedWord)
    return "<p>" + htmlString + "</p>";
}




function omitWord(word) {
    let offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    let newArray = [];
    wordArray = word.split(" ")
    wordArray.forEach(function (sentence) {
        offensiveWords.forEach(function (offWord) {
            if (sentence.includes(offWord)) {
                sentence = "*****"
            }
        });
        newArray.push(sentence)
    });
    let newSentence = newArray.join(" ");
    return newSentence;
}




function topThreeWords(sentence) {
    let realSentence = sentence.replace(/[^0-9a-z]/gi, ' ').toLowerCase();
    let sentenceArray = realSentence.split(" ");
    let newSentence = [];
    let emptyArray = [];
    sentenceArray.forEach(function (element) {
        if (element !== "") {
            newSentence.push(element);
        }
    })
    let uniqueSet = [...new Set(newSentence)];
    uniqueSet.forEach(function (word1) {
        let count = 0;
        newSentence.forEach(function (word2) {
            if (word1 === word2) {
                count++;
            }
        });
        emptyArray.push([word1, count])
    });
    emptyArray.sort(function (a, b) {
        return (b[1] - a[1]);
    });
    for (let i = 0; i <= 3; i++) {
        $("#topThree").html("<li>" + emptyArray[0] + "<br>" + emptyArray[1] + "<br>" + emptyArray[2] + "</li>");
    }
}



// User Interface logic
$(document).ready(function () {
    $("#word-counter").submit(function (event) {
        event.preventDefault()
        let text = ($("#text-passage").val())
        let word = ($("#word").val())


        let result1 = numberOfOccurrencesInText(word, text);
        let result2 = wordCounter(text);
        let result3 = boldPassage(word, text);


        $(".btn2").text(result2);
        $(".btn3").text(result1);
        $(".btn4").html(result3);
        topThreeWords(text)
    });
});