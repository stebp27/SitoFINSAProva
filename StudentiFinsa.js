let b = document.querySelector("button");
b.addEventListener("click", Submit);



function Submit() {

    let name = document.getElementById("name").value;

    if(name == "")
    {
        document.getElementById("NameError").innerHTML = "*Field required";
    }
    else if(hasNumbers(name))
    {
        document.getElementById("NameError").innerHTML = "Name must not have numbers!";
    }
    else if(name.length > 30 || (name.length < 3 && name.length > 1)){
    document.getElementById("NameError").innerHTML = "Name must be between 3 and 30 characters!";
    }
    else document.getElementById("NameError").innerHTML = "";


    let surname = document.getElementById("surname").value;

    if(surname == "")
    {
        document.getElementById("SurnameError").innerHTML = "*Field required";
    }
    else if(hasNumbers(surname))
    {
        document.getElementById("SurnameError").innerHTML = "Surname must not have numbers!";
    }
    else if(surname.length > 30 || (surname.length < 3 && surname.length > 1)){
        document.getElementById("SurnameError").innerHTML = "Surname must be between 3 and 30 characters!";
    }
    else document.getElementById("SurnameError").innerHTML = "";


    let email = document.getElementById("email").value;

    if(email == "")
    {
        document.getElementById("EmailError").innerHTML = "*Field required";
    }
    else if(!isMailFormat(email))
    {
        document.getElementById("EmailError").innerHTML = "Email not valid.";
    }
    else document.getElementById("EmailError").innerHTML = "";


    let phone = document.getElementById("phone").value;

    if(phone == "")
    {
        document.getElementById("PhoneError").innerHTML = "*Field required";
    }
    else if(!isPhoneFormat(phone))
    {
        document.getElementById("PhoneError").innerHTML = "Phone must be in all numeric format or in (***)-******** format!"
    }
    else document.getElementById("PhoneError").innerHTML = "";

    
    let bday = new Date(document.getElementById("bday").value);
    let now = new Date();
    let millisecondsPerYear = 31556952000;
    
    if(now - bday < millisecondsPerYear * 18)
    {
        document.getElementById("BdayError").innerHTML = "You must be at least 18 years old, you're still a baby..."
    }
    else document.getElementById("BdayError").innerHTML = "";

    

}


function hasNumbers(t)
{
    return /\d/.test(t);
}

function isPhoneFormat(t)
{
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(t);
}

function isMailFormat(t)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(t);
}