var firebaseConfig = {
      apiKey: "AIzaSyBZjdQLBWtH9WmwhxmN4TPT7P-7djjCTNs",
      authDomain: "kwitter-43c44.firebaseapp.com",
      databaseURL: "https://kwitter-43c44-default-rtdb.firebaseio.com",
      projectId: "kwitter-43c44",
      storageBucket: "kwitter-43c44.appspot.com",
      messagingSenderId: "377890757260",
      appId: "1:377890757260:web:cfe7c9fc7be1eda13739a9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Dab

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !! ";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose : "Adding Room Name" 
          }) ;
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
          }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name : " + Room_names);
    row = "<div class='room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();
 
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
