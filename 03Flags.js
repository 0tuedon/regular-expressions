
const code  =  /code/g

// global flag
const RegrexSearch = "The code is great code, but cod code"
// returns everything that mathces it
console.log(RegrexSearch.match(code))

const great  =  /Great/i
// case-insensitive flag
const RegrexCase = "The code is great but not Great"
console.log(RegrexCase.match(great))

// newline charcter
const hello  =  /not.great/i
// case-insensitive flag
const RegrexNewLine = `The code is great but not 
Great`
console.log(RegrexCase.match(hello))
// . wild card


// multiline character starting
const Aisha  =  /^Aisha/gm
// case-insensitive flag
const RegrexMultiLine =
`Aisha likes to code
Aisha likes to play volley
`
console.log(RegrexMultiLine.match(Aisha))
// . wild card

// multiline character ending
const AishaEnding  =  /Somto$/gmi
// case-insensitive flag
const RegrexMultiLineEnding =
`He loves Somto
He misses Somto
`
console.log(RegrexMultiLineEnding.match(AishaEnding))
// . wild card