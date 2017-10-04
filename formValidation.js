
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
      alert("THANK YOU, Your session is successfully created !");
    }
}
