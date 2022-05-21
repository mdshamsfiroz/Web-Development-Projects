// user defined module so we add ./
let moduleObject = require("./lib");

console.log("I am client");
// function call
moduleObject.fn();
//variable
console.log(clientObj.varName);