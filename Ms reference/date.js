// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation
    
// Get the current date

      var today = new Date();

// Fetch the various parts of the date

      var dateString = today.toLocaleString();
      var day = today.getDay();
      var month = today.getMonth();
      var year = today.getFullYear();
      var timeMilliseconds = today.getTime();
      var hour = today.getHours();
      var minute = today.getMinutes();
      var second = today.getSeconds();
      var millisecond = today.getMilliseconds();

// Display the parts

      document.write(
        "Date: " + dateString + "<br />",
        "Day: " + day + "<br />",
        "Month: " + month + "<br />",
        "Year: " + year + "<br />",
        "Time in milliseconds: " + timeMilliseconds + "<br />",
        "Hour: " + hour + "<br />",
        "Minute: " + minute + "<br />",
        "Second: " + second + "<br />",
        "Millisecond: " + millisecond + "<br />");

    
