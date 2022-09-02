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
    // let textArray = remove.split(" ");
    // textArray.forEach(function (element, index) {
    //   if (element.includes(word)) {
    //     htmlString = htmlString.concat("<b>" + element + "</b>");
    //   } else {
    //     htmlString = htmlString.concat(element);
    //   }
    //   if (index !== (textArray.length - 1)) {
    //     htmlString = htmlString.concat(" ");
    //   }
    let regWord = new RegExp(word, "gi");
    let boldedWord = "<b>" + word + "</b>";
    htmlString = remove.replace(regWord, boldedWord)
  
    return "<p>" + htmlString + "</p>";
  }
  
  
  
  
  
  // function boldPassage(word, text) {
  //   if (noInputtedWord(word, text)) {
  //     // return "";
  //   }
  //   const regexWord = new RegExp(word, "gi");
  //   const boldedWord = "<b>" + word + "</b>";
  //   const htmlString = text.replace(regexWord, boldedWord);
  //   return "<p>" + htmlString + "</p>";
  // }
  
  
  
  
  
  
  
  
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
        if (word1 !== "" && word2 !== "") {
          if (word1 === word2) {
            count++;
          }
        }
      });
      emptyArray.push([word1, count])
    });
    emptyArray.sort(function (a, b) {
      return (a[1] - b[1]);
    });
    emptyArray.forEach(function (array) {
      $("#topThree").append("<li>" + array[0] + " " + array[1] + "</li>")
    });
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
      // let result4 = omitWord(result3);
    //   let result5 = topThreeWords(sentence);
  
  
      $(".btn2").text(result2);
      $(".btn3").text(result1);
      // $("#bolded-passage").html(result3);
      $(".btn4").html(result3);
      // $("#topThree").html(result5);
      topThreeWords(text)
  
  
    });
  });