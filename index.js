// $( document ).ready(function(){
// 	var ref = firebase.database().ref().child("Recipes");

// 	ref.on("child_added", snap => {
// 		alert(snap.val()); 
// 	})  ;
// });

var database = firebase.database().ref();

function writeUserData() {
	var u = document.getElementById("emailq").value
	var p =  document.getElementById("passq").value
	var n = document.getElementById("nameq").value
	firebase.auth().createUserWithEmailAndPassword(u, p).then(function() {
		window.open("macropercent.html", "_self");
	}).catch(function(err) {
  	 // Handle errors
  	 alert("could not make new user");
 	});
}


function signIn() {
	var u = document.getElementById("emailq").value
	var p = document.getElementById("passq").value
	firebase.auth().signInWithEmailAndPassword(u, p).then(function() {
		window.open("macropercent.html", "_self");
	})catch(function(error) {
  	// Handle Errors here.
  		console.log("This error happened?")
  		alert("could not sign in");
	});
}

function signOut() {
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
	}).catch(function(error) {
  // An error happened.
});
}