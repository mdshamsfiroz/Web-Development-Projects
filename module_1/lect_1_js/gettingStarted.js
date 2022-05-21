// print no main nothing
// top to bottom left to right
console.log("Hello World");

// variable declare way
//we just tell that a is variable
let a;
// number
a=10;//global variable
a=10.1;
// strings
// no char only string and no diff b/w single quotes and double
a = 'Hello';
a = "double quoted hello";
//booleans
a = true;
//null;
a = null; 
console.log("value of a 24",a);
console.log(5/2); //=>2.5

// undefined,null,number,strings,boolean-> Primitive Types
// 1. print from 1 to 10;
// 2. print only even number to 10;

// java -> statically typed lang
// java tells us both the name of the variable and the type of the variable
//int a;

//How to run file
// 1. right click on the file
// 2. open in integrated terminal
//3. interminal type : node<filename>.js

for(let i=1;i<=10;i++){
    console.log(i);
}
for(let i=1;i<=10;i++){
    if(i%2==0){
    console.log("Number",i);
    }
}

