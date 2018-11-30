// $( document ).ready(function(){
// 	var ref = firebase.database().ref().child("Recipes");

// 	ref.on("child_added", snap => {
// 		alert(snap.val()); 
// 	})  ;
// });

var database = firebase.database().ref();


function addnewTable(protein, carb, veg){
	var recipedb = database.child('Recipes').child(protein).child(carb);

	console.log("T1");
		var table = document.getElementById('trial');
		var content = ``;
		recipedb.once('value', function(snapshot){
			snapshot.forEach(function(childSnapshot) {
				// var row = table.insertRow(0);
				// var name = row.insertCell(0);
				// var time = row.insertCell(1);
			    var childKey = childSnapshot.key;
			    // var childData = childSnapshot.val();
			    // console.log(childSnapshot.val().Name)
	            var n = childSnapshot.val().Name;
	            var t= childSnapshot.val().Time;
	            var p= childSnapshot.val().Picture
	            var q = childSnapshot.val().Link
	            // name.innerHTML = n; 
	            // time.innerHTML = t;
	            content+= `	<tr> <td class="background"> <a href="${q}">
					<img src="img/${p}.jpg" class="pic">
					<p class="recipename">${n}</p>
					<p class="recipetime">takes around ${t}</p> </a></td></tr>`
			});
			console.log(content)
			
		$('#trial').append(content);
		});

		console.log("t3")

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

function saveIngredients() {
	p = document.getElementById("pickprotein");
	protein = p.options[p.selectedIndex].text;
	console.log(protein);
	c = document.getElementById("pickcarb");
	carb = c.options[c.selectedIndex].text;
	v = document.getElementById("pickveg");
	veg = v.options[v.selectedIndex].text;
	window.open("recipes.html", "_self");
firebase.database().ref('CURR').set({
    carbs: carb,
    proteins: protein,
    veggies : veg
  });	// addnewTable(protein, carb, veg);
}