/**
 * Created by Anil on 6/29/2017.
 */

function sto() {

localStorage.setItem("username",username.value);
localStorage.setItem("password",password.value);
alert("signed up successfully");
window.location.href="login.html"
}
function Login() {
    var username2= localStorage.getItem("username");
    var password2=localStorage.getItem("password");

    var usern=document.getElementById('uname');
    var Pg=document.getElementById('pw');

    if( usern.value !== username2 || Pg.value !== password2 ){

        alert("invalid credentials, Please try again");

    }else{

        alert("you Have logged in Successfully");
        window.location.href="homepage.html";
        alert("welcome" + username2);

    }
    
}
