const RegrexCapture =  new RegExp(/(\w+\.)+com/gi)

const captureString = "My website is www.deecode.com or www.0tuedon.com"

console.log(captureString.match(RegrexCapture))