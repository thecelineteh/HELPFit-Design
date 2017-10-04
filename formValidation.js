// formValidation.js

function validateForm() {
    var title = document.forms["myForm"]["title"].value;
    var date = document.forms["myForm"]["sessionDate"].value;
    var time = document.forms["myForm"]["sessionTime"].value;
    var fee = document.forms["myForm"]["fee"].value;
    if (title === "") {
        alert("Title cannot be blank !");
        return false;
    }
    else if (date === ""){
      alert("Date cannot be blank ! ");
      return false;
    }
    else if (time === ""){
      alert("Time cannot be blank ! ");
      return false;
    }
    else if (fee === ""){
      alert("Fee cannot be blank ! ");
      return false;
    }
    else{
      alert("Thank you, your session is successfully created !");
    }
}


function updateForm() {
    var date = document.forms["myForm"]["sessionDate"].value;
    var time = document.forms["myForm"]["sessionTime"].value;
    var fee = document.forms["myForm"]["sessionFee"].value;
    var status = document.forms["myForm"]["sessionStatus"].value;
    var classType = document.forms["myForm"]["sessionType"].value;
    if (date === ""){
      alert("Date cannot be blank.");
      return false;
    }
    else if (time === ""){
      alert("Time cannot be blank.");
      return false;
    }
    else if (fee === ""){
      alert("Fee cannot be blank.");
      return false;
    }
    else if (status === "Choose status"){
      alert("Status must be either Cancelled, Completed, or Available.");
      return false;
    }
    else if (classType === "Choose class type"){
      alert("Class type must be either Sport, Dance, or MMA.");
      return false;
    }
    else{
      alert("Session updated successfully !");
    }
}
