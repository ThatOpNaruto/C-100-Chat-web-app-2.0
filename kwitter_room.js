//YOUR FIREBASE LINKS


var firebaseConfig = {
  apiKey: "AIzaSyA-ORXHIz200IDOHIz_AJxrexa4BVMH__8",
  authDomain: "weeatery-c256c.firebaseapp.com",
  databaseURL: "https://weeatery-c256c-default-rtdb.firebaseio.com",
  projectId: "weeatery-c256c",
  storageBucket: "weeatery-c256c.appspot.com",
  messagingSenderId: "556740756205",
  appId: "1:556740756205:web:c346e1b879e220d60382e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);    


function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"Adding room_name"
      });
      
      document.getElementById("room_name").value="";
      localStorage.setItem("room_name" , room_name );
      window.location="kwitter_page.html";

    }
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }



    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row="<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id);' ># " + Room_names +"</div><hr>" ;
      document.getElementById("output").innerHTML += row ;
      
       

      //End code
      });});}
getData();


function redirectToRoomName(name)
{
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";

}

