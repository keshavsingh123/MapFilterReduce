

//Map -Create a new array by doing something with each item in an array.
/*function Double(x){
  return(
x*2
  );
}
const newN=numbers.map(Double);
console.log(newN);*/
/*
var newNu=[];
function double(x){
  
newNu.push(x*2);
   
}
numbers.forEach(double);
console.log(newNu);*/

/*const Newno=numbers.map(function (x){
  return x*2;
});
console.log(Newno); */


//Filter - Create a new array by keeping the items that return true.
/*var no=numbers.filter(function(num){
  return num>10;
});
console.log(no);*/

//Reduce - Accumulate a value by doing something to each item in an array.
/*var no=numbers.reduce(function(accumulator,currentnum){
console.log("accumulator=" +accumulator);
console.log("currentnumber=" +currentnum);
return accumulator+currentnum;
});
console.log(no);*/

/*var newno=0;
numbers.forEach(function(num){
newno +=num;
});
console.log(newno);*/
//var numbers = [3, 56, 2, 48, 5];
//Find - find the first item that matches from an array.
/*const no=numbers.find(function(num){
  return num>10;
});
console.log(no);*/ 

//FindIndex - find the index of the first item that matches.
/*const no=numbers.findIndex(function(num){
  return num>10;
});
console.log(no);*/
import emojipedia from "./emojipedia";

const newemoji=emojipedia.map(function(emojientry){
return emojientry.meaning.substring(0,100)
});
console.log(newemoji);
