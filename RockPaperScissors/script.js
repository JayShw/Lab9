function game(choice){
	
	let userChoice=choice;
	const compArray=["rock","paper","scissors"];
	let compChoice=compArray[parseInt((Math.random()*3))];
	
	if(userChoice==compChoice){
		msg="draw"
	}
	else if(userChoice=="rock"){
		if(compChoice=="paper"){
			msg="lose";
		}
		else{
			msg="win";
		}
	}
		else if(userChoice=="paper") {
		if(compChoice=="scissors") {
			msg="lose";
		}
		else{
			msg="win";
		}
	}
		else if(userChoice=="scissors") {
		if(compChoice=="rock") {
			msg="lose";
	}
		else{
			msg="win";
		}
	}
	alert(msg);
}
	
var count = 0;
function btn(game){
		count++;
		if (count<3){
			document.getElementById("rock,paper,scissors").disabled=true; 
			alert("Game Over");
		}
	}
	





