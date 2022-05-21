let path = require("path");
let fs = require("fs");
// is folder created or not
let input = process.argv.slice(2);
// input handle cases
let moduleName = input[0];
let numberOfFolder = input[1];

let modulePath = path.join(process.cwd(),"Web dev", moduleName);
//
if(fs.existsSync(modulePath)){
   console.log(moduleName, "already exists");
} else {
    fs.mkdirSync(modulePath);
}

//files create
for(let i =1; i<= numberOfFolder;  i++) {
    let lectureName = "Lecture-" + i;
    // path->string
    if(lecturePath =path.join(modulePath,lectureName)) {
     console.log(lectureName, "already Exists");
    }  else {
        // actualcreation directory
    fs.mkdirSync(lecturePath);
    }
}
