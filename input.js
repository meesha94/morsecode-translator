import { translateToMorse } from "./translator.js"


const englishInput = document.querySelector("#input-english")
const morseCodeOutput = document.querySelector("#output-morse")



export const output = () => {
    return morseCodeOutput.innerHTML = translateToMorse(englishInput.value)
}

englishInput.addEventListener("input", output)

