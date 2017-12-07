// login

var provider = new firebase.auth.GoogleAuthProvider();

$("#login").click(function(){//observador

	firebase.auth().
	signInWithPopup(provider).
	then(function(result) {

		console.log(result.user);
		guardarDatos(result.user);
		$("#login").hide();
		$("#root").append("<img src='"+result.user.photoURL+"' />");

	});

});

// Nuevos usuarios
function guardarDatos(user){

	var usuario = {
		uid: user.uid,
		nombre: user.displayName,
		email: user.email,
		foto: user.photoURL
	}

	firebase.database().ref("Usuario/" + user.uid).set(usuario);

}
// Read from bdd

firebase.database().ref("Usuario").on("child_added", function(s){

	var user= s.val();	
	$("#root").append("<img width='100' src='"+user.foto+"' />");

});
