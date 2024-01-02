let a = [1,2,3,4,5,6];

// if we want to copy the value of reference datatypes,then we use speraed operator

let b =[...a];
b.pop();
console.log(b);
console.log(a);

let c ={
    Name:"shahid",
}
let Ccopy = {...c};
Ccopy.Name="chaudhary";

console.log(Ccopy);
console.log(c);