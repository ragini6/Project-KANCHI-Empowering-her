var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "kanchi" && password == "iwilldoit"){
alert ("Login successfully");
window.location="learning"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
  