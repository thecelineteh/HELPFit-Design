
// The original list of names
var name_list = new Array("Zimbo", "Roberto", "Al", "Betty", "Kasper","Michael");

var new_name1 = name_list.join(":");
console.log(name_list.join(":"));
//var new_name2 = name_list.reverse();
//var new_name3 = name_list.sort();
var new_name4 = name_list.concat("Mary","Mindy");
var new_name5 = name_list.slice(2);


document.write("Original array ", name_list, "<br/>");
document.write("Length of array: ", name_list.length, "<br/>");
document.write("Identify certain element through index: ", name_list[3], "<br/");

// Display the new array
document.write("Concatenate array ", new_name1, "<br/>");
//document.write("Display array in reverse order ", new_name2, "<br/>");
//document.write("Display array in ascending order ", new_name3, "<br/>");
document.write("Display array with additional elements ", new_name4,"<br/>");

document.write("Display array in certain range " ,new_name5, "<br/> <br/>");

//Array method
var new_name6 = name_list.push("Blitz","h");
document.write("Output for push method: " + new_name6 + "<br/>");
document.write("Array for push method: " + name_list + "<br/><br/>");

var new_name7 = name_list.pop();
document.write("Output for pop method: " + new_name7 + "<br/>");
document.write("Array for pop method: " + name_list + "<br/><br/>");

var new_name8 = name_list.unshift("Ali");
document.write("Output for unshift method: " + new_name8 + "<br/>");
document.write("Array for unshift method " + name_list + "<br/><br/>");

var new_name9 = name_list.shift();
document.write("Output for shift method: " + new_name9 + "<br/>");
document.write("Array for shift method " + name_list + "<br/>");
