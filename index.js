$( document ).ready(function(){
	var ref = firebase.database().ref().child("Recipes");

	ref.on("child_added", snap => {
		alert(snap.val()); 
	})  ;
});