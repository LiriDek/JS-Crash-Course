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
// can't apply () conditions to else
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
 * i initialize the count and must be set to initialize the loop
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



// Prints out every character from the string "Frontend Simplified"

// To loop the string i must be written this way : i < str.length

const course = "Frontend Simplified"

for (let i = 0; i < course.length; i++) {
    console.log(course[i])
}

/**
 * Functions
 * 
 * It's a block of code designed to perform a particular task
 * 
 */

// DRY Don't repeat yourself

// Function definition (Parameter)
// Between () it's the parameter
function welcomePersonToFES(emri) {
    console.log(`Welcome to FES, ${emri}`)
}

// Call the function (Argument)
// The parameter here is the name
welcomePersonToFES('Eno');

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}
console.log(sumOfTwoNumbers(10, 20));

// Resolving the conversion form celsius to fahrenheit with a Function
// David just wrote celsius into the parameters and returned celsius * 1.8 + 32
// So there's only one argument when we call the function
function celciusToFahrenheit(celsius, multiplicator, addedNumber) {
    return celsius * multiplicator + addedNumber
}
console.log(celciusToFahrenheit(20, 1.8, 32))

// Other way to do that

const convertCelsiusToFahrenheit = (celsius) => {
    return  celsius * 1.8 + 32
}
console.log(convertCelsiusToFahrenheit(2))


/**
 * ARRAYS
 * 
 * Data structure that can hold multiple data values in one variable
 */

let arr = [20, 30, 40, 50, 100]

//First element of array:
console.log(arr[0])

//last element of array :
// console.log(arr[4]) or
console.log(arr[arr.length - 1])

// Add elements to array with ".push" next to the variable
arr.push(200)
// Added 200 to array next to the previous numbers

console.log(arr);

// filter the elements of array ".filter" next to the variable
// If we have only one argument we can remove the () : let newArr = arr.filter(element => {
// when we have only one line of code we could write it this way :
/**
 * let newArr = arr.filter(element => element < 50)
 * console.log(newArr)
 */
let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
})

console.log(newArr)

// Filter out all the 'FAIL' elements in an array

 let grades = ['A+', 'A', 'FAIL']

 let newGrades = grades.filter((element) => {
    console.log(element)
    if (element !== 'FAIL') {
        return true;
    }
 })

// (in one line) let newGrades = grades.filter(element => element !== 'FAIL')
 console.log(newGrades)


 // This is the way to do it without .filter
 let goodGrades = []

 for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
 }

 console.log(goodGrades);


 // .map apply different information to the array

 let array = [1, 4, 9, 16]

 let newArray = arr.map ((element) => {
    console.log(element)
    return 'dog';
 })
// short way : let newArray = array.map(element => 'dog')
 console.log(newArray)

 // Turn each element in an array of dollars into cents

 let dollars = [1, 5, 10, 3];

 let centsDollars = dollars.map ((element) => {
    console.log(element)
    return element * 100;
 })
 // Short way : let centsDollars = dollars.map(element => element * 100)
 console.log(centsDollars)


 // Try to loop it without using the map method
let cents = []

 for (let i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100);
 }
console.log(cents)

/**
 * OBJECTS
 * 
 * Used to store multiple properties in one variable
 * 
 */

/**
 * let user = {
    username: 'Eno',
    email: 'eno.meta@gmx.fr',
    subscriptionStatus: 'VIP',
    discordId: 'Eno#1109',
    lessonsCompleted: [0, 1]
}

console.log(user.username[0])
console.log(user.subscriptionStatus)

//Play with .map to change the values
console.log(user.lessonsCompleted.map(element => element * 2))
 */

// In order to have multiple users we have to store the datas in an array :

let users = [
{
    username: 'Eno',
    email: 'eno.meta@gmx.fr',
    subscriptionStatus: 'VIP',
    discordId: 'Eno#1109',
    password: 'test123',
    lessonsCompleted: [0, 1]
},
{
    username: 'David',
    email: 'david@gmail.com',
    subscriptionStatus: 'VIP',
    discordId: 'David Bragg#0001',
    password: 'test123',
    lessonsCompleted: [0, 1, 2, 3, 4]
}
];

// users[1] this is how we manipulate datas from a specific user :
// console.log(users[1].lessonsCompleted.map(element => element * 2))

function login(email, password) {
    for (let i = 0 ; i < users.length ; i++) {
        if (users[i].email === email) {
            console.log(users[i]);
            if (users[i].password === password) {
                console.log('Log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
            // Return ends up the loop if the conditions matches or not after a try
            return;
        }
    }
    console.log('Could not find an email that matches')
}

login('eno.meta@gmx.fr', 'test123')

function register(user) {
        users.push(user);
}
    

register({
    username: 'try', 
    email: 'try.gmail.com', 
    subscriptionStatus: 'not VIP', 
    discordId: 'try#1234', 
    password: "try123", 
    lessonsCompleted: [0, 1]
    })
console.log(users)


/**
 * DOM (Document Object Model)
 * 
 * The DOM allows you to access and change the styling and content of elements on your webste
 * 
 */

// First way of accessing an element
document.querySelector('#title')

/// Second way (When we have an id)
document.getElementById('title')

//Change HTML .innerHTML  = ''
// += is adding both elements together. It works like an addition
document.querySelector('.title').innerHTML += 'Frontend Simplified'

// Change CSS .style
document.querySelector(".title").style.fontSize = '16px'

/**
 * function changeTitleToRed() {
    console.log('clicked');
    document.querySelector(".title").style.color = 'red'
}
 */


function toggleDarkMode() {
    // classList access to body's class clist which is empty
    // but if we add .toggle() , it's going to toggle with the class dark-theme
    document.querySelector('body').classList.toggle("dark-theme")
}