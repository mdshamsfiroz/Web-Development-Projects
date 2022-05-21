//  // file system

// //  folders and files deal

// let fs = require("fs");
// // console.log("Before");
// // file -> read,write,create,delete,append,copy
// //create --> crud
// //read
// //update
// // //delete
// // let content = fs.readFileSync("readme.txt","utf8");
// // //creation
// // fs.writeFileSync("newFile.txt","");
// // //write  -> create a file write the content into it /
// // // if file already exist -> rewrite

    
// // // fs.writeFileSync("newFile.txt","I have done something");
// // // if file already exist -> replace
// // fs.writeFileSync("newFile.txt","I have done something more");
// // //append -> in file //similar to concatenate
// // fs.appendFileSync("newfile.txt"," I have added some content later")
// // // delete or remove that file
// // fs.unlinkSync("readme.txt");

// // // ***********************Directory****************************************
// // console.log(content);
// // console.log("After");
// // create
// fs.mkdirSync("newFolder");
// // delete
// fs.rmdirSync("to be remove"); // folder bnna lena phle
// // files and folder -> get
// let content = fs.readdirSync("C:\\Users\\firoz\\Desktop\\Web dev\\Extra JS\\function.js")  // js vs biles Gates

// console.log(content);

// <---------------New Way to view File------------->
let content =fs.readdirSync
("../L2_Objects_arrays");
console.log(content);
