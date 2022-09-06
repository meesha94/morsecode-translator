// an object of key:value pairs for each character
//input box for user to type english words
//output box for morse code equivalent to be outputted
//function that takes a string that uses object key and returns object value when user clicks button
//
import { morseCode } from "./alphabet.js";



export const translateToMorse = (string) => {
  // take user input into function
  // input into uppercase
  //break up input into indiviual item's
  //find corresponding morse code for each letter - ?object iterato
  //loop through the keys in the object to return their value
  // push each value into a new array
  // rejoin morse code
  //return as output
  //let stringInput = englishInput.value
  let input = string.toUpperCase().split("");
  

  for (let i = 0; i < input.length; i++) {
    input[i] = morseCode[input[i]];
    //console.log(stringInputArray[i]);
  }
  return input = input.join(" ")
 
  //console.log(morseCodeOutput.innerHTML = stringInputArray);
};
//translateToMorse();



console.log(translateToMorse("hello"));