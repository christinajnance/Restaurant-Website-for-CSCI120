var phoneNum=document.getElementById("phone");
phoneNum.addEventListener("blur", goodLuck);

function goodLuck() {
	var inputField = document.getElementById("phone");
	var phone = inputField.value;
	if(phone==null || phone==""){
		alert("Error: You didn't enter a name");	
	}
	else{
		alert("Good Luck!");
	}
}

var userName=document.getElementById("uName");
userName.addEventListener("blur", questUser);

function questUser() {
	var inputField = document.getElementById("uName");
	var theName = inputField.value;
	var theGreeting = "Have we met before " + theName + "?";
	var paragraphField =document.getElementById("output");
	paragraphField.innerHTML=theGreeting;
}

var favoriteDish=document.getElementById("fDish");
favoriteDish.addEventListener("click", changeColor);
function changeColor(){
	var oldColor = fDish.innerHTML;
	fDish.style.backgroundColor="rgb(239, 233, 64)";
	var newColor = document.getElementById("favDish");
	newColor.style.backgroundColor="rgb(0,255,255)";
	newColor.innerHTML="Good Choice";
}

var rRating=document.getElementById("rating");
rRating.addEventListener("click", promptUser);

function promptUser() {
	var uRating = rRating.value;
	if (uRating<="4"){
		var theMessage = "Are you sure?";
		var paragraphField =document.getElementById("output");
		paragraphField.innerHTML=theMessage;
	}
	if(uRating >="6") {
		var theMessage = "Good choice.";
		var paragraphField =document.getElementById("output");
		paragraphField.innerHTML=theMessage;
	}
}

var theReset=document.getElementById("reset");
theReset.addEventListener("click", uReset);
function uReset () {
	alert("Get it Right this time!");
	var bColor=document.getElementById("page");
	bColor.style.backgroundColor="rgb(244, 244, 66)";
}

var theSubmit=document.getElementById("submit");
theSubmit.addEventListener("click", uSubmit);

function uSubmit () {
	var inputField = document.getElementById("phone");
	var phone = inputField.value;
	if(phone==null || phone==""){
		var paragraphField =document.getElementById("sub");
		paragraphField.innerHTML="Tricked you-phone number is required";
		paragraphField.style.backgroundColor="rgb(164, 168, 173)";
		paragraphField.style.color="red";
		theSubmit.addEventListener("submit", 
		function(e){e.preventDefault()
		});
	}
	else {
		var paragraphField =document.getElementById("sub");
		paragraphField.innerHTML="Thanks. I'll call you tomorrow";
		paragraphField.style.backgroundColor="rgb(232, 197, 22)";
		paragraphField.style.color="white";
	}
	
}
