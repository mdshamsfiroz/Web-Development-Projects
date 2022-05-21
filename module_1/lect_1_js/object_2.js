// it is non primitive data type that is used to represent anything
//collection of key:value pair,
//key: stri ng or number & value ; any valid js datatype
// empty object creation

// let obj ={
    // ;
// }

let cap={
    firstName:"Steve",
    lastName:"Rogers",
    friends: ["Tony","Peter","bruce"],
    address: {
        city: "manhattan",
        state: "NY"
    },
    age:34,
    isAvenger: true,
}
//print
console.log(cap);

//print
console.log(cap);
//get a key"s value
console.log(cap.firstName);
console.log(cap.age);
console.log(cap.address.city);
console.log(cap.friends[1]);

// get
let varName="firstName";
console.log(cap[varName]);
varName="last Name";
console.log(cap[varName]);
console.log(cap["last Name"]);

//delete and update and add
delete cap.friends;
cap.movies=["Winter soldier","Firt Avenger","civilWar"];
cap[key]="DCU";
// update
cap.isAvenger = false;
console.log(cap);
// if the key not present yoou will get undefined;
console.log(cap.abc);
//traversing

// . exact matching
 