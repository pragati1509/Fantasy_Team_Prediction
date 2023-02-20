function isValidEmail(email){
    var regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(regex))
        return true;

    return false;
}

function isValidName(name){
   var regex = /^[A-Za-z ]+$/;
   if(name.match(regex))
     return true;

   return false;
}

function isValidPassword(password){
   var regex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
   if(password.match(regex))
     return true;

   return false;
}

const valid = {
    'validateEmail' : isValidEmail,
    'validateName' : isValidName,
    'validatePassword' : isValidPassword
}

export default valid;