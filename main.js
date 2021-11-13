var firebaseConfig = {
    apiKey: "AIzaSyALlAo3lY2xzqY0n-zC9shlBk0J8B2QFNk",
    authDomain: "let-s-chat-e9729.firebaseapp.com",
    databaseURL: "https://let-s-chat-e9729-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-e9729",
    storageBucket: "let-s-chat-e9729.appspot.com",
    messagingSenderId: "737508994954",
    appId: "1:737508994954:web:1ba5f06d6f1cc2dcb56273"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
      user_name = localStorage.getItem("user_name");
  
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      
      function addRoom()
      {
        room_name = document.getElementById("room_name").value;
      
        firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
        });
      
          localStorage.setItem("room_name", room_name);
          
          window.location = "Chitter Chatter_room.html";
      }
      
      function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
             Room_names = childKey;
             console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
          });
        });
      
      }
      
      getData();
      
      function redirectToRoomName(name)
      {
        console.log(name);
        localStorage.setItem("room_name", name);
          window.location = "Chitter Chatter_room.html";
      }
      
      function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }
      
      function addUser() {
  
        user_name = document.getElementById("user_name").value;
      
        localStorage.setItem("user_name", user_name);
        
          window.location = "Chitter Chatter_room.html";
      }
      
      