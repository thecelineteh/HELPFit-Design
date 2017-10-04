// date.js

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; // Since first value is 0, add 1 to reflect January as first month
var yyyy = today.getFullYear();
  if(dd<10){
        dd='0'+dd
    }
  if(mm<10){
      mm='0'+mm
  }

today = yyyy + '-' + mm + '-' + dd
document.getElementById("sessionDate").setAttribute("min", today);
