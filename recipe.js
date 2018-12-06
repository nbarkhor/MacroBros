// var database = firebase.database().ref();
		  firebase.initializeApp(config);

var database = firebase.database().ref();


$( document ).ready(function() {

	addnewTable();
});

function addnewTable(){
	var re = database.child('CURR')
	console.log("PLEASE")
	re.once('value', function(snap){
		console.log(snap.val().ONE.MP)
		var a = snap.val().TWO.carbs;
        var b= snap.val().TWO.proteins;
        var c= snap.val().TWO.veggies
        var recipedb
        console.log(b);
        if(b == "Chicken" || b == "Salmon" || b == "Pork")
        {
        	console.log("hihi");
			recipedb = database.child('Recipes').child(b).child(a);
        }
        else
        {
        	recipedb = database.child('Recipes').child(b);
        }
        // var recipedb = database.child('Recipes').child(b);
        // console.log(b)
        // console.log(a)
        console.log(recipedb);
        recipedb.once('value', function(snapshot){
        	var content =''
			snapshot.forEach(function(childSnapshot) {
				// var row = table.insertRow(0);
				// var name = row.insertCell(0);
				// var time = row.insertCell(1);
			    var childKey = childSnapshot.key;
			    // var childData = childSnapshot.val();
			    // console.log(childSnapshot.val().Name)
	            var n = childSnapshot.val().Name;
	            console.log(n);
	            var t= childSnapshot.val().Time;
	            var p= childSnapshot.val().Picture
	            var q = childSnapshot.val().Link
	            var m = childSnapshot.val().MP
	            // name.innerHTML = n; 
	            // time.innerHTML = t;
	            content+= `	<tr> <td class="background"> <a href="${q}">
					<img src="img/${p}.jpg" class="pic">
					<p class="recipename">${n}</p> <br/>
					<p class="recipemaker">takes around ${t} <br\><br\> Macro Style: ${m}</p> </a></td></tr> `

			});
			console.log(content)
						$('#trial').append(content);

		});
	});
}