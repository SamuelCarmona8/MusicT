

function setup(){



 var config = {
    apiKey: "AIzaSyCdsmtxSH01vIodMMmvz9SweV6HuS83kRI",
    authDomain: "fir-crud-5742c.firebaseapp.com",
    databaseURL: "https://fir-crud-5742c.firebaseio.com",
    projectId: "fir-crud-5742c",
    storageBucket: "fir-crud-5742c.appspot.com",
    messagingSenderId: "595430566238"
  };
  


  firebase.initializeApp(config);
  console.log(firebase);

  var database = firebase.database();
  var ref = database.ref("Album");
  
  var data = {
  		Titulo: " Si funca"
  }	

  ref.push(data);


}
