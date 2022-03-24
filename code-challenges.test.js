// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { exportDefaultSpecifier } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

    // Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("secretCodeForKoolKids", () => {
            // A test/it method, nested within the describe block, that in plain words, describe what the function does.
                it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
                    const secretCodeWord1 = "Lackadaisical"
                    // Expected output: "L4ck4d41s1c4l"
                    const secretCodeWord2 = "Gobbledygook"
                    // Expected output: "G0bbl3dyg00k"
                    const secretCodeWord3 = "Eccentric"
                    // Expected output: "3cc3ntr1c"
            // An expect method, nested within the test block, calling on secretCodeForKoolKids function, followed by the toEqual() matcher that checks the expected output of the function return. Create 3 expects.
            expect(secretCodeForKoolKids(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
            expect(secretCodeForKoolKids(secretCodeWord2)).toEqual("G0bbl3dyg00k")
            expect(secretCodeForKoolKids(secretCodeWord3)).toEqual("3cc3ntr1c")
                 })
            })

// ● secretCodeForKoolKids › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// ReferenceError: secretCodeForKoolKids is not defined


// b) Create the function that makes the test pass.

    //Pseudo Code for Function:
        // Input: A string thats been turned into array
        // Output: Array joined back into a string with the coded characters.
        // Process:
        // Split the string up into an array in order to target a specific character.
        // Create a function that takes in an array.
        // Use .map to loop over the array. Use conditional statements to change a letter to the coded number.
 
const secretCodeForKoolKids = (array) => {
    let splitArray = array.split("")
   let code = splitArray.map(value => {
      if(value === "a" || value === "A"){
            return 4
        } else if(value === "e" || value === "E"){
            return 3
        } else if(value === "i" || value === "I") {
            return 1
        } else if(value === "o" || value === "O"){
            return 0
        } else {
            return value
        }
    })
    return code.join("")
}

// PASS  ./code-challenges.test.js
// secretCodeForKoolKids

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

    // Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("wordSpitter", () => {
            // A test/it method, nested within the describe block, that in plain words, describe what the function does.
                it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
                    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
                    const letterA = "a"
                    // Expected output: ["Apple", "Banana", "Orange"]
                    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
                    const letterE = "e"
                    // Expected output: ["Cherry", "Blueberry", "Peach"]
            // An expect method, nested within the test block, calling on wordSpitter function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expects.
            expect(wordSpitter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
            expect(wordSpitter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
                 })
            })

// ● wordSpitter › takes in an array of words and a single letter and returns all the words that contain that particular letter

// ReferenceError: wordSpitter is not defined


// b) Create the function that makes the test pass.

    // Pseudo-Code for Function:
        // Input: array and a string that is a single letter
        // Output: An array containing the word that has that specific letter in it.
        // Process:
        // Create a function that takes in two parameters: array and letter. 
        // Declare a variable where it will map through the array and return all the values lowercase.
        // Create a new variable where the array of lowercase values are filtered through and check to see if each value in array has that letter using includes.
        // Then recapitalize each of the first letter in the value.
const wordSpitter = (array, letter) => {
    let lower = array.map(value => {
        return value.toLowerCase()
    })
    let filterArray = lower.filter(value => {
        if(value.includes(letter)){
        return value
        }
    })
    let word = filterArray.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return word
}

// PASS  ./code-challenges.test.js
// wordSpitter

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


// Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("fullHouseOrNot", () => {
            // A test/it method, nested within the describe block, that in plain words, describe what the function does.
                it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
                    const hand1 = [5, 5, 5, 3, 3]
                    // Expected output: true
                    const hand2 = [5, 5, 3, 3, 4]
                    // Expected output: false
                    const hand3 = [5, 5, 5, 5, 4]
                    // Expected output: false
            // An expect method, nested within the test block, calling on wordSpitter function, followed by the toEqual() matcher that checks the expected output of the function return. Create 3 expects.
            expect(fullHouseOrNot(hand1)).toEqual(true)
            expect(fullHouseOrNot(hand2)).toEqual(false)
            expect(fullHouseOrNot(hand3)).toEqual(false)
                 })
            })

//  ● fullHouseOrNot › takes in an array of 5 numbers and determines whether or not the array is a full house

// ReferenceError: fullHouseOrNot is not defined


// b) Create the function that makes the test pass.
    // Pseudo-Code for Function:
        // Input: an array of numbers
        // Output: true if there is three of a kind, and a pair; false if otherwise
        // Process:
        // Create a function where an array is passed as a parameter. 
        // Conditional statement where:
            //return true if the first three cards have same value and the last two cards have same value
            //return true if first two cards is same value and last three cards is same value.
            //else return false
        // Can set the index equal to each other for the three of a kind and set index of pairs equal to each other.

const fullHouseOrNot = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4]){
            return true
        } else if(array[0] === array[1] && array[2] === array[3] === array[4]) {
            return true
        } else {
            return false
        }
    }
}
// PASS  ./code-challenges.test.js
// fullHouseOrNot