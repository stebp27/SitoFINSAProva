let b = document.querySelector("button");
b.addEventListener("click", Submit);

function Submit() {

    let name = document.getElementById("name").value;

    if(name == "")
    {
        document.getElementById("NameError").innerHTML = "*Field required";
        document.getElementById("name").className = "InputsError"; 
    }
    else if(hasNumbers(name))
    {
        document.getElementById("NameError").innerHTML = "Name must not have numbers!";
        document.getElementById("name").className = "InputsError";
    }
    else if(name.length > 30 || (name.length < 3 && name.length > 1))
    {
        document.getElementById("NameError").innerHTML = "Name must be between 3 and 30 characters!";
        document.getElementById("name").className = "InputsError";
    }
    else {
    document.getElementById("NameError").innerHTML = "";
    document.getElementById("name").className = "InputsDefault";
    }


    let surname = document.getElementById("surname").value;

    if(surname == "")
    {
        document.getElementById("SurnameError").innerHTML = "*Field required";
        document.getElementById("surname").className = "InputsError";
    }
    else if(hasNumbers(surname))
    {
        document.getElementById("SurnameError").innerHTML = "Surname must not have numbers!";
        document.getElementById("surname").className = "InputsError";
    }
    else if(surname.length > 30 || (surname.length < 3 && surname.length > 1))
    {
        document.getElementById("SurnameError").innerHTML = "Surname must be between 3 and 30 characters!";
        document.getElementById("surname").className = "InputsError";
    }
    else {
    document.getElementById("SurnameError").innerHTML = "";
    document.getElementById("surname").className = "InputsDefault";
    }


    let email = document.getElementById("email").value;

    if(email == "")
    {
        document.getElementById("EmailError").innerHTML = "*Field required";
        document.getElementById("email").className = "InputsError";
    }
    else if(!isMailFormat(email))
    {
        document.getElementById("EmailError").innerHTML = "Email not valid.";
        document.getElementById("email").className = "InputsError";
    }
    else {
    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("email").className = "InputsDefault";
    }

    let phone = document.getElementById("phone").value;

    if(phone == "")
    {
        document.getElementById("PhoneError").innerHTML = "*Field required";
        document.getElementById("phone").className = "InputsError";
    }
    else if(!isPhoneFormat(phone))
    {
        document.getElementById("PhoneError").innerHTML = "Phone format is incorrect!"
        document.getElementById("phone").className = "InputsError";
    }
    else {
    document.getElementById("PhoneError").innerHTML = "";
    document.getElementById("phone").className = "InputsDefault";
    }

    let interests = document.getElementById("Interests").value;

    document.getElementById("InterestsError").innerHTML = interests;

    if(interests == "Default")
    {
        document.getElementById("InterestsError").innerHTML = "*Field Required";
        document.getElementById("Interests").className = "SelectError";
    }
    else{
    document.getElementById("InterestsError").innerHTML = "";
    document.getElementById("phone").className = "SelectDefault";
    }

    let bday = new Date(document.getElementById("bday").value);
    let now = new Date();
    const millisecondsPerYear = 31556952000;

    if(isNaN(bday))
    {
        document.getElementById("BdayError").innerHTML = "*Field required";
        document.getElementById("bday").className = "InputsError";
    }
    else if(now - bday < millisecondsPerYear * 18)
    {
        document.getElementById("BdayError").innerHTML = "You must be at least 18 years old, you're still a baby...";
        document.getElementById("bday").className = "InputsError";
    }
    else {
    document.getElementById("BdayError").innerHTML = "";
    document.getElementById("bday").className = "InputsDefault";
    }
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