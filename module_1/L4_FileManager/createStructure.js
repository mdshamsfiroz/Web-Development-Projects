let path = require("path");
let fs = require("fs");
let modules = ["Javascript","Browser","React","Backend","Git"];
// path build
let webDevDirPath = path.join(process.cwd(), "Web Dev");
// process.cwd-> in which folder you are executing your file
// does this path exists

if(fs.existsSync(webDevDirPath)) {
    // i don't need to create it
    console.log("Web dev folder already exists");
} else {
    fs.mkdirSync(webDevDirPath);
}
//create all the modules inside your web dev directory
for (let i=0;i<modules.length;i++){
let modulePath=path.join(webDevDirPath, modules[i]);
if(fs.existsSync(modulePath)) {
    console.log(modules[i],"already exists");
} else {
     fs.mkdirSync(modulePath);
     //file create
     let filePath = path.join(modulePath, "readme.md");
     if(fs.existsSync(filePath)){
         fs.writeFileSync(filePath,"");
        }
   }
}
