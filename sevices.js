$("#servicesform").submit(function(event){
    event.preventDefault()
    

    //get the value using jquery

    const servicename = $("#servicename").val().trim();
    const servicedescription = $("#servicedescription").val().trim();
    const serviceprice = $("#serviceprice").val();

    if(!servicename){
        alert("all fields required");
        $("#servicename").css("border", "solid 2px red");
    } else {
        localStorage.setItem("name", servicename)
        $("#servicename").css("border", "solid 1px lightgray");
    }
    this.reset();

    if(!servicedescription){
        alert("all fields required");
        $("#servicedescription").css("border", "solid 2px red");
    } else {
        localStorage.setItem("description", servicedescription)
        $("#servicedescription").css("border", "solid 1px lightgray");
    }
    this.reset()

    if(!serviceprice){
        alert("all fields required");
        $("#serviceprice").css("border", "solid 2px red");
    } else {
        localStorage.setItem("price", serviceprice)
        $("#serviceprice").css("border", "solid 1px lightgray");
    }
    alert("data saved")
    this.reset();
});

$("#changemodebutton").click(function (){
    //apply or remove the dark mode class//
    $("body").toggleClass("dark-mode");
});


