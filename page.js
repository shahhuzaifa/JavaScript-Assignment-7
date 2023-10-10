function print(){
    alert ("welcome to website ");
}

function scrolltotop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth' 

    });
}










function playSound() {
    var audio = document.getElementById('myAudio');
    audio.play();

}


function clickbtn(){
    alert("you hover this button !!");
}



function openNewWindow() {
   
    window.open();
  }

function names(){
    var yourname = document.getElementById("yourname") 
    console.log(yourname.value);
}

function checkbox(){
    var checkbox = document.getElementById(checkbox)
    console.log(checkbox.value);


}
function validform(){
    var emailvalue = document.getElementById("email").value
    var passwordvalue = document.getElementById("password").value

    if (emailValue === "") {
        document.getElementById("emailError").innerText = "Email address is required.";
        return;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (passwordValue === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        return;
    } else {
        document.getElementById("passwordError").innerText = "";
    }
    alert("Form submitted successfully!");

}






