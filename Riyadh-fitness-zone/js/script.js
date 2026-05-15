var dateElement = document.getElementById("date");

var today = new Date();

dateElement.textContent = "Today is: " + today.toDateString();

function showMessage(){

    document.getElementById("message").textContent = "Thank you for signing up!";

}