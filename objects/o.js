/*
            ***** Diff. B/W Array and Object *****

array :- all the laptops of MSI.... is array

object :- the laptop of shahid which is from kotlu brahmna ... is object

*/

// objects

// 1) Blank obj 

let shahid ={};

// 2) filled Object

let shahiD = {
    age:24,
    Namw:"shahid",
    email: "shahid@123gmail.com",
    linkledin: "shahid chaudhary",
    // hello: function(){}  :- this is a method in objects
}
shahiD.Namw = "chaudhary"

console.log(shahiD);




// if we want to write a full detail on a particular person is called object...

shahid = "chaudhary";
// this is a global varable so that's alll

// e.g 

let school = {
    name: 'Vivekananda School',
    displayInfo: function () {
        console.log(`${school.name.split(' ')[0]}`);
    }
}
//  this is all about objects now i have to learn more aout object form the docunetations of javascript
