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
	var p=  document.getElementById("passq").value
	var n= document.getElementById("nameq").value
	database.child("Users").child(n).child("Email").set(u)
	database.child("Users").child(n).child("Name").set(n)
	database.child("Users").child(n).child("Pass").set(p)
	window.open("https://nbarkhor.github.io/cs188Project/macropercent.html", "_self");

  // firebase.database().ref('users/').set({
  //   username: document.getElementById("nameq").text,
  //   email: document.getElementById("emailq").text,
  //   pass: document.getElementById("passq").text
  //   // profile_picture : imageUrl
  // });
}