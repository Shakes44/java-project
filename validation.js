function validateForm(){
    for (var i=0;i<myform.elements.length; i++){
        if (myform.elements[i].className=='req' && myform.elements[i].value.length ==0){
            alert('Please, fill all required fields');
            return false
        }
    }

    var email = document.getElementById('email').value;
    var atpos = email.indexOf('@');
    var dotpos = email.lastIndexOf('.');
    if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length){
        alert('Please, type in a valid email address');
            return false;
    }
}