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

/** Logical comparators
 * && checks if the left and right side of the comparison is true
 *  true && true => true
 * true && false => false
 * false && true => false
 * false && false => false
 * If there's a false in the comparison the result will be automatically false
 */

let ca$h = 50
let priice = 40
let isStoreOpen = true
if (ca$h >= priice && isStoreOpen === true) {
    console.log('Print the receipt')
}

/**
 * || checks if the left or right side of the comparison is true
 * true || true => true
 * true || false => true
 * false || true => true
 * false || false => false
 *  eg : isStoreOpen === false is the same as adding "!" to the variable " !isStoreOpen === false"
 * */ 

/**
 * Falsy values
 * A falsy value is considered as "false" when converted to a boolean
 * - undefined
 * - null
 * - NaN
 * - 0
 * - "" 
 * - false
 * If we want to check if the value is Truthy or Falsy just go to the console or in the
 * conditions then type"!!" followed with the value eg : !!0 (console answer is false)
 * */

let val = "";

if (val) {
    console.log("Truthy value", !!val)
}
else {
    console.log(!!val)
}

/**
 * A truthy value is considered as 'true' when converted to a boolean
 * Such as numbers ans strings
 * - 10
 * - 3,14
 * - "Frontend Simplified"
 * - "false"
 * - "0"
 * - []
 * - {}
 */

let value = "Eno";

if (value) {
    console.log(!!value)
}


/**
 * TERNERY OPERATORS
 * it avoids Ifs or Elses when we need only one line of code
 */

let Ca$h = 39
let PrIce = 40
let storeOpenn = true

let correct = Ca$h >= PrIce && storeOpenn ? 'give receipt' : 'do not give receipt'
console.log(correct);


/**
 * LOOPS
 * 
 * - Repeat the same code over and over again
 * ( For loop ; while loop ; do while loop)
 * - DRY = Don't repeat yourself
 */

// let count = 1;

// while ( count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

/**
 * i initialize the count and must start from 0
 * i <= 100 is to define until when to count
 * ++ is the same as i + 1 so if i is inferior to 100 add 1 each time
 */
for (let i = 0; i <= 100; i++) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    // Putting Frontend Simplified first is because we don't need 15 to be printed twice
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log (`${i} -> ${i}`)
    }
}



// Prin out every character from the string "Frontend Simplified"

// To loop the string i must be written this way : i < str.length

const course = "Frontend Simplified"

for (let i = 0; i < course.length; i++) {
    console.log(course[i])
}