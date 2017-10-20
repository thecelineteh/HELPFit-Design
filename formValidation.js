// formValidation.js

function validateForm() {
    var title = document.forms["myForm"]["title"].value;
    var date = document.forms["myForm"]["sessionDate"].value;
    var time = document.forms["myForm"]["sessionTime"].value;
    var fee = document.forms["myForm"]["sessionFee"].value;
    if (title === "") {
        alert("Title cannot be blank.");
        document.forms["myForm"]["title"].focus();
        return false;
    }
    else if (date === ""){
      alert("Date cannot be blank.");
      document.forms["myForm"]["sessionDate"].focus();
      return false;
    }
    else if (time === ""){
      alert("Time cannot be blank.");
      document.forms["myForm"]["sessionTime"].focus();
      return false;
    }
    else if (fee === ""){
      alert("Fee cannot be blank.");
      document.forms["myForm"]["sessionFee"].focus();
      return false;
    }
    else{
      alert("Thank you, your session is successfully created !");
    }
}


function updateForm() {
    var date = document.forms["updateForm"]["sessionDate"].value;
    var time = document.forms["updateForm"]["sessionTime"].value;
    var fee = document.forms["updateForm"]["sessionFee"].value;
    var status = document.forms["updateForm"]["sessionStatus"].value;
    var classType = document.forms["updateForm"]["sessionType"].value;
    if (date === ""){
      alert("Date cannot be blank.");
      document.forms["updateForm"]["sessionDate"].focus();
      return false;
    }
    else if (time === ""){
      alert("Time cannot be blank.");
      document.forms["updateForm"]["sessionTime"].focus();
      return false;
    }
    else if (fee === ""){
      alert("Fee cannot be blank.");
      document.forms["updateForm"]["sessionFee"].focus();
      return false;
    }
    else if (status === "Choose status"){
      alert("Status must be either Cancelled, Completed, or Available.");
      document.forms["updateForm"]["sessionStatus"].focus();
      return false;
    }
    else if (classType === "Choose class type"){
      alert("Class type must be either Sport, Dance, or MMA.");
      document.forms["updateForm"]["sessionType"].focus();
      return false;
    }
    else{
      alert("Session updated successfully !");
    }
}

function registerAccount() {
  var pwd = document.forms["registerMember"]["inputPswd"].value;
  var pwd2 = document.forms["registerMember"]["confirmPswd"].value;
  if (pwd != pwd2){
    alert("Your two password entries are not the same.");
    document.forms["registerMember"]["confirmPswd"].focus();
    document.forms["registerMember"]["confirmPswd"].select();
    return false
  }
}
