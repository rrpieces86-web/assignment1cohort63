let pet1 = {
    name: "link",
    age: 11,
    gender: "Male", 
    Breed: "Dog", 
    service: "walking",
};

let pet2 = {
    name: "lucky",
    age: 5,
    gender: "male",
    breed: "cat",
    service: "baby-sitting",
};

let pet3 = {
    name: "roger",
    age: 3,
    gender: "female",
    breed: "ferret",
    service: "cleaning",
};
let petlist = [pet1, pet2, pet3];
console.log(petlist)
function count(petlist){}
document.getElementById("count").innerHTML+=(petlist.length)




for(let i=0;i< petlist.length;i++)
document.write(petlist[i].name);