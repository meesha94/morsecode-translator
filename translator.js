// an object of key:value pairs for each character
//input box for user to type english words
//output box for morse code equivalent to be outputted
//function that takes a string that uses object key and returns object value when user clicks button
//

const englishInput = document.querySelector(".english")
const morseCodeOutput = document.querySelector(".morse-code")

const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": " / ",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "@": ".--.-.",
};

const translateToMorse = () => {
  // take user input into function
  // input into uppercase
  //break up input into indiviual item's
  //find corresponding morse code for each letter - ?object iterato
  //loop through the keys in the object to return their value
  // push each value into a new array
  // rejoin morse code
  //return as output
  let stringInput = englishInput.value
  let capitaliseInput = stringInput.toUpperCase();
  let stringInputArray = capitaliseInput.split("");

  for (let i = 0; i < stringInputArray.length; i++) {
    stringInputArray[i] = morseCode[stringInputArray[i]];
    //console.log(stringInputArray[i]);
  }
  stringInputArray = stringInputArray.join(" ")
 morseCodeOutput.innerHTML = stringInputArray
  console.log(morseCodeOutput.innerHTML = stringInputArray);
};
//translateToMorse();

englishInput.addEventListener("input",translateToMorse )
