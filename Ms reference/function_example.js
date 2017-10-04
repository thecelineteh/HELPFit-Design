function fun1(my_list) {
	document.write("Array before changing ", my_list, "<br/>");
	
	var list2 = new Array(1, 3, 5);
    my_list = list2;
	
	document.write("Array after changing ", my_list);
}


var list = new Array(2, 4, 6, 8)
fun1(list);
