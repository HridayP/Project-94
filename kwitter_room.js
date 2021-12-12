
var firebaseConfig = {
      apiKey: "AIzaSyBwD2C2nxIJbLtl_8ld_-rhsRFHKnM1lBc",
      authDomain: "kwitter-8588a.firebaseapp.com",
      databaseURL: "https://kwitter-8588a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8588a",
      storageBucket: "kwitter-8588a.appspot.com",
      messagingSenderId: "628469195166",
      appId: "1:628469195166:web:b9daedbf5b365c878b368f"
    };
  
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
