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
        alert("data saved");
        $("#servicename").css("border", "solid 1px lightgray");
    }
    this.reset();

    if(!servicedescription){
        alert("all fields required");
        $("#servicedescription").css("border", "solid 2px red");
    } else {
        alert("data saved");
        $("#servicedescription").css("border", "solid 1px lightgray");
    }
    this.reset()

    if(!serviceprice){
        alert("all fields required");
        $("#serviceprice").css("border", "solid 2px red");
    } else {
        alert("data saved");
        $("#serviceprice").css("border", "solid 1px lightgray");
    }
    this.reset();
});