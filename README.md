Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1


<!-- Our second test. -->
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2



Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0


Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0


Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2




<!-- Second  Function -->

Describe: numberOfOccurrencesInText()
Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0


Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1


Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4


Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0



<!-- Third Function -->
Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

<!-- Sub-Function -->
Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"


Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"


<!-- Fourth Function -->
Describe: omitWord()

Test: "It should omit all offensive words in a sentence"
Code:
const word = "hello, i am zoinks";
const text = "hello";
omitWord(word);
Expected Output: "****"


<!-- Fifth Function -->
Describe: topThreeWord()

Test: "It should return the top three words in a sentence"
Code:
const word = "hello world, Acedu is my home";
const text = "hello";
topThreeWords(sentence);
Expected Output: "hello 1" "world 1" "Acedu 1"





# _{TEXT ANALYZER}

#### _{This is a website created to count the number of words in a sentence}

#### By _**{Norah Charles}

## TEchnologies used
* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _Jquery_

## Description
_{This is a website created to count the number of words in a sentence,the number of occurrences of a particular word in a sentence,bolden the selected word,omit offensive words and return the top three words in a sentence}_

## Setup/Installation Requirements
* _Open The Directory_
* _click on the index.html file_
* _It is designed to open in a web browser_
* _easy to understand format_


## Known Bugs
The text analyzer is still in its design and functioning phase

## License 
_ {MIT}_

## Contact Information
{08094708935}