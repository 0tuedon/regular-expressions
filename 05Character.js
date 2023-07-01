const characterSet = new RegExp(/[ae]pple/gi)

const regexGetter = "Apple is not pronounce epple"

console.log(regexGetter.match(characterSet)) 

// you can also specify a range
const charactersetforRange = /[a-z]pple/gi

const regexGetterRange = "Apple for apple b for bpple c for cpple"

console.log(regexGetterRange.match(charactersetforRange)) 

const charactersetforHalfRange = /[a-b]pple/gi

const regexGetterHalfRange = "Apple for apple b for bpple c for cpple"

console.log(regexGetterHalfRange.match(charactersetforHalfRange)) 
//  [a-by-z]