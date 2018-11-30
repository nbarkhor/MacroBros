// $( document ).ready(function(){
// 	var ref = firebase.database().ref().child("Recipes");

// 	ref.on("child_added", snap => {
// 		alert(snap.val()); 
// 	})  ;
// });

var database = firebase.database().ref();

var recipedb = firebase.database().ref().child('Recipes').child('Chicken').child('Bread');

function addnewTable(){
	console.log("T1");
		var table = document.getElementById('trial');
		var content = ``;
		recipedb.once('value', function(snapshot){
			snapshot.forEach(function(childSnapshot) {
			   
			    var childKey = childSnapshot.key;
			    // var childData = childSnapshot.val();
			    // console.log(childSnapshot.val().Name)
	            var name = childSnapshot.val().Name;
	            var time= childSnapshot.val().Time;
	            
	            content += `<tr>`;
	            content += `<td>  ${name}  </td><td> + ${time}</td></tr>`; //column1
	            // content += '<td>' + time + '</td>';//column2
	            // content += '</tr>';

			});
			// console.log(content)
			// table.prepend(content);

		    // if(snapshot.exists()){
		    //     var content = '';
		    //     console.log("T2")
		    //     snapshot.forEach(function(data){
		    //         var name = data.val().Name;
		    //         var time= data.val().Time;
		    //         content += '<tr>';
		    //         content += '<td>' + name + '</td>'; //column1
		    //         content += '<td>' + time + '</td>';//column2
		    //         content += '</tr>';
		    //     });


		    //     $('#trial').append(content);
		    // }
		    // else{
		    // 	console.log("T21")

		    // }
		});	        
		   		console.log("t3")

		$("#trial").html(content);

}



function loadRecipe(){

}


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
	}).catch(function(error) {
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