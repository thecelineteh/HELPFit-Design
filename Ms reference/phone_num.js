
var phone_num;
phone_num=prompt("Please input valid phone number","");

var ok = phone_num.search (/\(\d{3}-\d{3}-\d{3}\)/);


if (ok>=0)
	document.write("Phone in correct format")
else
	document.write("Phone incorrect format")
