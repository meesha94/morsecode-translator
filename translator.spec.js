import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
  it(" should translate a to be .-", ()=> {
    // Arrange
      let string;
    // Act
      string = a;
      let result= translateToMorse(string)
    // Assert
    expect(result).toBe(".-")
  })


  it(" should translate rob to be *-", ()=> {
    // Arrange
      let string;
    // Act
      string= rob;
      let result= translateToMorse(string)
    // Assert
    expect(result).toBe(".-. --- -...")
  })

  it("should translate 3 to ...--", ()=> {
    // Arrange
      let string;
    // Act
      string= 3;
      let result= translateToMorse(string)
    // Assert
    expect(result).toBe("...--")
  })

  it("should translate 34 to ...-- ....-", ()=> {
    // Arrange
      let string;
    // Act
      string= 34;
      let result= translateToMorse(string)
    // Assert
    expect(result).toBe("...-- ....-")
  })

  it("should translate two words to - .-- --- / .-- --- .-. -.. ...", ()=> {
    // Arrange
      let string;
    // Act
      string= "two words";
      let result= translateToMorse(string)
    // Assert
    expect(result).toBe("- .-- --- / .-- --- .-. -.. ...")
  })

  it("should translate ! . ? , - to -.-.-- / .-.-.- / ..--.. / --..-- / -....-", ()=> {
    // Arrange
      let string;
    // Act
      string= "! . ? , -";
      let result= translateToMorse(string)
    // Assert
    expect(result).toBe("-.-.-- / .-.-.- / ..--.. / --..-- / -....-")
  })

  it("should translate name@email.com to -. .- -- . .--.-. . -- .- .. .-.. .-.-.- -.-. --- --", ()=> {
    // Arrange
      let string;
    // Act
      string= "name@email.com";
      let result= translateToMorse(string)
    // Assert
    expect(result).toBe("-. .- -- . .--.-. . -- .- .. .-.. .-.-.- -.-. --- --")
  })


 })

 // recieve letters and translate those letters into morse code
 //capital letters
 //spaces between words
 //numbers
 //symbols
 //write 7 tests before doing javascript 