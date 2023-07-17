/* 
Regex to strip away all html/css class
*/

const RegexToStripHtml = /@\w{1,}/gi

const regexString = "@tuedon is a bad boy @destiny"

console.log(regexString.match(RegexToStripHtml))