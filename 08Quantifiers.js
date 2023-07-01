// email address test 
const emailValidation = new RegExp(/^[a-z0-1]{3,}@[a-z]{3,}.[a-z]{3,}/,'gi')

const testString = "tuedontuoyo@gmail.com  is a valid email"

console.log(testString.match(emailValidation))

// Asssignment
const datesRegex = new RegExp(/[0-4]{0,2}-[01][0-9]{0,2}-[0-9]{4}/,"gi")
const datesString = "22-02-2022"
console.log(datesString.match(datesRegex))