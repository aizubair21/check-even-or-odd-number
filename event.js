
/* tab bar*/
function open_calculate(evt, child_calc) {
    var i, tab_content;
    tab_content = document.querySelector(".btn-content");
    for (i = 0; i > 3; i++){
        tab_content[i].style.display="none";
    };
    document.getElementById(child_calc).style.display = "block";
}



/*main function*/

function even_checker_for(first_input, last_input) {
	
	if(first_input == " " ||  last_input == " "){
			alert("one of input value was mised or not correct !");
	}else{
		
			
			document.querySelector(".show_reasult").innerHTML = ""; 
			var index = (first_input % 2) ? index = first_input+1 : index = first_input;
			document.querySelector(".show_reasult"). innerHTML = "even for:<br>";
			for( ; index <= last_input; index +=2 ){
				document.querySelector(".show_reasult").innerHTML += index +" ";
			}	
		}
	
}

function odd_checker_for(first_input, last_input) {
	if (first_input == "" || last_input == ""){
		alert(" one of input value is mised not correct!");
	}else {
			document.querySelector(".show_reasult").innerHTML = "";
			var index = (first_input % 2) ? index = first_input : index = first_input+1;
			document.querySelector(".show_reasult"). innerHTML = "odd for:<br>";
			for( ; index <= last_input; index +=2 ){
				console.log(index);
				document.querySelector(".show_reasult").innerHTML +=  index +" ";

			}
		}
}


function even_checker_while(first_input, last_input){
	if (first_input == " " || last_input == ""){
		alert("one of input value is mised not correct!");
	}else{
			document.querySelector(".show_reasult").innerHTML = "";
			var index = (first_input % 2) ? index = first_input+1 : index = first_input;
			document.querySelector(".show_reasult"). innerHTML = "even while:<br>";
			while(index <= last_input){
				document.querySelector(".show_reasult").innerHTML += index +" ";
				index +=2;
			}
		}	
}

function odd_checker_while(first_input, last_input){
	if (first_input == "" || last_input == ""){
		alert("one of input value is mised not correct!");
	}else{
			document.querySelector(".show_reasult").innerHTML = "";
			var index = (first_input % 2) ? index = first_input : index = first_input+1;
			document.querySelector(".show_reasult"). innerHTML = "odd while:<br>";
			while(index <= last_input){
				document.querySelector(".show_reasult").innerHTML += index +" ";
				index +=2;
			}
		}		
}

function even_checker_recursive(first_input, last_input){
	if (first_input == " " || last_input == ""){
		alert("one of input value is mised not correct!");
	}else{
			document.querySelector(".show_reasult").innerHTML = " ";
			var index = (first_input % 2) ? index = first_input+1 : index = first_input;
			document.querySelector(".show_reasult"). innerHTML = "even do while:<br>";
			do {
				document.querySelector(".show_reasult").innerHTML += index +" ";
				index+=2;
			} while (index <= last_input);
		}

}

function odd_checker_recursive(first_input, last_input){

	if (first_input == " " || last_input == ""){
		alert("one of input value is mised not correct!");
	}else{
			document.querySelector(".show_reasult").innerHTML = " ";
			var index = (first_input % 2) ? index = first_input : index = first_input+1;
			document.querySelector(".show_reasult"). innerHTML = "odd do while:<br>";
			do {
				document.querySelector(".show_reasult").innerHTML += index +" ";
				index+=2;
			} while (index <= last_input);
	
		}
}

