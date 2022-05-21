//"C:\Users\firoz\Desktop\Web dev\Extra JS\function.js"; --> absolute path
//  ../../Module0/lecture3.2/boXSizing -> relative path
//  "to be remove folder" -->(file Name)
//  when you are in the same folder  
// path module 
let path =require("path");

// console.log(__dirname); // current folder in which we have our js file absolute path
// console.log(__filename); // current file ka path
// // abhi ye script app me convert hone k baad ki path pe chal rahi hai
console.log(process.cwd());

// let folderName="C:";
let nextFolderName="Movies";
let childFolder="bollywood";
let actualFile= "Rang De Basanti.mp4";
// path join
let address = path.join(folderName,nextFolderName,childFolder,actualFile);
console.log("-------------------");
console.log(address);
//extension
path.extname();
