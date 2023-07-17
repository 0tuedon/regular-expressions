/* 
A pattern to match the image files in this string, 
that is, files that end in png, "jpg' and "jpeg*
*/

const patternAlternation =  new RegExp(/[a-z-0-9]{1,}\.(jpg|png|jpeg)/,"gi")

const stringForAlternation  = `I copied a lot of files: index.js, react-diagram.jpg, my-resume.pdf, user111-profile.png, 
logo.jpeg, contacts.csv and background.png`

console.log(stringForAlternation.match(patternAlternation))