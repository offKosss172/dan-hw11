iFirst = document.getElementById('firstImg')
iSecond = document.getElementById('secondImg');
inputFirst = document.getElementById("inputFirst");
inputSecond = document.getElementById("inputSecond");
btn = document.querySelector('.btn')


iFirst.onclick = function() {
 if(firstImg.classList.contains('fa-eye')){
    firstImg.classList.remove("fa-eye");
	firstImg.classList.add("fa-eye-slash");
    inputFirst.type = "text"; }

else{
    firstImg.classList.remove("fa-eye-slash");
    firstImg.classList.add("fa-eye");
    inputFirst.type = "password";}
}

 iSecond.onclick = function() {
    if(iSecond.classList.contains('fa-eye')){
        iSecond.classList.remove("fa-eye");
        iSecond.classList.add("fa-eye-slash");
        inputSecond.type = "text"; }
   
       else{
        iSecond.classList.remove("fa-eye-slash");
        iSecond.classList.add("fa-eye");
        inputSecond.type = "password";}
   
    }
btn.onclick = function(){
    if(inputFirst.value !== "" && inputFirst.value === inputSecond.value ){
    alert('You are welcome')
    }
    else if(inputFirst.value === "")
    {let emptyPasword = document.createElement("span");
    emptyPasword.className = "error-password";
    inputSecond.parentNode.appendChild(emptyPasword);
    emptyPasword.innerHTML = "ВВЕДІТЬ БУДЬЛАСКА ПАРОЛЬ]";

    } else {
        let errorPasword = document.createElement("span");
		errorPasword.className = "error-password";
        inputSecond.parentNode.appendChild(errorPasword);
        errorPasword.innerHTML = "Потрібно ввести однакові значення";

}
}