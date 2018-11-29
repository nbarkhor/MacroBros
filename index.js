// $( document ).ready(function(){
// 	var ref = firebase.database().ref().child("Recipes");

// 	ref.on("child_added", snap => {
// 		alert(snap.val()); 
// 	})  ;
// });

var database = firebase.database().ref();

function writeUserData() {
	var u = document.getElementById("emailq").value
	console.log(u)
	var p =  document.getElementById("passq").value
	var n = document.getElementById("nameq").value
	firebase.auth().createUserWithEmailAndPassword(u, p).catch(function(err) {
  	 // Handle errors
  	 alert("could not make new user");
 	});
	window.open("https://nbarkhor.github.io/cs188Project/macropercent.html", "_self");
}