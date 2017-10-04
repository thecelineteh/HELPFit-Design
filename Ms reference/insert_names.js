

// The original list of names

var name_list = new Array("Al", "Betty", "Kasper","Michael", "Roberto", "Zimbo");
var new_name, index;

// Loop to get a new name and insert it
while (new_name = prompt("Please type a new name", ""))
	  {
      name_list.push(new_name);

// Display the new array
      document.write("<p><b>The new name list is:</b> ","<br />");
      for (index = 0; index < name_list.length; index++)
		      document.write(name_list[index], "<br />");
      document.write("</p>");
    } //** end of the outer while loop
