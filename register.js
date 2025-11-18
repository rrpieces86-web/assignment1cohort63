const petform = document.querySelector("form")
const petlist = document.getElementById("petlist")
let salon = {
    hours: 8 + "to" + 8,
    location: "8th street",
    years: 27,
    services: "everything"
}

function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;

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
    petform.reset()


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
        <td><button class="btn btn-danger btn-sm delete-btn"> delete </button></td>
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
