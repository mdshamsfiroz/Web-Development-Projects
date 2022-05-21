function decimaltoBinary(binaryNumber){
let power =1;
let bin =0;
while(binaryNumber!=0){
    let fv = binaryNumber%2;
    bin = bin +fv*power;
    power = power *10;
    binaryNumber=Math.floor(binaryNumber/2);
}
 return bin;

} 
let binaryNumber = decimaltoBinary(13);
console.log(binaryNumber);