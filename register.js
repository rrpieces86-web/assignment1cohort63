const petform = document.querySelector("form")
const petlist = document.getElementById("petlist")




function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;

}
let pet1 = new Pet("link", 11, "dog", "male", "bath");
let pet2 = new Pet("lucky", 3, "cat", "female", "daycare");
let pet3 = new Pet("gerald", 5, "lizard", "male", "groom");
let pets = [pet1,pet2, pet3,];
for(let i=0; i<= pets.length;i++){
    document.getElementById("petcount").innerHTML=`
    <div class="card container border p-5 bg-light">
        <h1 class="card-body">Our pets</h1>
        <p class="card-body">${[i]} </p>
    </div>`
}
let numbers = [11, 3, 5]
let sum = 0
for(let i=0; i< numbers.length;i++){
    sum += numbers.length;
}
const average = sum / numbers.length;
const resultElement = document.getElementById("ageaverage")
resultElement.innerHTML=`
    <div class="card container border p-5 bg-light">
        <h1 class="card-body">Avg Age</h1>
        <p class="card-body"> ${average} </p>
    </div>
    `

document.getElementById("petrow1").innerHTML=`
<tr class="table">
    <td> ${pet1.name} </td>
    <td> ${pet1.age} </td>
    <td> ${pet1.breed} </td>
    <td> ${pet1.gender} </td>
    <td> ${pet1.service} </td>
    <td class="bg-white"><button class="btn btn-danger btn-sm delete-btn" onclick="button()"> delete </button></td>
</tr>
<tr class="table">
    <td> ${pet2.name} </td>
    <td> ${pet2.age} </td>
    <td> ${pet2.breed} </td>
    <td> ${pet2.gender} </td>
    <td> ${pet2.service} </td>
    <td class="bg-white"><button class="btn btn-danger btn-sm delete-btn" onclick="button()"> delete </button></td>
</tr>
<tr class="table">
    <td> ${pet3.name} </td>
    <td> ${pet3.age} </td>
    <td> ${pet3.breed} </td>
    <td> ${pet3.gender} </td>
    <td> ${pet3.service} </td>
    <td class="bg-white"><button class="btn btn-danger btn-sm delete-btn" onclick="button()"> delete </button></td>
</tr>
    `
function button(){
        const deleteButtons = document.querySelectorAll(".delete-btn");
        
        deleteButtons.forEach(button => {
            button.addEventListener("click", function(){
                const rowtodelete = this.closest("tr");
                if (rowtodelete) {
                    rowtodelete.remove();
                }
            })
        })
    }

    
    
function registerpet(event){
    event.preventDefault();
    const name = petform.elements["petname"].value;
    const age = petform.elements["petnumber"].value;
    const breed = petform.elements["petbreed"].value;
    const gender = petform.elements["petgender"].value;
    const service = petform.elements["petservice"].value;

    const newpet = new Pet(name, age, breed, gender, service);
    console.log(newpet)

    const card = createpetcard(newpet);

    petlist.appendChild(card)
    


}

function createpetcard(newpet){
    const card = document.createElement("tr");
    card.className = "m-3";
    card.innerHTML = `
    <tr class="table">
        <td> ${newpet.name}</td>
        <td> ${newpet.age}</td>
        <td> ${newpet.breed}</td>
        <td> ${newpet.gender}</td>
        <td> ${newpet.service}</td>
        <td class="bg-white"><button class="btn btn-danger btn-sm delete-btn"> delete </button></td>
    </tr>`

    //edit function
    

    

    //delete function
    card.querySelector(".delete-btn").addEventListener("click", function (){
        const confirmation = confirm("are you want to delete row");

        if(!confirmation) return;
        card.remove();
    })
    

    return card;
}
