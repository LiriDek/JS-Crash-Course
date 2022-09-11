
///// STRINGS /////
// Show the 10th letter of the string
console.log ('Hello World' [10])
// It shows the length of the string
console.log ('12345'.length)
// It shows the first letter of the str variable property
let str = 'Eno'
console.log (str[0])
// console. log (str.length) Is same thing as the above example length string


// Variable name which is fixed as Eno
let name = 'Eno'
/**
 * The difference between const and let is that a constant is something we
 * cannot change since it's fixed in opposite to let which is real variable.
 * var is a variable but it is said to not be used on top tech companies
 */

// semicolons ";" are not necessary in JS but it is asked on top tech companies
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log (fahrenheit)

// BOOLEAN //
// True or false

//// EQUALITY ////
// "==" Double equals checks the values
// "===" Triple equals checks the values and types


let bool = '1' == 1 // "true" is displayed
console.log (bool)

// adding "!" to double or triples equals "!==" is used to verify if values aren't equal

let boolean = '1' != 1 // "False" is displayed  because there's no inequality
console.log (boolean)

//// CONDITIONS ////

let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log('show the video')
}
// adding another condition
else if (loggedIn === true) {
    console.log('tell the user to updrade')
}
else {
    console.log('Tell the user to log in')
}

let cash = 35
let price = 40
let difference = cash - price

if (cash > price) {
    // ctrl + alt + 7 = `` is mandatory if we want to implement a variable such as ${difference}
    console.log(`you paid extra - here's ${difference}`)
}
else if (cash === price) {
    console.log("You paid the exact amount, have a nice day!")
}
// couldn't apply () conditions to else
else {
    // the multiplication is a way to receive a positve number
    console.log(`You don't have the required amount of money - ${difference * -1} is missing`)
}

/** COMPARISON OPERATOR
 * 
 */