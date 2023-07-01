/* 
/s whitespace characters all types of spacing
/S non whitespace characters everything except whitespace
/d all digits characters 
/D non digits characters
\w word characters (includes word numbers underscore)
*/

/* 
 A better regex for email with META TAGS 
*/
const regexEmailMeta = new RegExp(/^\w{3,}@\w{3,}\.\w{2,}/,"gi")
const testWithString = "tuedontuoyo@gmail.com"

console.log(testWithString.match(regexEmailMeta))

// assignments 
const regexDollars = new RegExp(/\d{1,4}\sdollars/,"gis")
const testWithDollars = `
Chair for 500 dollars
Cups for 20 dollars
Laptops for 3500 dollars
`
console.log(testWithDollars.match(regexDollars))