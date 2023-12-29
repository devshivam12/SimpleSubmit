var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var textError = document.getElementById('text-error');
var submitError = document.getElementById('sub-error');


function validname(){

    var name = document.getElementById('contactname').value;

    if(name.length == 0){
        nameError.innerHTML = "Full name"
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "full name is required";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}
function validphone(){
    var phone = document.getElementById('contactphone').value;

    if(phone.length !== 10 ){
        phoneError.innerHTML = "Please check your phone no"
        return false;
    }

    if(phone.length == 0){
        phoneError.innerHTML = "Enter your phone no"
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
}

function validemail(){

    var email = document.getElementById('contactemail').value;

    if(email.length == 0){
        emailError.innerHTML = 'Please enter your email'
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = "email Invalid"
        return false;
    }

    emailError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validtext(){
    var text = document.getElementById('contacttext').value;
    var required = 30;
    var left = required - text.length;

    if(left > 0){
        textError.innerHTML = left + "More Character required";
        return false;
    }

    textError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
    
}

