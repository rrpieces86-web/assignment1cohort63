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
    const card = document.createElement("div");
    card.className = "m-3";
    card.innerHTML = `
    <div class="card">

        <div class="card-body>

        <h5 class="card-title"> ${newpet.name} </h5>
        <h6 class="card-subtitle"> ${newpet.age} </h6>
        <h6 class="card-text"> ${newpet.breed} </h6>
        <h6 class="card-text"> ${newpet.gender} </h6>
        <h6 class="card-text"> ${newpet.service} </h6>
        </div>
        
    
    </div>`

    return card;
}
